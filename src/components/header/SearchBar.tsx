import React from 'react'
import { makeStyles, fade } from "@material-ui/core/styles";
import { IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        color: theme.palette.common.white,
    },
    iconWrap: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        left: '0',
        top: '0',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconButton: {
        color: theme.palette.common.white
    },
    input: {
        color: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        marginLeft: theme.spacing(2),
        paddingLeft: theme.spacing(5),
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        }
    }
}))

interface Props {

}

const SearchBar = (props: Props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.iconWrap}>
                <IconButton classes={{ root: classes.iconButton }}>
                    <SearchIcon />
                </IconButton>
            </div>
            <InputBase classes={{ root: classes.root, input: classes.input }} placeholder="Search..." />
        </div>
    )
}

export default SearchBar
