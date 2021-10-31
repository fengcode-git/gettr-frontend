import { Grid, Box, Link } from '@material-ui/core';
import React from 'react'
import AccountFormBox from "./AccountFormBox";
import Paths from '../../layout/Paths';
import { Link as RouterLink, useHistory } from "react-router-dom";
import ExtInput from '../../controls/ExtInput';
import { useFormik } from "formik";
import * as yup from "yup";
import ExtButton from '../../controls/ExtButton';
import { submitRegister } from '../../api/account.api';
import useToast from '../toast/useToast';

const validationSchema = yup.object({
    username: yup.string().matches(/^[a-zA-Z]+/, '账号必须以字母开头').matches(/^[a-zA-Z]\w{3,10}$/, "账号为3~10位的字符（数字、字母、下划线）").required('请输入账号'),
    password: yup.string().matches(/^[a-zA-Z0-9]{3,15}$/, "密码为3~15位的字符（数字、字母）").required('请输入密码'),
    repeatPassword: yup.string().oneOf([yup.ref('password'), ""], '两次输入的密码不匹配')
})


const RegisterForm = () => {
    const [loading, setLoading] = React.useState(false)
    const {showError, showSuccess} = useToast()
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            repeatPassword: ''
        },
        onSubmit: async (values) => {
            setLoading(true)
            try {
                await submitRegister(values.username, values.password)
                formik.resetForm()
                showSuccess('注册成功')
                history.push(Paths.ACCOUNT_LOGIN)

            } catch (error) {
                showError((error as Error).message)
            } finally {
                setLoading(false)
            }
        },
        validationSchema: validationSchema
    })

    return (
        <React.Fragment>
            <AccountFormBox title="注册新账号">
                <Grid item xs={12}>
                    <form autoComplete="off" onSubmit={formik.handleSubmit}>
                        <Grid item xs={12}>
                            <ExtInput label="账号名称" formik={formik} name="username" autoFocus={true} />
                            <ExtInput label="登录密码" formik={formik} name="password" type="password" />
                            <ExtInput label="重新输入密码" formik={formik} name="repeatPassword" type="password" />
                        </Grid>
                        <Grid item xs={12}>
                            <Box marginTop={2}>
                                <ExtButton isLoading={loading} type="submit" color="primary" startIcon={null} fullWidth size="large" variant="contained">注 册</ExtButton>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box marginTop={2}>
                                <Link component={RouterLink} to={Paths.ACCOUNT_LOGIN}>登录已有账号</Link>
                            </Box>
                        </Grid>
                    </form>
                </Grid>
            </AccountFormBox>
        </React.Fragment>
    )
}

export default RegisterForm
