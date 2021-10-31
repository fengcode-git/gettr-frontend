import React, { useState, createContext, useRef, useEffect } from 'react'
import {Avatar, Box, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import PluginEditor from '@draft-js-plugins/editor';
import { EditorState } from 'draft-js'
import "@draft-js-plugins/mention/lib/plugin.css"
import useToast from '../toast/useToast';
import CharCounter from './components/CharCounter';
import 'emoji-mart/css/emoji-mart.css'
import EmojiPicker from './components/EmojiPicker';
import ImageUpload from './components/ImageUpload';
import ImagePreview from './components/ImagePreview';
import EditorHelper from './EditorHelper';
import {useAppSelector} from "../../redux/hooks";

export interface IEditorData {
    content: string,
    images: Array<string>
}

interface Props {
    maxLength?: number,
    editorState: EditorState,
    setEditorState: React.Dispatch<React.SetStateAction<EditorState>>,
    onClick: (images: string[]) => void
}

interface IEditorContext {
    editorState: EditorState,
    setEditorState: React.Dispatch<React.SetStateAction<EditorState>>,
    editor: PluginEditor
}

export const EditorContext = createContext<IEditorContext>({} as IEditorContext);

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.common.white
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginLeft: theme.spacing(2)
    },
    avatar: {
        marginRight: theme.spacing(2)
    }
}))

const RichEditor = ({ maxLength = 777, ...rest }: Props) => {
    const [images, setImages] = useState<Array<string>>([])
    const editorRef = useRef<PluginEditor>(null)
    const { showWarning } = useToast()
    const classes = useStyles()
    const avatar = useAppSelector(state => state.account.avatar)
    const handleBeforeInput = (chars: string, editorState: EditorState, eventTimeStamp: number) => {
        const currentContentLength = EditorHelper.getLength(editorState);
        const selectedTextLength = EditorHelper.getLengthOfSelectedText(editorState);
        if (currentContentLength - selectedTextLength > maxLength - 1) {
            showWarning(`最多只能输入${maxLength}个字符`)
            return 'handled';
        } else {
            return "not-handled"
        }
    }

    const handlePastedText = (text: string, html: string | undefined, editorState: EditorState) => {
        const currentContentLength = EditorHelper.getLength(editorState);
        const selectedTextLength = EditorHelper.getLengthOfSelectedText(editorState);
        if (currentContentLength + text.length - selectedTextLength > maxLength) {
            showWarning(`最多只能输入${maxLength}个字符`)
            return 'handled';
        } else {
            return "not-handled"
        }
    }

    const handleSelectFile = (src: string) => {
        let newArray = images.slice()
        newArray.push(src)
        setImages(newArray)
    }

    const handleClick = () => {
        let text = EditorHelper.getPlainText(rest.editorState).trim()
        if (text.length <= 0) {
            showWarning('内容不能为空')
            return
        }
        rest.onClick(images)
    }

    const handleChange = (state: EditorState) => {
        rest.setEditorState(state)
    }

    useEffect(() => {
        editorRef.current?.focus()
    }, [])

    return (
        <div className={classes.root}>
            <Box display="flex">
                <Avatar src={avatar} className={classes.avatar}/>
                <PluginEditor ref={editorRef} editorState={rest.editorState} onChange={handleChange} handleBeforeInput={handleBeforeInput} handlePastedText={handlePastedText} />
            </Box>
            <ImagePreview images={images} setImages={setImages} />
            <div className={classes.toolbar}>
                <EditorContext.Provider value={{ editorState: rest.editorState, setEditorState: rest.setEditorState, editor: editorRef.current! }}>
                    <EmojiPicker />
                    <ImageUpload onSelectFile={handleSelectFile} />
                    <Box flexGrow={1} />
                    <CharCounter maxLength={maxLength} />
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>发 布</Button>
                </EditorContext.Provider>
            </div>
        </div>
    )
}

export default RichEditor