import {useState, useEffect, useRef} from "react";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";

function getMockData() {
    return  {
        "nowShowing": [
            {
                "id": 1,
                "title": "Avengers: Endgame",
                "genre": ["Action", "Adventure", "Sci-Fi"],
                "duration": 181,
                "releaseDate": "2019-04-26",
                "poster": "https://image.tmdb.org/t/p/w500/avengers-endgame.jpg",
                "rating": 8.4
            },
            {
                "id": 2,
                "title": "John Wick: Chapter 4",
                "genre": ["Action", "Thriller"],
                "duration": 169,
                "releaseDate": "2023-03-24",
                "poster": "https://image.tmdb.org/t/p/w500/john-wick-4.jpg",
                "rating": 7.9
            }
        ],
        "comingSoon": [
            {
                "id": 101,
                "title": "Deadpool & Wolverine",
                "genre": ["Action", "Comedy"],
                "duration": 135,
                "releaseDate": "2025-07-25",
                "poster": "https://image.tmdb.org/t/p/w500/deadpool-wolverine.jpg"
            },
            {
                "id": 102,
                "title": "Avatar 3",
                "genre": ["Adventure", "Fantasy", "Sci-Fi"],
                "duration": 180,
                "releaseDate": "2025-12-19",
                "poster": "https://image.tmdb.org/t/p/w500/avatar3.jpg"
            }
        ],
        "cinemas": [
            {
                "id": "CGV01",
                "name": "CGV Vincom Landmark 81",
                "location": "720A Điện Biên Phủ, Bình Thạnh, TP.HCM",
                "screens": 10
            },
            {
                "id": "BHD01",
                "name": "BHD Star Bitexco",
                "location": "2 Hải Triều, Quận 1, TP.HCM",
                "screens": 7
            },
            {
                "id": "GAL01",
                "name": "Galaxy Nguyễn Du",
                "location": "116 Nguyễn Du, Quận 1, TP.HCM",
                "screens": 6
            }
        ]
    };
}


function SearchDialog({ isOpen, onClose }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState(getMockData);
    const searchBarRef = useRef(null);

    function handleInputChange(e) {
        setQuery(e.target.value);
    }

    useEffect(() => {
        setResults(getMockData);
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <Dialog
                    static
                    open={isOpen}
                    onClose={onClose}
                    initialFocus={searchBarRef}
                    className="fixed inset-0 z-2"
                >
                    <motion.div
                        className="fixed inset-0 bg-[#1a1b26]/70 backdrop-blur-xl z-49"
                        initial={{ y: "50%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "100%", opacity: 0 }}
                        transition={{ duration: 0.2}}
                    />

                    <div className="fixed flex justify-center w-screen z-50">
                        <button
                            className="absolute text-white hover:bg-white/17 p-1.5 cursor-pointer top-2 rounded-md right-6 md:top-7 md:right-17"
                            onClick={onClose}>
                            <X size={32} />
                        </button>

                        <Dialog.Panel
                            className="w-full sm:w-[85%] md:w-[75%] lg:w-[60%] md:px-15 px-10 flex flex-col items-center"
                            as={motion.div}
                            initial={{y: -50, opacity: 0, scale: 0.95}}
                            animate={{
                                y: 0,
                                opacity: 1,
                                scale: 1,
                                transition: {type: "spring", stiffness: 300, damping: 25}
                            }}
                            exit={{
                                y: 50,
                                opacity: 0,
                                scale: 0.95,
                                transition: {duration: 0.2}
                            }}
                        >

                            <div className="w-full relative mt-20 bg-gray-900/70">
                                <input type="text"
                                       placeholder="Search everything"
                                       className="w-full h-10 px-10 py-6 text-white outline-none border rounded-md border-[rgba(225,225,225,0.2)]"
                                       value={query} onChange={handleInputChange}
                                       ref={searchBarRef}
                                />
                                <Search size={20} className="absolute top-1/2 -translate-y-1/2 ml-3 text-white" />
                            </div>

                            <div className="w-full mt-12 md:px-5 px-1">
                                <div className="mb-15">
                                    <p className="text-white text-lg">Now showing</p>
                                    <ul>
                                        { results.nowShowing.map((film, index) =>
                                            ( <li key={index} className="text-white py-5 border-b border-white/50">{film.title}</li> ))}
                                    </ul>
                                </div>

                                <div><p className="text-white text-lg">Coming Soon</p>
                                    <ul>
                                        {results.comingSoon.map((film, index) =>
                                            (<li key={index}
                                                 className="text-white py-5 border-b border-white/50">{film.title}
                                            </li>))}
                                    </ul>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </div>
                </Dialog>
            )}
        </AnimatePresence>
    );
}

export default SearchDialog;
