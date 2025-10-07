import React, { useEffect, useState } from 'react';
import { Clock, Calendar, Star, Play, Ticket, MapPin, Tag } from 'lucide-react';
import { useParams } from "react-router";
import { useColor } from "color-thief-react";

import AreaMenu from "../component/AreaMenu.jsx";
import SearchDropdown from "../component/SearchDropDown.jsx";

import ShowTimeMockData from "../mockdata/ShowTimeMockData.js";
import CinemaMockData from "../mockdata/CinemaMockData.js";
import SeatMockData from "../mockdata/SeatMockData.js";


function getDates(startDate, endDate) {
    let currentDate = new Date(startDate);
    endDate = new Date(endDate);
    let dates = [];

    while (currentDate <= endDate) {
        dates.push(currentDate.toISOString().split("T")[0]);
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
}

function normalize(str) {
    return str
        .normalize("NFD")               // tách ký tự + dấu
        .replace(/[\u0300-\u036f]/g, "") // xoá dấu
        .toLowerCase();                  // không phân biệt hoa/thường
}

function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center h-40">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}

const showTime = ShowTimeMockData(123);
const seatData = SeatMockData();

export default function MovieDetail() {
    const [isMovieLoading, setMovieLoading] = useState(true);
    const [mainColor, setMainColor] = useState("#000000");

    const token = import.meta.env.VITE_TMDB_TOKEN;
    const { movieId } = useParams();
    const movieDetailUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=vi-VN&region=VN&append_to_response=credits`;

    const [movie, setMovie] = useState();
    useEffect(() => {
        console.log(showTime);
        function normalizeResponse(movie) {
            // const baseUrl = "https://image.tmdb.org/t/p/original";

            // #####################################################
            /* "/images" is mapped to "https://image.tmdb.org" by vercel to avoid cors */
            const baseUrl = "/images/t/p/original";
            // #####################################################

            const defaultPoster = "https://placehold.co/1920x1080";   // ảnh fallback
            const defaultBackdrop = "https://placehold.co/1920x1080";

            return {
                id: movie.id,
                title: movie.title,
                originalTitle: movie.original_title,
                posterUrl: movie.poster_path !== null ? `${baseUrl}${movie.poster_path}` : defaultPoster,
                backdropUrl: movie.backdrop_path !== null ? `${baseUrl}${movie.backdrop_path}` : defaultBackdrop,
                releaseDate: movie.release_date,
                duration: movie.runtime,
                genres: movie.genres.map(genre => genre.name),
                overview: movie.overview,
                director: movie.credits.crew.filter(({job}) => job === "Director")[0].name,
                country: movie.origin_country.join(", "),
                actors: movie.credits.cast.map(a => a.name).join(", "),
            };
        }

        fetch(movieDetailUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                accept: "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {setMovie(normalizeResponse(data)); setMovieLoading(false) });
    }, []);

    const {data: dominantColor, loading: isColorLoading, error: colorError} = useColor(
        movie?.backdropUrl || "",
        "hex",
        {crossOrigin: "anonymous"},
    );

    useEffect(() => {
        if (dominantColor) setMainColor(dominantColor);

    }, [dominantColor, isColorLoading, colorError]);

    const dates = getDates(showTime.startDate, showTime.endDate);

    const [query, setQuery] = useState("");
    const [area, setArea] = useState("");
    const [selectedDate, setSelectedDate] = useState(0);
    useEffect(() => {
        setQuery("");
    }, [area]);

    const cinemas = CinemaMockData();
    const areas = [... new Set(cinemas.map(cinema => cinema.city))];
    const filteredCinemas = cinemas
        .filter(cinema =>
            normalize(cinema.city).includes(normalize(area)) &&   // normalize cả city
            normalize(cinema.cinemaName).includes(normalize(query)) // normalize cả tên rạp
        )
        .map(cinema => cinema.cinemaName);


    const filteredShowtime = showTime.schedule
        .filter(s => s.date === dates[selectedDate]) // lọc theo ngày
        .map(s => ({
            ...s,
            cinemas: s.cinemas.filter(cinema =>
                filteredCinemas.includes(cinema.cinemaName) // chỉ giữ theater có trong cinema đã lọc
            )
        }))
        .filter(s => s.cinemas.length > 0); // chỉ giữ ngày còn theater


    const [selectedSeats, setSelectedSeats] = useState(new Set());
    function toggleSelect(seat) {
        setSelectedSeats((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(seat)) {
                newSet.delete(seat);
            } else {
                newSet.add(seat);
            }
            console.log(newSet);
            return newSet;
        });
    }

    if (isMovieLoading || isColorLoading) {
        return LoadingSpinner();
    }


    return (
        <div className="min-h-screen text-white">

            <div className="relative">
                {/* Backdrop background */}
                <div
                    className="w-screen relative flex flex-col items-end"
                    style={{
                        background: mainColor
                    }}
                >
                    <div className="relative flex">
                        <img
                            src={movie.backdropUrl}
                            alt=""
                            className="w-full h-full max-w-6xl object-contain object-center relative"
                        />

                        <div
                            className="absolute left-0 top-0 h-full w-full"
                            style={{
                                background: `linear-gradient(90deg, ${mainColor} 0%, ${mainColor}1A 90%)`
                            }}
                        ></div>
                        <div
                            className="absolute bottom-0 left-0 w-full h-[12%]"
                            style={{
                                background: `linear-gradient(0deg, ${mainColor} 0%, ${mainColor}1A 100%)`
                            }}
                        ></div>
                    </div>
                </div>

                <div className="relative sm:absolute bottom-0 w-full">
                    <div className="flex layout-container">
                        {/* Poster */}
                        <img
                            src={movie.posterUrl}
                            alt=""
                            className="aspect-[2/3]
                                        h-[220px] sm:h-[250px] md:h-[280px] lg:h-[350px]
                                        rounded-lg relative
                                        bottom-5 sm:bottom-3"
                        />

                        {/* Thong tin phim */}
                        <div className="p-5 flex flex-col space-y-2 md:min-w-xl">
                            <p className="text-lg text-white font-semibold
                                          sm:text-2xl md:text-3xl lg:text-4xl"
                            >
                                {movie.title}
                            </p>

                            <p className="text-white/40 italic text-sm md:text-md lg:text-lg">
                                {movie.originalTitle}
                            </p>
                            <div className="flex space-x-5 text-white text-sm">
                                <div className="flex space-x-2 justify-center items-center">
                                    <Clock />
                                    <span>{movie.duration}'</span>
                                </div>
                                <div className="flex space-x-2 justify-center items-center">
                                    <Calendar />
                                    <span>{movie.releaseDate}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="layout-container py-3">
                {/* Genres */}
                <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
                    {
                        movie.genres.map(genre => (
                            <span
                                key={genre}
                                className="rounded-full py-1.5 px-2.5 text-white/60 border border-white/10 shrink-0"
                                style={{
                                    backgroundColor: `${mainColor}CC`
                                }}
                            >
                                {genre}
                            </span>
                        ))
                    }
                </div>

                {/* Overview */}
                <div className="border border-white/20 p-3 mt-5 rounded-lg">
                    <h1 className="text-xl font-semibold">Nội dung phim</h1>
                    <p>{movie.overview ? movie.overview : "Trống"}</p>
                </div>

                <div className="flex mt-5 space-x-3">
                    {/* Film director */}
                    <div className="flex-grow-1 border border-white/20 rounded-lg p-3">
                        <p className="text-white/50 text-sm">Đạo diễn</p>
                        <p>{movie.director}</p>
                    </div>

                    {/* Film country */}
                    <div className="flex-grow-1 border border-white/20 rounded-lg p-3">
                        <p className="text-white/50 text-sm">Quốc gia</p>
                        <p>{movie.country}</p>
                    </div>
                </div>

                {/* Film actors*/}
                <div className="border border-white/20 p-3 mt-5 rounded-lg">
                    <p className="text-white/50 text-sm">Diễn viên</p>
                    <p>{movie.actors}</p>
                </div>
            </div>

            <div className="flex justify-center w-full px-4 layout-container">
                <div className="flex flex-col justify-center items-center w-full">
                    {/* Tiêu đề */}
                    <h1 className="font-roboto text-4xl font-bold text-white tracking-wide mb-6">
                        LỊCH CHIẾU
                    </h1>

                    {/* Danh sách ngày */}
                    <ul className="flex justify-center pl-15 sm:pl-0 flex-shrink-0 gap-3 sm:gap-5 mb-8 w-full overflow-x-scroll scrollbar-hide">
                        {dates.map((date, index) => {
                            const isActive = index === selectedDate; // selectedDate là state bạn quản lý
                            return (
                                <li
                                    key={index}
                                    onClick={() => setSelectedDate(index)}
                                    className={`px-4 py-2 md:px-6 md:py-3 rounded-xl text-sm md:text-base cursor-pointer 
                                                transition-all ease-in-out duration-200 shadow-sm border 
                                                ${isActive ? "bg-red-500 border-red-400" : ""}
                                    `}
                                >
                                    {date.split("-")[2] + "/" + date.split("-")[1]}
                                </li>
                            );
                        })}
                    </ul>


                    {/* Bộ lọc */}
                    <div className="flex justify-center space-x-2 items-center w-[100%] md:w-[50%]">
                        {/* Chọn khu vực */}
                        <div className="flex-1">
                            <AreaMenu
                                areas={areas}
                                selectedArea={area}
                                setSelectedArea={setArea}
                            />
                        </div>

                        {/* Tìm kiếm rạp */}
                        <div className="flex-2">
                            <SearchDropdown
                                placeholder="Tất cả rạp"
                                value={query}
                                onChange={setQuery}
                                data={filteredCinemas}
                                onSelect={(item) => setQuery(item)}
                            />
                        </div>
                    </div>

                    {/* Ket qua rap phim khop */}
                    <div className="flex flex-col gap-4 p-4  rounded-lg w-full">
                        {filteredShowtime.map(s => (
                            <div key={s.date} className="">
                                {s.cinemas.map(t => (
                                    <div key={t.cinemaName} className="mb-4 pb-4 border-b border-gray-400 last:border-0">
                                        <h4 className="text-lg font-roboto-semibold mb-2 sm:text-xl lg:text-2xl">
                                            {t.cinemaName}
                                        </h4>
                                        <ul className="flex flex-wrap gap-5 list-none p-0 ">
                                            {t.times.map((time, index) => (
                                                <li
                                                    key={index}
                                                    className="sm:text-md lg:text-lg text-sm px-3 py-1 rounded-md cursor-pointer
                                                              border border-white/40
                                                            hover:bg-cyan-200/20 transition-colors"
                                                >
                                                    {time}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            <div className="font-roboto w-full layout-container flex text-center">
                <div className="flex flex-col justify-center w-full space-y-2 border p-5 overflow-x-auto scrollbar-hide">
                    <div className="w-full bg-gray-900 rounded-b-2xl rounded-t-md flex justify-center items-center py-2  mb-4">
                        <p className="text-white md:text-xl lg:text-2xl font-bold">SCREEN</p>
                    </div>

                    {seatData.map(row => (
                        <div key={row.rowName} className="mx-auto flex items-center gap-5">
                            {/* Tên hàng ghế (A, B, C, …) */}
                            <div className="text-center font-medium w-6">{row.rowName}</div>

                            {/* Khu vực ghế */}
                            <div
                                className="grid gap-2 flex-1"
                                style={{
                                    '--cell-size': '40px',
                                    gridTemplateColumns: `repeat(${row.totalColumn}, var(--cell-size))`
                                }}
                            >
                                {row.rowSeats.map(seat => (
                                    <div
                                        key={seat.ticketId}
                                        onClick={seat.occupied ? () => alert("Ghế đặt rồi click vào cc") : () => toggleSelect(seat)}
                                        className={`
                                            rounded-lg
                                            flex items-center justify-center
                                            py-2 px-1 text-sm sm:text-base
                                            cursor-pointer transition-all duration-200
                                            ${seat.seatType === "Đôi" ? "col-span-2" : "col-span-1"}
                                            ${seat.isSeat ? "bg-red-500" : ""}
                                            ${seat.occupied ? "!bg-gray-500/50 text-white/50" : ""}
                                            ${selectedSeats.has(seat) ? "selected" : ""}
                                        `}
                                    >
                                        {seat.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    );
}
