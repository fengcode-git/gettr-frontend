import React, {useState} from 'react'
import {Button, Avatar, Typography, Menu, MenuItem} from "@material-ui/core";
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import ExtConfirmDialog from '../../controls/ExtConfirmDialog';
import {logoutSubmit} from '../../redux/account/account.slice';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    account: {
        color: theme.palette.common.white,
        textTransform: "lowercase"
    }
}))

const ToolsPerson = () => {
    const classes = useStyles()
    const [anchor, setAnchor] = useState<HTMLElement | null>(null)
    const state = useAppSelector(state => {
        return {
            name: state.account.username,
            avatar: state.account.avatar
        }
    })
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)
    const handleExitClick = () => {
        setAnchor(null)
        setOpen(true)
    }
    const handleLogout = () => {
        dispatch(logoutSubmit())
    }

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchor(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchor(null)
    }

    return (
        <React.Fragment>
            <Button endIcon={<Avatar src={state.avatar}/>} onClick={handleOpenMenu}>
                <Typography className={classes.account}>{state.name}</Typography>
            </Button>
            <Menu open={Boolean(anchor)} onClose={handleCloseMenu} anchorEl={anchor}>
                <MenuItem>个人资料</MenuItem>
                <MenuItem>设置</MenuItem>
                <MenuItem onClick={handleExitClick}>登出</MenuItem>
            </Menu>
            <ExtConfirmDialog title="确认退出该账号吗?" open={open} setOpen={setOpen} onClickOk={handleLogout}/>
        </React.Fragment>
    )
}

export default ToolsPerson