import React, { useState } from 'react';
import { Box, Typography, Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import phone from '../../assets/icons/phone.png';
import email from '../../assets/icons/email.png';
import Input from '../../components/Input';

const useStyle = makeStyles(theme => ({
    container: {
        marginTop: '15vh',
        backgroundColor: '#F6F6F6',
        paddingTop: '5vh',
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '60vw',
        marginLeft: '20vw',
    },
    content: {
        paddingTop: '4vh',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            paddingLeft: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '0vh',
        }
    },
    head: {
        textAlign: 'center',
        marginBottom: '2vh',
        [theme.breakpoints.down('sm')]: {
            fontSize: 32
        }
    },
    rightToLeftMainHeader: {
        fontFamily: "'Amatic SC', cursive"
    },
    subHeader: {
        marginTop: '2vh'
    },
    contactContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    separator: {
        margin: '0 3vw',
        fontSize: 40,
        color: '#A8A6A7'
    },
    icon: {
        width: '5vw',
        height: '5vh',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('sm')]: {
            marginRight: '1vw'
        },
        [theme.breakpoints.down('xs')]: {
            marginRight: '2vw',
            width: '7vw',
            height: '7vh',
        }
    },
    phone: {
        backgroundImage: `url(${phone})`,
    },
    email: {
        backgroundImage: `url(${email})`,
    },
    formTitle: {
        marginBottom: '3vh',
        color: '#4B4B4B',
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        }
    },
    formTitleRightToLeft: {
        fontFamily: "'Alef', sans-serif",
        marginTop: 4
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '8vh',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '90vw',
            marginLeft: '5vw',
            marginTop: '-2vh'
        }
    },
    button: {
        backgroundColor: '#F3FF40',
        padding: '1vh 3vw',
        width: '15vw',
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
    const [t, i18n] = useTranslation();
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
        phoneNumber: {
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

    const rightToLeft = () => i18n.language === "Hebrew";

    return (
        <Box className={classes.container}>
            <Typography variant="h1" className={rightToLeft ? [classes.head, classes.rightToLeftMainHeader].join(' ') : classes.head}>{t("contact-me")}</Typography>
            <Box className={classes.contentContainer}>
                <Box className={classes.content}>
                    <Box className={classes.contactContainer}>
                        <Box className={classes.contactContainer}>
                            <Box className={[classes.icon, classes.phone].join(' ')} />
                            <Typography>054-6323450</Typography>
                        </Box>
                        <Typography className={classes.separator}>|</Typography>
                        <Box className={classes.contactContainer}>
                            <Box className={[classes.icon, classes.email].join(' ')} />
                            <Typography>tuli@gmail.com</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.form}>
                    <Typography variant="subtitle1" className={rightToLeft ? [classes.formTitle, classes.formTitleRightToLeft].join(' ') : classes.formTitle}>{t("leave-a-message")}</Typography>
                    <Input label={t("full-name")} type="text" name="fullName" value={inputs.fullName.value} handleChange={handleChange} error={inputs.fullName.hasError} rightToLeft />
                    <Input label={t("email")} type="email" name="email" value={inputs.email.value} handleChange={handleChange} error={inputs.email.hasError} rightToLeft />
                    <Input label={t("phone-number")} type="text" name="phoneNumber" value={inputs.phoneNumber.value} handleChange={handleChange} error={inputs.phoneNumber.hasError} rightToLeft />
                    <Input textArea placeholder={t("type-your-message-here")} name="content" value={inputs.content.value} handleChange={handleChange} error={inputs.content.hasError} rightToLeft />
                    <Button className={classes.button} onClick={submit}>
                        {sending ? <CircularProgress size="30" /> : t("send")}
                    </Button>
                    {hasInputsError && <Typography variant="subtitle1" className={classes.error}>{t("fill-all-fields-error")}</Typography>}
                </Box>
            </Box>
        </Box>
    )
};

export default Contact;
