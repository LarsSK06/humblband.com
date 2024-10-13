// Imports

import Header from "./Header";

import { Outlet } from "react-router-dom";



// Component

export default (): React.ReactNode => (
    <>
        <Header/>
        <Outlet/>
    </>
);