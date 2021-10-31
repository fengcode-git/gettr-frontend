import { makeStyles } from '@material-ui/core'
import React from 'react'

interface Props {
    images: Array<string>
}

const useStyles = makeStyles({
    root: {
        marginTop: '10px',
        overflow: 'hidden',
        borderRadius: '10px',
        display: 'flex',
        maxHeight: '500px',
        position: 'relative',
        padding: '0',
        margin: '0',
        boxSizing: 'border-box',
        cursor: 'pointer'
    },
    table: {
        display: 'grid',
        maxHeight: '284px',
        width: '100%',
        gridGap:'2px',
        overflow: 'hidden',
        gridTemplateColumns: 'auto auto'
    }
})

const ImageViewer = (props: Props) => {
    let classes = useStyles()
    if (props.images.length == 0) {
        return null
    }
     return (
        <div className={classes.root}>

        </div>
    )
}

export default ImageViewer
