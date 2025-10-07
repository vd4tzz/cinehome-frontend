import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SearchDropdown({ placeholder, value, onChange, data = [], onSelect }) {
    const [isFocused, setFocus] = useState(false);

    return (
        <div className="relative flex flex-col border rounded-md border-[rgba(225,225,225,0.2)] text-white">
            <input
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setTimeout(() => setFocus(false), 150)}
                className="py-2 px-3 bg-transparent outline-none placeholder-white"
            />

            <AnimatePresence>
                {isFocused && (
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="border border-[rgba(225,225,225,0.2)] bg-[#1a1b26]/20
                                    backdrop-blur-lg rounded-md py-2 max-h-[320px] w-full
                                    overflow-auto border-opacity-30
                                    absolute top-[100%] left-0 mt-2"
                    >
                        <ul>
                            {data.length > 0 ? (
                                data.map((item) => (
                                    <li
                                        key={item}
                                        className="px-5 last:child:border-b-0 cursor-pointer"
                                        onMouseDown={() => onSelect?.(item)}
                                    >
                                        <p className="block py-3 hover:bg-white/20 rounded-md">
                                            {item}
                                        </p>
                                    </li>
                                ))
                            ) : (
                                <li className="px-12">
                                    <p className="block py-1 text-gray-400">Không có kết quả</p>
                                </li>
                            )}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default SearchDropdown;
