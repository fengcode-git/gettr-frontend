import React from 'react'
import { Hidden } from '@material-ui/core'

interface Props {
    children: React.ReactNode
}

const PhoneShow = (props: Props) => {
    return (
        <Hidden mdUp>
            {props.children}
        </Hidden>
    )
}

export default PhoneShow
