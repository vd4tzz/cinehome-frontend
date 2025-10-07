import { useState, useRef, useEffect } from "react";
import {AnimatePresence, motion} from "framer-motion";

export default function AreaMenu({ areas, selectedArea, setSelectedArea, defaultValue = "Toàn quốc" }) {
    areas = [defaultValue, ...areas];

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();

    // Đóng menu khi click ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            {/* Button */}
            <button
                className={`rounded-md backdrop-blur-md py-2 px-[15%] cursor-pointer
                           w-full border border-[rgba(225,225,225,0.2)]
                           text-white text-left`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedArea === "" ? defaultValue : selectedArea}
            </button>

            {/* Dropdown menu */}
            <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{opacity: 0, y: -40}}    // bắt đầu ở trên, trong suốt
                    animate={{opacity: 1, y: 0}}     // xuống vị trí thật, hiện dần
                    exit={{opacity: 0, y: -10}}      // biến mất: slide lên + fade
                    transition={{duration: 0.2, ease: "easeOut"}}
                    className="absolute left-0 mt-2 w-full rounded-md border border-[rgba(225,225,225,0.2)]
                               bg-[#1a1b26]/20 backdrop-blur-lg h-[250px] overflow-auto p-2
                               z-10"
                >
                    {areas.map((area, index) => (
                        <div
                            key={index}
                            className="p-3 cursor-pointer hover:bg-white/20 rounded-md"
                            onClick={() => {
                                area = area === defaultValue ? "" : area
                                setSelectedArea(area);
                                setIsOpen(false);
                            }}
                        >
                            {area}
                        </div>
                    ))}
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
}

