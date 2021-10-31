import { Avatar, Grid, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import { teal } from "@material-ui/core/colors";

interface Props {
    title: string
    children: React.ReactNode
}

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(8),
        padding: theme.spacing(2)
    },
    title: {
        marginBottom: theme.spacing(1),
        textAlign: "center",
        transform: "translateY(-20px)"
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        backgroundColor: teal[500],
        transform: 'translateY(-50px)'
    },
    icon: {
        transform: 'scale(2.5)'
    }
}))

const AccountFormBox = (props: Props) => {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <Grid item container justify="center">
                <Avatar className={classes.avatar}>
                    <PersonIcon className={classes.icon} />
                </Avatar>
            </Grid>
            <Grid item xs={12} className={classes.title}>
                <Typography variant="h5">{props.title}</Typography>
            </Grid>
            {props.children}
        </Grid>
    )
}

export default AccountFormBox