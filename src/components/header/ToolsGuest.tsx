import React from 'react'
import { Button, Box, IconButton, Hidden } from "@material-ui/core";
import { useHistory } from "react-router";
import Paths from '../../layout/Paths';
import SearchIcon from '@material-ui/icons/Search'
import { LoginIcon, UserAddIcon } from "@heroicons/react/outline";

const ToolsGuest = () => {
    const history = useHistory()
    const clickLogin = () => {
        history.push(Paths.ACCOUNT_LOGIN)
    }
    const clickRegister = () => {
        history.push(Paths.ACCOUNT_REGISTER)
    }

    const mobile = (
        <Hidden mdUp>
            <IconButton color="inherit" title="搜索">
                <SearchIcon />
            </IconButton>
            <IconButton color="inherit" title="登录" onClick={clickLogin}>
                <LoginIcon height='24' width='24' />
            </IconButton>
            <IconButton color="inherit" title="注册账号" onClick={clickRegister}>
                <UserAddIcon height='24' width='24' />
            </IconButton>
        </Hidden>
    )

    const pc = (
        <Hidden smDown>
            <Button color="inherit" variant="outlined" onClick={clickLogin}>登录</Button>
            <Box marginLeft={1} clone>
                <Button color="secondary" variant="contained" onClick={clickRegister}>注册</Button>
            </Box>
        </Hidden>
    )
    return (
        <React.Fragment>
            {mobile}
            {pc}
        </React.Fragment>
    )
}

export default ToolsGuest
