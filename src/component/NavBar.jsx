import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SearchDialog from "./SearchDialog.jsx";
import { Search, UserRound, Menu, X } from "lucide-react";


function NavBar() {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [searchDialogOpen, setSearchDialogOpen] = useState(false);

    const userName  = null;

    const tabs = [
        { label: "Phim", path: "/movie", order: 0 },
        { label: "Rạp", path: "/cinema", order: 1 },
        { label: "Đặt Bắp Nước", path: "/food", order: 2 },
        { label: "Giới thiệu", path: "/about", order: 3},
        
    ];

    return (
        <nav className="w-screen backdrop-blur bg-gray-900/40 text-white fixed top-0 z-1 font-roboto-semibold text-xl">
            <div className="layout-container">
                <div className="flex justify-between items-center py-1">

                    {/* Ben trai gom logo va menu tab */}
                    <div className="flex justify-center items-center space-x-3">
                        {/* Logo */}
                        <img src={logo} alt="Logo" />

                        {/* Menu tab*/}
                        <ul className="hidden lg:flex justify-center space-x-5 items-center text-xl ml-3">
                            {
                                tabs.map(film => (
                                    <li key={film.order}>
                                        <NavLink
                                            to={film.path}
                                            className="hover:text-red-500 py-3 px-1.5"
                                        >
                                            {film.label}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Ben phai gom search, sign-in va menu cho mobile */}
                    <div className="flex justify-center items-center space-x-2">
                        {/* Search btn */}
                        <button className="hover:bg-[#ffffff1a] rounded-xl p-2 cursor-pointer" onClick={() => setSearchDialogOpen(true)}>
                            <Search size={24} />
                        </button>

                        {/* Sign-in/Profile btn */}
                        <NavLink
                            to="/auth"
                            className="p-2 cursor-pointer hover:bg-[#ffffff1a] rounded-md flex justify-center items-center space-x-2">
                            <UserRound size={24} />
                            <p className="font-semibold hidden md:block cursor-pointer">
                                Login
                            </p>
                        </NavLink>


                        {/* Menu btn */}
                        <button className="lg:hidden cursor-pointer p-2 hover:bg-[#ffffff1a] rounded" onClick={() => setSideBarOpen(true)}>
                            <Menu size={24}/>
                        </button>
                    </div>

                    <SearchDialog isOpen={searchDialogOpen} onClose={() => setSearchDialogOpen(false)} />

                    <AnimatePresence>
                        {sideBarOpen && (
                            <>
                                {/* Backdrop effect */}
                                <div className="fixed w-screen h-screen inset-0 bg-[#1a1b26]/70 backdrop-blur-lg z-50"></div>

                                <motion.div
                                    initial={{x: 50, opacity: 0}}    // ban đầu ngoài màn hình bên phải
                                    animate={{x: 0, opacity: 1}}     // trượt vào vị trí bình thường
                                    exit={{x: 300, opacity: 0}}      // nếu dùng AnimatePresence cho exit
                                    transition={{duration: 0.5}}     // thời gian 0.5s
                                    className="absolute right-0 top-0 h-screen w-full md:w-1/2 lg:w-1/4 z-60 bg-gray-900 flex flex-col"
                                >
                                    <div className="flex justify-end items-center mt-4">
                                        <button className="mr-7 p-1 right-0 cursor-pointer rounded hover:bg-gray-600/50 transition-colors"
                                                onClick={() => setSideBarOpen(false)}>
                                            <X size={32} />
                                        </button>
                                    </div>

                                    <div className="flex-1 flex flex-col justify-center">

                                        <ul className="mx-[20%] text-xl flex flex-col space-y-8">
                                            {
                                                tabs.map((film, index) => (
                                                    <motion.li
                                                        key={film.order}
                                                        initial={{x: -50, opacity: 0}}
                                                        animate={{x: 0, opacity: 1}}
                                                        transition={{delay: index * 0.1, duration: 0.3}}
                                                        onClick={() => setSideBarOpen(false)}
                                                    >
                                                        <NavLink
                                                            to={film.path}
                                                            className="hover:text-red-500 px-2"

                                                        >
                                                            {film.label}
                                                        </NavLink>
                                                    </motion.li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div>e3</div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </nav>
    );
}

export default NavBar;
