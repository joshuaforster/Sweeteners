import React from "react";
import { Link } from "react-router-dom";
import {useTheme} from '../CustomComponents/darkTheme.jsx'; // Correct case
import DarkButton from '../CustomComponents/darkButton'; // Updated path
import LayoutSection from "../CustomComponents/layoutSection.jsx";

export default function Header() {

    const { darkMode } = useTheme(); // Accessing darkMode using the useTheme hook
    
    return (
            <section className="shadow-lg sticky top-0 z-50">
                <LayoutSection>
                    <header className='flex justify-between items-center'>
                        <Link to='/'>
                            {/* Dynamic logo path based on darkMode */}
                            {darkMode ? <img src="/logowhite.png" alt="Josh's Logo" className="h-10"/> : <img src="/logo.png" alt="Josh's Logo" className="h-10"/>}
                        </Link>
                        <div className="flex items-center gap-8">
                            <DarkButton /> {/* Assuming this button toggles the dark mode */}
                        </div>
                    </header>
                </LayoutSection>
            </section>

    );
}
