import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

const useStyle = makeStyles(theme => ({
    rightToLeft: {
        textAlign: 'right'
    }
}));

const WithRightToLeft = (Component) => {
    const classes = useStyle();
    const [t, i18n] = useTranslation();
    
    const isRightToLeft = () => i18n.language === "Hebrew";

    return (
        <>
        </>
    )

};

export default WithRightToLeft;
