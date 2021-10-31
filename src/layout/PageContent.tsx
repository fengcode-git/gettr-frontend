import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { Switch } from "react-router-dom";
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/account/LoginPage';
import RegisterPage from '../pages/account/RegisterPage';
import Paths from './Paths';
import WithMenuLayout from './WithMenuLayout';
import DefaultLayout from './DefaultLayout';

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(2)
    }
}))

const PageContent = () => {
    const classes = useStyles()
    return (
        <Container maxWidth="lg">
            <div className={classes.toolbar} />
            <Switch>
                <WithMenuLayout exact={true} path="/" component={HomePage} />
                <DefaultLayout path={Paths.ACCOUNT_LOGIN} component={LoginPage} />
                <DefaultLayout path={Paths.ACCOUNT_REGISTER} component={RegisterPage} />
                <DefaultLayout path="*" component={NotFoundPage} />
            </Switch>
        </Container>
    )
}

export default PageContent
