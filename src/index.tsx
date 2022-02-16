import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from '@chakra-ui/react'
import thema from "./styles/thema"

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={thema} resetCSS>
            <App/>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
)