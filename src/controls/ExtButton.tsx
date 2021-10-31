import React from 'react'
import { ButtonProps, Button } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


interface Props {
    isLoading?: boolean
}

const useStyles = makeStyles(theme => ({
    progress: {
        marginRight: theme.spacing(1)
    }
}))

const ExtButton = ({ disabled, startIcon, children, isLoading = false, ...rest }: Props & ButtonProps) => {
    const classes = useStyles()
    disabled = isLoading ? true : false
    startIcon = startIcon == null ? <CheckCircleOutlineIcon /> : startIcon
    startIcon = isLoading ? null : startIcon
    const progress = isLoading ? <CircularProgress className={classes.progress} size={20} /> : null
    return (
        <Button disabled={disabled} startIcon={startIcon} {...rest}>
            {progress}
            {children}
        </Button>
    )
}

export default ExtButton