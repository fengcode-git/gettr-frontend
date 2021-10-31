import { Hidden } from '@material-ui/core'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const PcShow = (props: Props) => {
    return (
        <Hidden smDown>
            {props.children}
        </Hidden>
    )
}

export default PcShow
