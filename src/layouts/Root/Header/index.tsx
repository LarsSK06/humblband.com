// Imports

import icons from "../../../utils/icons";

import Buttons from "./Buttons";



// Component

export default (): React.ReactNode => (
    <header className="h-24">
        <button className="md:hidden">
            <img src={icons.menuBurger}/>
        </button>

        <nav className="responsive h-full hidden md:block">
            <ul className="w-full h-full flex justify-between items-center">
                <Buttons/>
            </ul>
        </nav>
    </header>
);