import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { IPostView } from "../../types";
import { Avatar, Box, IconButton, Paper } from "@material-ui/core";
import DateHelper from "../../libs/DateHelper";
import EditorPreview from "../editor/EditorPreview";
import PostMenu from './PostMenu';

interface Props {
    postView: IPostView,
    avatarSize: "small" | "large"
}

const useStyles = (props: Props) => {
    const size = props.avatarSize === "small" ? '24px' : '50px'
    return makeStyles(theme => ({
        root: {
            display: 'flex',
            marginBottom: theme.spacing(1),
            padding: theme.spacing(2),
            transition: "background-color 200ms",
            "&:hover": {
                backgroundColor: "#F9F9F9"
            }
        },
        box: {
            marginLeft: theme.spacing(1)
        },
        account: {
            fontSize: "15px",
            lineHeight: "25px",
            fontWeight: 700,
            marginRight: theme.spacing(1),
            marginTop: 0,
            marginBottom: 0
        },
        date: {
            color: "#5C7192",
            fontSize: "15px",
            lineHeight: "25px",
            marginTop: 0,
            marginBottom: 0
        },
        avatar: {
            height: size,
            width: size
        },
        image: {
            width: "100%"
        },
        title: {
            display: 'flex',
            alignItems: 'center',
            width: "100%"
        }
    }))
}


const PostContent = (props: Props) => {
    const classes = useStyles(props)()
    const { postView } = props
    // const person = postView.person[0]

    return (
        <Paper variant="outlined" className={classes.root}>
            <Avatar src={postView.avatar} className={classes.avatar} />
            <Box marginLeft={1} flex={1}>
                <Box className={classes.title}>
                    <Box display="flex" alignItems="center">
                        <p className={classes.account}>{postView.nickname}</p>
                        <p className={classes.date}>{DateHelper.dateDiff(new Date(postView.create_time))}</p>
                    </Box>
                    <Box marginLeft="auto">
                        <PostMenu postView={postView} onDelete={()=>{}}></PostMenu>
                    </Box>
                </Box>
                <Box>
                    <EditorPreview storedState={postView.content} />
                    {/* {postView.images.map((value, index) => {
                        return <img src={value} alt="" key={index} className={classes.image} />
                    })} */}
                </Box>
            </Box>
        </Paper>
    )
}

export default PostContent
