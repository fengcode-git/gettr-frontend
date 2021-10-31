import { IconButton } from '@material-ui/core'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from "@material-ui/core/styles";

interface Props {
    src: string,
    onClose: (src: string) => void
}

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
    },
    image: {
        maxHeight: '150px'
    },
    btn: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    }
}))

const ImageBox = (props: Props) => {
    const classes = useStyles()
    const handleClose = () => {
        props.onClose(props.src)
    }
    return (
        <div className={classes.root}>
            <img src={props.src} alt="file" className={classes.image} />
            <IconButton className={classes.btn} onClick={handleClose} size="small">
                <CloseIcon></CloseIcon>
            </IconButton>
        </div>
    )
}

export default ImageBox
