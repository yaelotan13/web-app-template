import React, { useState } from 'react';
import { Box, Typography, Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';

import phone from '../../assets/icons/phone.png';
import Input from '../../components/Input';

const useStyle = makeStyles(theme => ({
    container: {
        marginTop: '15vh',
        height: '75vh',
    },
    contentContainer: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
        }
    },
    content: {
        width: '50vw',
        paddingLeft: '5vw',
        paddingTop: '8vh',
        [theme.breakpoints.down('sm')]: {
            width: '90vw',
            marginLeft: '5vw',
        }
    },
    head: {
        fontSize: 26,
        textAlign: 'center'
    },
    subHeader: {
        marginTop: '2vh'
    },
    phoneContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '3vh',
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
        }
    },
    icon: {
        width: '5vw',
        height: '5vh',
        backgroundImage: `url(${phone})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginRight: '1vw',
        [theme.breakpoints.down('sm')]: {
            width: '10vw',
            height: '10vh',
        }
    },
    form: {
        width: '50vw',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '10vh',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '90vw',
            marginLeft: '5vw',
            marginTop: '-5vh'
        }
    },
    button: {
        backgroundColor: '#F3FF40',
        padding: '1vh 3vw',
        [theme.breakpoints.down('sm')]: {
            width: '40vw',
        }
    },
    error: {
        color: 'red'
    }
}));

const Contact = (props) => {
    const classes = useStyle();
    const [sending, setSending] = useState(false);
    const [serverError, setServerError] = useState(null);
    const [hasInputsError, setHasInputsError] = useState(false);
    const [inputs, setInputs] = useState({
        fullName: {
            value: '',
            touched: false,
            hasError: false,
        },
        email: {
            value: '',
            touched: false,
            hasError: false,
        },
        content: {
            value: '',
            touched: false,
            hasError: false,
        }
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setHasInputsError(false);
        setInputs(prevState => {
            const updatedState = {
                ...prevState,
                [name]: {
                    touched: true,
                    value: value,
                    hasError: value.length === 0
                } 
            };
            return updatedState;
        });
    }

    const validate = () => {
        const updatedInputs = {...inputs};
        const keys = Object.keys(inputs);
        let hasError = false;

        for (let key of keys) {
            if (inputs[key].value.length === 0) {
                hasError = true;
                updatedInputs[key].hasError = true;
            }
        }

        setInputs(updatedInputs);
        return hasError;
    };

    const resetInput = () => {
        const updatedInputs = {...inputs};
        const keys = Object.keys(inputs);

        for (let key of keys) {
            inputs[key].value = '';
            inputs[key].hasError = false;
            inputs[key].touched = false;
        }

        setInputs(updatedInputs);
    };

    const submit = async () => {
        const hasError = validate();
        if (hasError) {
            setHasInputsError(hasError);
        } else {
            setSending(true);
            try {
                const response = await axios.post('/send', { 
                    fullName: inputs.fullName.value,
                    email: inputs.email.value,
                    content: inputs.content.value
                });
                
                console.log(response);
                response.status === 200 ? setServerError(false) : setServerError(true);
                setSending(false);
                resetInput();
            } catch (error) {
                setServerError(true);
            }
        }
    };

    return (
        <Box className={classes.container}>
            <Typography variant="h1" className={classes.head}>Contact Me</Typography>
            <Box className={classes.contentContainer}>
                <Box className={classes.content}>
                    <Typography variant="subtitle1">
                        A paragraph about why you should send me a messge and more info about me.
                        <br />
                        Also there would be here Tuli's phone number so she could get whatts'ups
                    </Typography>
                    <Box className={classes.phoneContainer}>
                        <Box className={classes.icon} />
                        <Typography>054-6323450</Typography>
                    </Box>
                </Box>
                <Box className={classes.form}>
                    <Input label="Full Name" type="text" name="fullName" value={inputs.fullName.value} handleChange={handleChange} error={inputs.fullName.hasError} />
                    <Input label="Email" type="email" name="email" value={inputs.email.value} handleChange={handleChange} error={inputs.email.hasError} />
                    <Input textArea name="content" value={inputs.content.value} handleChange={handleChange} error={inputs.content.hasError} />
                    <Button className={classes.button} onClick={submit}>
                        {sending ? <CircularProgress size="30" /> : 'SEND'}
                    </Button>
                    {hasInputsError && <Typography variant="subtitle1" className={classes.error}>Please fill all the fileds</Typography>}
                </Box>
            </Box>
        </Box>
    )
};

export default Contact;
