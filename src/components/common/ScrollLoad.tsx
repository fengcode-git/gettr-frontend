import React from 'react'
import useOnScreen from '../hooks/useOnScreen'
import Loading from './Loading'

interface Props {
    loadData: ()=>void,
    stopLoad: boolean
}

const ScrollLoad = (props: Props) => {
    const domRef = React.useRef<HTMLDivElement>(null)
    let div = (
        <div ref={domRef}>
            <Loading></Loading>
        </div>
    )
    const isOnScreen = useOnScreen(domRef)
    React.useEffect(()=> {
        if(!props.stopLoad && isOnScreen){
            props.loadData()
        }
    }, [isOnScreen])
    return props.stopLoad ? null: div
}

export default ScrollLoad