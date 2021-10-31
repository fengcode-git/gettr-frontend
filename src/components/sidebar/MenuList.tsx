import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined'
import { Link } from "react-router-dom";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { closeSidebar } from '../../redux/dashboard/dashboard.slice';

interface Props {

}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    menuItem: {
        borderRadius: '20px'
    }
}));


interface MenuItemProps {
    icon: React.ReactNode,
    title: string,
    to: string
}

const MenuItem = (props: MenuItemProps) => {
    const classes = useStyles();
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(closeSidebar())
    }
    return (
        <ListItem button component={Link} to={props.to} onClick={handleClick} className={classes.menuItem}>
            <ListItemIcon>
                {props.icon}
            </ListItemIcon>
            <ListItemText>{props.title}</ListItemText>
        </ListItem>
    )
}


const MenuList = (props: Props) => {
    const classes = useStyles();
    const state = useAppSelector(state => state.account)

    const logout = (
        <React.Fragment>
            <Divider></Divider>
            <MenuItem icon={<ExitToAppIcon />} title="退出登录" to="/"></MenuItem>
        </React.Fragment>
    )
    return (
        <div className={classes.root}>
            <List>
                <MenuItem icon={<HomeIcon />} title="首页" to="/"></MenuItem>
                <MenuItem icon={<SearchOutlinedIcon />} title="搜索" to="/"></MenuItem>
                <Divider></Divider>
                <MenuItem icon={<ContactSupportOutlinedIcon />} title="我的问题" to="/"></MenuItem>
                <MenuItem icon={<ForumOutlinedIcon />} title="我的回答" to="/"></MenuItem>
                <MenuItem icon={<FavoriteBorderOutlinedIcon />} title="我的收藏" to="/"></MenuItem>
                {state.token && logout}
            </List>
        </div>
    )
}

export default MenuList
