import React from 'react'
import { CircularProgress,makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    }
}))

const Loading = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    )
}

export default Loading