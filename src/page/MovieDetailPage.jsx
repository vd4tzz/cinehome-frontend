import React, {useEffect, useState} from 'react';
import { Clock, Calendar, Star, Play, Ticket, MapPin, Tag } from 'lucide-react';
import {useParams} from "react-router";
import Color from "color-thief-react";

export default function MovieDetail() {
    const token = import.meta.env.VITE_TMDB_TOKEN;
    const {movieId} = useParams();
    const movieDetailUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=vi-VN&region=VN&append_to_response=credits`;

    // const movieDetailUrl = `/api/3/movie/${movieId}?language=vi-VN&region=VN&append_to_response=credits&api_key=YOUR_API_KEY`;

    // Dữ liệu phim mẫu
    const movieSchema = {
        title: "AVATAR: THE WAY OF WATER",
        originalTitle: "Avatar: The Way of Water",
        posterUrl: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        backdropUrl: "https://image.tmdb.org/t/p/original/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
        rating: 8.5,
        duration: "192 phút",
        releaseDate: "16/12/2022",
        genres: ["Hành động", "Khoa học viễn tưởng", "Phiêu lưu"],
        director: "James Cameron",
        cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Kate Winslet"],
        language: "Tiếng Anh (Phụ đề Việt)",
        rated: "T13 - Phim dành cho khán giả từ 13 tuổi",
        synopsis: "Jake Sully sống cùng gia đình mới của mình trên hành tinh Pandora. Khi một mối đe dọa quen thuộc trở lại để hoàn thành nhiệm vụ trước đây, Jake phải hợp tác với Neytiri và quân đội của chủng tộc Na'vi để bảo vệ hành tinh của họ.",
    };

    const [movie, setMovie] = useState(movieSchema);

    function normalizeResponse(movie) {
        // const baseUrl = "https://image.tmdb.org/t/p/original";
        const baseUrl = "/images/t/p/original";
        const defaultPoster = "https://placehold.co/1920x1080";   // ảnh fallback
        const defaultBackdrop = "https://placehold.co/1920x1080";
        console.log(movie);
        // console.log( movie.credits.crew.filter(({job}) => job === "Director")[0].name);

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
            rating: 9
        };
    }

    useEffect(() => {
        fetch(movieDetailUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                accept: "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {setMovie(normalizeResponse(data)); console.log(movie)});
    }, []);



    const [mainColor, setMainColor] = useState();

    return (
        <div className="min-h-screen text-white">

            <div className="relative">
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
                            className="aspect-[2/3] h-[220px] sm:h-[250px] md:h-[280px] lg:h-[350px] rounded-lg relative bottom-5 sm:bottom-3"
                        />

                        {/* Thong tin phim */}
                        <div className="p-5 flex flex-col space-y-2 md:min-w-xl">
                            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold">
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
                    <div className="flex-grow-1 border border-white/20 rounded-lg p-3">
                        <p className="text-white/50 text-sm">Đạo diễn</p>
                        <p>{movie.director}</p>
                    </div>

                    <div className="flex-grow-1 border border-white/20 rounded-lg p-3">
                        <p className="text-white/50 text-sm">Quốc gia</p>
                        <p>{movie.country}</p>
                    </div>
                </div>

                <div className="border border-white/20 p-3 mt-5 rounded-lg">
                    <p className="text-white/50 text-sm">Diễn viên</p>
                    <p>{movie.actors}</p>
                </div>
            </div>


            <Color src={movie.backdropUrl} crossOrigin="anonymous" format="hex">
                {({ data, loading, error }) => {
                    if (loading) return <p>Đang tải màu...</p>;
                    if (error) return <p>Lỗi: {error.message}</p>;
                    return (
                        <div>
                            {/*<img src={movie.backdropUrl} alt="Demo" style={{ width: 300 }} />*/}
                            <p>Màu chủ đạo: <span style={{ color: data }}>{data}</span></p>
                            {setMainColor(data)}
                        </div>
                    );
                }}
            </Color>

        </div>
    );
}
