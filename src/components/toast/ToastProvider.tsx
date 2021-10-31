import React from 'react'
import { createContext, useState } from 'react'
import { Color } from "@material-ui/lab/Alert"
import ExtMessage from '../../controls/ExtMessage'

interface Props {
    children: React.ReactNode
}

export interface IMessageContext {
    message: string,
    setMessage?: React.Dispatch<React.SetStateAction<string>>,
    color?: Color,
    setColor?: React.Dispatch<React.SetStateAction<Color>>,
    open?: boolean,
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}


export const MessageContext = createContext<IMessageContext>({
    message: '',
    color: 'error',
    open: false,
})

const ToastProvider = (props: Props) => {
    const [message, setMessage] = useState('')
    const [color, setColor] = useState<Color>('error')
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div>
            <MessageContext.Provider value={{ message, setMessage, color, setColor, open, setOpen }}>
                <ExtMessage message={message} color={color} open={open} setOpen={setOpen}></ExtMessage>
                {props.children}
            </MessageContext.Provider>
        </div>
    )
}

export default ToastProvider
