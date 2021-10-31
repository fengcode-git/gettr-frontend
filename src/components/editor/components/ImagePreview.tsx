import { Box } from '@material-ui/core'
import React from 'react'
import ImageBox from './ImageBox'


interface Props {
    images: Array<string>,
    setImages: React.Dispatch<React.SetStateAction<string[]>>
}

const ImagePreview = (props: Props) => {
    const handleClose = (src: string) => {
        let newList = props.images.filter(value => {
            return value !== src
        })
        props.setImages(newList)
    }
    return (
        <Box display="flex" flexWrap="wrap">
            {props.images.map(value => (
                <ImageBox src={value} key={value} onClose={() => handleClose(value)}></ImageBox>
            ))}
        </Box>
    )
}

export default ImagePreview
