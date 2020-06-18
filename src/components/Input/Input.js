import React from 'react';
import { TextField, TextareaAutosize, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { RTL } from '../../hoc';

const useStyle = makeStyles(theme => ({
    input: {
        width: '40vw',
        marginBottom: '5vh',
        backgroundColor: 'white',
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
    leftToRight: {
        textAlign: 'left'
    },
    error: {
        border: '1px solid red',
    }
}));

const Input = (props) => {
    const classes = useStyle();
    const { textArea, type, label, value, handleChange, name, error, placeholder, rightToLeft } = props;

    const getTextAreaStyle = () => {
        const style = [classes.input, classes.textArea];

        if (error) {
            style.push(classes.error);
        }

        if (!rightToLeft) {
            style.push(classes.leftToRight);
        }

        return style.join(' ');
    };

    return (
        <div dir="rtl">
             <RTL>
                {textArea ?
                <TextareaAutosize 
                    rows="5" 
                    className={getTextAreaStyle()} 
                    placeholder={placeholder}
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
                    label={rightToLeft ? label : null}
                    placeholder={rightToLeft ? null : label}
                    value={value}
                    inputProps={{style: rightToLeft ? { textAlign: 'right'} : { textAlign: 'left'}}}
                    onChange={handleChange}
                    color="secondary"
                    error={error}
                />}
             </RTL>
        </div>
    )
};

export default Input;
