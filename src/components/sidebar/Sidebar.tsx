import React from 'react'
import { SwipeableDrawer, Hidden } from '@material-ui/core'
import MenuList from './MenuList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { closeSidebar } from '../../redux/dashboard/dashboard.slice';
import UserInfo from './UserInfo';
import { makeStyles } from "@material-ui/core/styles";
import PublishButton from './PublishButton';



interface Props {
}

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 300
    }
}))

const Sidebar = (props: Props) => {
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => {
        return state.dashboard
    })

    const handleClose = () => {
        dispatch(closeSidebar())
    }

    return (
        <Hidden mdUp>
            <SwipeableDrawer open={state.open} onClose={handleClose} onOpen={() => { }} className={classes.root}>
                <div className={classes.root}>
                    <UserInfo />
                    <PublishButton></PublishButton>
                    <MenuList></MenuList>
                </div>
            </SwipeableDrawer>
        </Hidden>
    )
}

export default Sidebar