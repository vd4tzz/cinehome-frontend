import MovieCard from "./MovieCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function mockData() {
    return [
        {
            movieId: 1,
            posterUrl: "https://api-website.cinestar.com.vn/media/wysiwyg/Posters/09-2025/tu-chien-tren-khong-poster.jpg",
            title: "Tử Chiến Trên Không",
            ageLabel: "16+",
        },
        {
            movieId: 2,
            posterUrl: "https://api-website.cinestar.com.vn/media/wysiwyg/Posters/09-2025/co-dau-ma-nkc-moi.jpg",
            title: "Cô Dâu Ma",
            ageLabel: "18+",
        },
        {
            movieId: 3,
            posterUrl: "https://api-website.cinestar.com.vn/media/wysiwyg/Posters/08-2025/mua-do.jpg",
            title: "Mưa Đỏ",
            ageLabel: "13+",
        },
        {
            movieId: 4,
            posterUrl: "https://api-website.cinestar.com.vn/media/wysiwyg/Posters/09-2025/lam-giau-voi-ma-2.jpg",
            title: "Làm Giàu Với Ma 2",
            ageLabel: "16+",
        },
        {
            movieId: 5,
            posterUrl: "https://api-website.cinestar.com.vn/media/wysiwyg/Posters/09-2025/khe-uoc-ban-dau.jpg",
            title: "Khế Ước Bán Dâu",
            ageLabel: "18+",
        },
        {
            movieId: 6,
            posterUrl: "https://api-website.cinestar.com.vn/media/wysiwyg/Posters/09-2025/tram-dam-tu-than.jpg",
            title: "Trăn Dặn Tử Thần",
            ageLabel: "13+",
        },
    ];
}


function MovieSlider({ movies }) {
    movies = movies ?? mockData();

    return (
        <div className="relative w-full z-0">
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={4}
                breakpoints={{
                    0: {slidesPerView: 2.4}, // mobile
                    640: {slidesPerView: 2.5},   // sm (≥ 640px) → mobile lớn / tablet nhỏ
                    768: {slidesPerView: 3.3},   // md (≥ 768px) → tablet lớn
                    1024: {slidesPerView: 4},    // lg (≥ 1024px) → desktop nhỏ
                    1280: {slidesPerView: 4},  // xl (≥ 1280px) → desktop lớn
                }}
                navigation
                className="my-swiper overflow-x-visible"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <MovieCard
                            id={movie.id}
                            title={movie.title}
                            posterUrl={movie.posterUrl}
                            // ageLabel={movie.ageLabel}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MovieSlider;
