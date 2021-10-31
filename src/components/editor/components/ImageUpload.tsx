import React, { useRef } from 'react'
import { IconButton } from "@material-ui/core";
import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined';
import { makeStyles } from "@material-ui/core/styles";
import { upload } from '../../../api/file.api';
import useToast from '../../toast/useToast';

interface Props {
    onSelectFile?: (fileSrc: string) => void
    disabled?: boolean
}

const useStyles = makeStyles(theme => ({
    file: {
        display: 'none'
    }
}))

const ImageUpload = (props: Props) => {
    const classes = useStyles()
    const inputRef = useRef<HTMLInputElement>(null)
    const { showError } = useToast()
    const handleClick = () => {
        inputRef.current?.click()
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let files = e.target.files
        if (files && files.length > 0) {
            let file = files[0]
            upload(file).then(result => {
                if (props.onSelectFile) {
                    props.onSelectFile(result)
                }
            }).catch(error => {
                showError(error.message)
            }).finally(() => {
                e.target.files = null
            })
        }
    }
    return (
        <React.Fragment>
            <input type="file" ref={inputRef} accept="image/png, image/jpeg, image/gif, image/jpg" onChange={handleChange} className={classes.file}></input>
            <IconButton onClick={handleClick} disabled={props.disabled}>
                <PanoramaOutlinedIcon></PanoramaOutlinedIcon>
            </IconButton>
        </React.Fragment>
    )
}

export default ImageUpload
