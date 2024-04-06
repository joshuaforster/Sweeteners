import React from "react";
import LayoutSection from "../CustomComponents/layoutSection";

export default function Footer() {
    const year = new Date().getFullYear(); // Get the current year

    return (

<footer className="bg-gray-800">
    <div className="py-4 px-4 md:px-12 lg:px-24 w-full mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="https://joshuaforster.com" className="flex items-center">
                    <img src="/logowhite.png" className="mr-3 h-8" alt="FlowBite Logo" />
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
                    <ul className="text-white">
                        <li className="mb-4">
                            <a href="https://flowbite.com" className="hover:underline">Flowbite</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
                    <ul className="text-white">
                        <li className="mb-4">
                            <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                    <ul className="text-white">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white sm:text-center">© {year} <a href="https://joshuaforster.com" className="hover:underline">Joshua Forster</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                {/* Icons links updated to use JSX */}
                <a href="#" className="text-white ">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                </a>
                {/* More icons... */}
                {/* Ensure all <svg> tags are also updated with fillRule and clipRule as needed */}
            </div>
        </div>
    </div>
</footer>

    );
}
