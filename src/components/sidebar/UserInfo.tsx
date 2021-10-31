import React from 'react'
import { Typography, Link } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import avatar from '../../assets/image/avatar.jpg'
import teal from '@material-ui/core/colors/teal';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Link as RouterLink } from "react-router-dom";
import Paths from '../../layout/Paths';
import { closeSidebar } from '../../redux/dashboard/dashboard.slice';


interface Props {

}

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        backgroundColor: teal[500]
    },
    avatar: {
        height: '64px',
        width: '64px',
        borderRadius: '50%'
    },
    text: {
        color: theme.palette.common.white,
        marginTop: theme.spacing(2)
    }
}))

const UserInfo = (props: Props) => {
    const classes = useStyle()
    const state = useAppSelector(state => {
        return state.account
    })
    const dispatch = useAppDispatch()

    const handleClose = () => {
        dispatch(closeSidebar())
    }

    let user = (<Typography className={classes.text}>{state.username}</Typography>)
    let login = <Link component={RouterLink} to={Paths.ACCOUNT_LOGIN} className={classes.text} onClick={handleClose}>登录账号</Link>

    return (
        <div className={classes.root}>
            <img className={classes.avatar} src={avatar} alt="Avatar"></img>
            {state.token ? user : login}
        </div>
    )
}

export default UserInfo
