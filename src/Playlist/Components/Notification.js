import React from 'react';
import clsx from 'clsx';
import { Snackbar, SnackbarContent, IconButton, makeStyles } from '@material-ui/core';
import { Close, CheckCircle, Warning, Error as ErrorIcon, Info } from '@material-ui/icons';
import { amber, green } from '@material-ui/core/colors';

const variantIcon = {
    success: CheckCircle,
    warning: Warning,
    error: ErrorIcon,
    info: Info,
};

const useStyles1 = makeStyles(theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

function MySnackbarContentWrapper(props) {
    const classes = useStyles1();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <Close className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

function Notification(props) {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={props.open}
            autoHideDuration={2500}
            onClose={props.handleClose}
        >
            <MySnackbarContentWrapper
                onClose={props.handleClose}
                variant={props.notification.color}
                message={props.notification.message}
            />
        </Snackbar>
    );
}

export default Notification;
