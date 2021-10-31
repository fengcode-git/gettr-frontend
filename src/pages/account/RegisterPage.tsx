import { Container, Paper } from '@material-ui/core'
import React from 'react'
import RegisterForm from '../../components/forms/RegisterForm'

const RegisterPage = () => {
    return (
        <Container maxWidth="sm">
                <Paper elevation={3}>
                    <RegisterForm></RegisterForm>
                </Paper>
            </Container>
    )
}

export default RegisterPage