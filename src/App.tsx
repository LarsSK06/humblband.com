// Imports

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Root from "./layouts/Root";
import Home from "./routes";



// Component

export default (): React.ReactNode => (
    <BrowserRouter>
        <Routes>
            <Route element={<Root/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);