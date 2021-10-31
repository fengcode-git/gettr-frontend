import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Route } from "react-router-dom"
import RouteAnimation from '../components/common/RouteAnimation';


interface Props {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>,
    path?: string,
    exact?: boolean
}

const DefaultLayout = (props: Props) => {
    const { component: Component, ...rest } = props;
    return (
        <Route {...rest} render={matchProps => (
            <React.Fragment>
                <RouteAnimation>
                    <Component {...matchProps} />
                </RouteAnimation>
            </React.Fragment>
        )} />
    )
}


export default DefaultLayout
