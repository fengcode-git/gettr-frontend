import React from 'react'
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { IPostView } from '../../types';

interface Props {
    postView: IPostView,
    onDelete: () => void
}

const PostMenu = (props: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleDelete = () => {
        setAnchorEl(null)
        props.onDelete()
    }

    // const isDelete = 
    return (
        <div>
            <IconButton onClick={handleClick}>
                <MoreHorizIcon></MoreHorizIcon>
            </IconButton>
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleDelete}>
                <MenuItem>删除</MenuItem>
            </Menu>
        </div>
    )
}

export default PostMenu
