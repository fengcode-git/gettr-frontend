import React, { useState, useContext } from 'react'
import { EditorContext } from '../RichEditor'
import emojiData from 'emoji-mart/data/google.json'
import { NimblePicker } from 'emoji-mart'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { IconButton, Popover, ClickAwayListener } from "@material-ui/core";
import { EditorState, Modifier } from 'draft-js';

const EmojiPicker = () => {
    const [open, setOpen] = useState(false)
    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null)
    const context = useContext(EditorContext)
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchor(e.currentTarget)
        setOpen(true)
        e.stopPropagation()
    }
    const handleClickOutside = () => {
        setOpen(false)
    }
    const handleSelect = (emoji: any) => {
        const contentState = context.editorState.getCurrentContent()
        const targetRange = context.editorState.getSelection()
        const modifyerApi = targetRange.isCollapsed() ? Modifier.insertText : Modifier.replaceText
        const newContextState = modifyerApi(contentState, targetRange, emoji.native)
        const newEditorState = EditorState.push(context.editorState, newContextState, "insert-characters")
        context.setEditorState(newEditorState)
        setOpen(false)
    }
    return (
        <React.Fragment>
            <IconButton onClick={handleClick}>
                <InsertEmoticonIcon></InsertEmoticonIcon>
            </IconButton>
            <Popover open={open} anchorEl={anchor} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} >
                <ClickAwayListener onClickAway={handleClickOutside}>
                    <NimblePicker set='google' data={emojiData as any} showPreview={false} showSkinTones={false} onSelect={handleSelect}></NimblePicker>
                </ClickAwayListener>
            </Popover>
        </React.Fragment>
    )
}

export default EmojiPicker
