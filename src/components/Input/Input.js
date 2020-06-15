import React from 'react';
import { TextField, TextareaAutosize } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
    input: {
        width: '40vw',
        marginBottom: '5vh',
        [theme.breakpoints.down('sm')]: {
            width: '80vw',
        }
    },
    textArea: {
        border: '1px solid #C4C3C3',
        padding: '1vh 1vw',
        '&:focus': {
            outline: 'none !important',
            border: '1px solid black',
            boxShadow: 'none'
        }
    },
    error: {
        border: '1px solid red',
    }
}));

const Input = (props) => {
    const classes = useStyle();
    const { textArea, type, label, value, handleChange, name, error } = props;

    return (
        <>
            {textArea ?
                <TextareaAutosize 
                    rows="5" 
                    className={error ? [classes.input, classes.textArea, classes.error].join(' '): [classes.input, classes.textArea].join(' ')} 
                    placeholder="Type your message here..."
                    value={value}
                    name="content"
                    onChange={handleChange}
                />
                :
                <TextField 
                    name={name}
                    type={type}
                    className={classes.input} 
                    variant="outlined" 
                    label={label}
                    value={value}
                    onChange={handleChange}
                    color="secondary"
                    error={error}
                />
            }
        </>
    )
};

export default Input;
