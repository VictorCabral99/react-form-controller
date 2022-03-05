import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import List from '../pages/List';
import Form from '../pages/Form';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<List/>} path="/" exact/>
                <Route element={<Form/>} path="/Form/:id"/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;