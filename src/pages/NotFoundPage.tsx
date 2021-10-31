import React, { useState, useEffect } from 'react'
import { Paper, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router'
import { orange } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(5),
        marginTop: theme.spacing(2),
        textAlign: "center"
    },
    text: {
        marginTop: theme.spacing(4)
    },
    numSpan: {
        padding: theme.spacing(0, 1),
        color: orange[900]
    },
    button: {
        marginTop: theme.spacing(3)
    }
}))

const NotFoundPage = () => {
    let classes = useStyles()
    const [num, setNum] = useState<number>(5)
    const history = useHistory()

    useEffect(() => {
        let handle = setInterval(() => {
            setNum(v => {
                return v - 1
            })
        }, 1000)
        return () => {
            clearInterval(handle)
        }
    }, [])

    useEffect(() => {
        if (num <= 0) {
            history.replace('/')
        }
    }, [num])

    const handleClick = () => {
        history.replace('/')
    }

    return (
        <Paper>
            <div className={classes.root}>
                <Typography variant="h3">无法找到该页  :(</Typography>
                <Typography className={classes.text}>
                    暂时未能找到您查找的页面, <span className={classes.numSpan}>{num}</span>秒后自动跳转到主页。
                </Typography>
                <Button className={classes.button} color="primary" variant="contained" onClick={handleClick}>返回首页</Button>
            </div>
        </Paper>
    )
}

export default NotFoundPage