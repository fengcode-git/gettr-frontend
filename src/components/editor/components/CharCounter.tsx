import React from 'react'
import { EditorContext } from '../RichEditor'
import { Box, Typography } from "@material-ui/core";

interface Props {
    maxLength: number
}

const CharCounter = (props: Props) => {
    const context = React.useContext(EditorContext)
    let plainText = context.editorState.getCurrentContent().getPlainText('\u0001')
    plainText = plainText ? plainText : ''
    
    return (
        <Box>
            <Typography variant="caption">{`${plainText.length} / ${props.maxLength}`}</Typography>
        </Box>
    )
}

export default CharCounter
