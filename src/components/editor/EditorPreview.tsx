import React from 'react'
import {Editor} from "draft-js";
import EditorHelper from "./EditorHelper";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";

interface Props {
    storedState: string
}

const useStyles = makeStyles(theme => ({
    root: {
        cursor: "default",
        "& .DraftEditor-editorContainer": {
            padding: 0
        },
        "& .public-DraftEditor-content": {
            padding: 0
        },
        "& div.DraftEditor-root": {
            backgroundColor: "transparent"
        }
    }
}))

const EditorPreview = (props: Props) => {
    const editorState = EditorHelper.fromContent(props.storedState)
    const classes = useStyles()
    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Editor editorState={editorState} onChange={()=>{}} readOnly={true}/>
            </Box>
        </React.Fragment>
    )
}

export default EditorPreview