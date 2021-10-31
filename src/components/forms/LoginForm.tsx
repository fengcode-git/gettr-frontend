import { Grid, Link, Box } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import Paths from '../../layout/Paths'
import AccountFormBox from './AccountFormBox';
import { useFormik } from 'formik';
import * as yup from 'yup'
import ExtInput from '../../controls/ExtInput';
import ExtButton from '../../controls/ExtButton';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useHistory } from "react-router";
import { loginSubmit } from '../../redux/account/account.slice';
import { useEffect } from 'react';
import useToast from '../toast/useToast';

const useStyles = makeStyles(theme => ({
    loginBtn: {
        marginTop: theme.spacing(2)
    },
    rememberMe: {
        userSelect: "none",
        marginTop: theme.spacing(2)
    }
}))

const validationSchema = yup.object({
    username: yup.string().matches(/^[a-zA-Z]+/, '账号必须以字母开头').matches(/^[a-zA-Z]\w{2,9}$/, "账号为3~10位的字符（数字、字母、下划线）").required('请输入账号'),
    password: yup.string().matches(/^[a-zA-Z0-9]{3,15}$/, "密码为3~15位的字符（数字、字母）").required('请输入密码')
})


const LoginForm = () => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const {showError} = useToast()
    const accountState = useAppSelector(state => {
        return state.account
    })
    const history = useHistory()

    useEffect(() => {
        if (accountState.error) {
            showError(accountState.error)
        }
        if (accountState.token) {
            history.replace('/')
        }
    },[accountState]) // eslint-disable-line react-hooks/exhaustive-deps

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            dispatch(loginSubmit({ username: values.username, password: values.password }))
        }
    })
    return (
        <AccountFormBox title="用户登录">
            <Grid item xs={12}>
                <form onSubmit={formik.handleSubmit} autoComplete="off">
                    <Grid item xs={12}>
                        <ExtInput name="username" label="账号名称" formik={formik} autoFocus={true}/>
                        <ExtInput name="password" label="登录密码" formik={formik} type="password" />
                    </Grid>
                    <Grid item xs={12}>
                        <Box marginTop={1}>
                            <ExtButton isLoading={accountState.loading} type="submit" color="primary" startIcon={null} fullWidth size="large" variant="contained">登 录</ExtButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} container justify="space-between" alignItems="center" className={classes.rememberMe} >
                        <Box marginTop={1}>
                            <Link component={RouterLink} to={Paths.ACCOUNT_REGISTER}>注册新账号</Link>
                        </Box>
                    </Grid>
                </form>
            </Grid>
        </AccountFormBox>
    )
}

export default LoginForm