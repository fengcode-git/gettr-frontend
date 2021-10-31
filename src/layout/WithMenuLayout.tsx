import React from 'react'
import { RouteComponentProps, Route, useLocation } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Paper, Typography } from '@material-ui/core'
import PcShow from '../components/common/PcShow'
import MenuList from '../components/sidebar/MenuList'
import RouteAnimation from '../components/common/RouteAnimation'
import PublishButton from '../components/sidebar/PublishButton'

interface Props {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>,
    path?: string,
    exact?: boolean
}

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(2)
    }
}))

const WithMenuLayout = (props: Props) => {
    const { component: Component, ...rest } = props;
    const classes = useStyles()
    let location = useLocation()
    return (
        <Route {...rest} render={matchProps => (
            <React.Fragment>
                <Grid container className={classes.container} spacing={2}>
                    <PcShow>
                        <Grid item md={3}>
                            <PublishButton></PublishButton>
                            <MenuList></MenuList>
                        </Grid>
                    </PcShow>
                    <Grid item xs={12} md={6}>
                        <RouteAnimation>
                            <Component {...matchProps} />
                        </RouteAnimation>
                    </Grid>
                    <PcShow>
                        <Grid item md={3}>
                            <Typography>侧边栏</Typography>
                        </Grid>
                    </PcShow>
                </Grid>
            </React.Fragment>
        )} />
    )
}

export default WithMenuLayout