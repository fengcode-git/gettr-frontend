import { convertFromRaw, convertToRaw, EditorState } from "draft-js";

export default class EditorHelper {
    /** EditorState 转 JSON */
   static toContent(editorState: EditorState){
        let content = convertToRaw(editorState.getCurrentContent())
        return JSON.stringify(content)
    }

    static createEmptyState(){
        return EditorState.createEmpty()
    }

    /** JSON 转 EditorState */
    static fromContent(json: string): EditorState{
        let content = convertFromRaw(JSON.parse(json))
        return EditorState.createWithContent(content)
    }

    static getPlainText(editorState: EditorState): string{
        let currentContent  = editorState.getCurrentContent()
        return currentContent.getPlainText('')
    }

    static getLength(editorState: EditorState){
        let currentContent  = editorState.getCurrentContent()
        return currentContent.getPlainText('').length
    }

    static getLengthOfSelectedText(editorState: EditorState){
        const currentSelection = editorState.getSelection();
        const isCollapsed = currentSelection.isCollapsed();
        let length = 0;
        if (!isCollapsed) {
            const currentContent = editorState.getCurrentContent();
            const startKey = currentSelection.getStartKey();
            const endKey = currentSelection.getEndKey();
            const startBlock = currentContent.getBlockForKey(startKey);
            const isStartAndEndBlockAreTheSame = startKey === endKey;
            const startBlockTextLength = startBlock.getLength();
            const startSelectedTextLength = startBlockTextLength - currentSelection.getStartOffset();
            const endSelectedTextLength = currentSelection.getEndOffset();
            const keyAfterEnd = currentContent.getKeyAfter(endKey);
            if (isStartAndEndBlockAreTheSame) {
                length += currentSelection.getEndOffset() - currentSelection.getStartOffset();
            } else {
                let currentKey = startKey;
                while (currentKey && currentKey !== keyAfterEnd) {
                    if (currentKey === startKey) {
                        length += startSelectedTextLength + 1;
                    } else if (currentKey === endKey) {
                        length += endSelectedTextLength;
                    } else {
                        length += currentContent.getBlockForKey(currentKey).getLength() + 1;
                    }

                    currentKey = currentContent.getKeyAfter(currentKey);
                };
            }
        }
        return length;
    }
}