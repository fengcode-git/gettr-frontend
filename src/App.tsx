import React, { ReactElement } from 'react'
import { CssBaseline } from "@material-ui/core"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import PageContent from './layout/PageContent'
import { Provider } from "react-redux";
import store from './redux/store'
import Navbar from './components/header/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
import ToastProvider from './components/toast/ToastProvider'

const theme = createMuiTheme()

function App(): ReactElement {
    return (
        <React.Fragment>
            <CssBaseline />
            <BrowserRouter>
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <ToastProvider>
                            <Navbar />
                            <Sidebar />
                            <PageContent />
                        </ToastProvider>
                    </ThemeProvider>
                </Provider>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App