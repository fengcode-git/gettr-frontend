import { Button, Dialog, Typography, DialogTitle, DialogContent, IconButton, Paper } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from '@material-ui/icons/Create';
import RichEditor from '../editor/RichEditor';
import CloseIcon from '@material-ui/icons/Close';
import { useAppSelector } from '../../redux/hooks';
import { useHistory } from 'react-router-dom';
import Paths from "../../layout/Paths";
import { useState } from 'react';
import { EditorState } from 'draft-js';
import { insertPost } from '../../api/post.api';
import EditorHelper from '../editor/EditorHelper';
import useToast from '../toast/useToast';

interface Props {

}

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: '500px'
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1)
    },
    btn: {
        padding: theme.spacing(2),
        borderRadius: '100px',
        fontSize: '15px',
        fontWeight: 700,
        lineHeight: '18px',
        letterSpacing: '0.05em',
        marginBottom: theme.spacing(2)
    }
}))

const PublishButton = (props: Props) => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const state = useAppSelector(state => state.account)
    const  history = useHistory()
    const {showSuccess, showError} = useToast()
     const handlePublishClick = () => {
        if (state.isLogin) {
            setOpen(true)
        } else {
            history.push(Paths.ACCOUNT_LOGIN)
        }
    }
    const handleClose = () => {
        setOpen(false)
        setEditorState(EditorState.createEmpty())
    }
    const handleEditorClick = async (images: string[]) => {
        try {
            let content = EditorHelper.toContent(editorState)
            let result = await insertPost(content, images)
            showSuccess('发布成功')
            setEditorState(EditorState.createEmpty())
            setOpen(false)
        } catch (error) {
            showError(error.message)
        }
    }
    return (
        <React.Fragment>
            <Button variant="contained" color="secondary"
                fullWidth={true}
                className={classes.btn}
                startIcon={<CreateIcon />}
                onClick={handlePublishClick}
            >
                发布
            </Button>
            <Dialog open={open} onClose={handleClose} className={classes.root} fullWidth={true} maxWidth="sm">
                <DialogTitle disableTypography className={classes.title}>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6">发帖</Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <RichEditor editorState={editorState} setEditorState={setEditorState} onClick={handleEditorClick} />
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default PublishButton
