import { Container, AppBar, Toolbar, Box, IconButton, Link, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import ToolsPerson from './ToolsPerson';
import ToolsGuest from './ToolsGuest';
import SearchBar from "./SearchBar";
import { openSidebar } from '../../redux/dashboard/dashboard.slice';
import PhoneShow from '../common/PhoneShow';
import PcShow from '../common/PcShow';

const useStyles = makeStyles(theme => ({
    title: {
        color: theme.palette.common.white
    }
}))

const Navbar = () => {
    const classes = useStyles()
    const accountState = useAppSelector(state => state.account)
    const dispatch = useAppDispatch()

    const clickMenu = () => {
        dispatch(openSidebar())
    }

    return (
        <AppBar position="fixed">
            <Container maxWidth="lg">
                <Toolbar>
                    <PhoneShow>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={clickMenu}>
                            <MenuIcon />
                        </IconButton>
                    </PhoneShow>
                    <Link component={RouterLink} to="/">
                        <Typography variant="h6" className={classes.title}>G-ASK</Typography>
                    </Link>
                    <Box flex={1}></Box>
                    <PcShow>
                        <Box marginRight={1}>
                            <SearchBar></SearchBar>
                        </Box>
                    </PcShow>
                    {accountState.token ? <ToolsPerson /> : <ToolsGuest />}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar