import MovieSlider from "../component/MovieSlider.jsx";
import PromotionSlider from "../component/PromotionSlider.jsx";
import { useEffect, useState } from "react";

function MoviePage() {
    const playingUrl = "https://api.themoviedb.org/3/movie/now_playing?page=1&language=vi-VN&region=VN";
    const upComingUrl = "https://api.themoviedb.org/3/movie/upcoming?language=vi-VN&region=VN&page=1";
    const token = import.meta.env.VITE_TMDB_TOKEN;

    const [nowPlaying, setNowPlaying] = useState(null);
    const [upComing, setUpComing] = useState(null);

    function normalizeResponse(data, setNormalizeData) {
        const normalizeData = data.sort((a, b) =>  b.vote_average - a.vote_average).map(movie => ({
            id: movie.id,
            title: movie.title,
            posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        }));
        setNormalizeData(normalizeData);
        console.log(normalizeData);
    }


    useEffect(() => {
        fetch(playingUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                accept: "application/json"
            }
        })
            .then(res => res.json())
            .then(data => normalizeResponse(data.results, setNowPlaying));
    }, []);

    useEffect(() => {
        fetch(upComingUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                accept: "application/json"
            }
        })
            .then(res => res.json())
            .then(data => normalizeResponse(data.results, setUpComing));
    }, []);

    return (
        <div className="z-0 ">
            <section className="flex flex-col justify-center items-center mt-7">
                <PromotionSlider  promotions={promotionMockData()}/>
            </section>

            <section className="mt-13 mb-15 flex flex-col justify-center items-center">
                <h1 className="mb-7 text-3xl md:text-4xl font-roboto-bold">PHIM ĐANG CHIẾU</h1>
                <MovieSlider movies={nowPlaying}/>
            </section>

            <section className="my-10 flex flex-col justify-center items-center">
                <h1 className="mb-7 text-3xl md:text-4xl font-roboto-bold">PHIM SẮP CHIẾU</h1>
                <MovieSlider  movies={upComing}/>
            </section>
        </div>
    );
}

export default MoviePage;

function promotionMockData() {
    return [
        {promotionId: 1, imgUrl: "https://cdn.galaxycine.vn/media/2025/8/26/2048-zalopay_1756202416336.png"},
        {promotionId: 2, imgUrl: "https://cdn.galaxycine.vn/media/2025/8/28/click-to-pay-visa-6_1756349838815.jpg"},
        {
            promotionId: 4,
            imgUrl: "https://media.pathe.fr/movie/id/44332/backdrop/225871/lg/1/back-drop-le-vent-se-leve.jpg"
        },
        {
            promotionId: 3,
            imgUrl: "https://cdn.galaxycine.vn/media/2025/9/23/chainsaw-man-reze-a5rc-1_1758599124978.jpg"
        },
    ]
}
