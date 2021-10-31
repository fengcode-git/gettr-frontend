import { EditorState } from "draft-js";

/** 获取编辑器文本长度 */
export const getLength = (state: EditorState) => {
    let plainText = state.getCurrentContent().getPlainText('\u0001')
    plainText = plainText ? plainText : ''
    return plainText.length
}