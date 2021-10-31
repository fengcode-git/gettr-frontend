import React from 'react'
import { Paper, Container } from "@material-ui/core"
import LoginForm from '../../components/forms/LoginForm';


const LoginPage = () => {
    return (
        <Container maxWidth="sm">
            <Paper elevation={3}>
                <LoginForm />
            </Paper>
        </Container>
    )
}

export default LoginPage