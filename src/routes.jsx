import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Esqueceu from "./pages/esqueceu";
import Cadastro from "./pages/cadastro";
import Termsofservice from "./pages/termsofservice";

function Routtes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={ <Home />} />
                <Route path="/esqueceu" element={ <Esqueceu />} />
                <Route path="/cadastro" element={ <Cadastro />} />
                <Route path="/termsofservice" element={ <Termsofservice />} />
            </Routes>
        </BrowserRouter>
    );
    
}

export default Routtes;