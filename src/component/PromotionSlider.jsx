import { Swiper, SwiperSlide } from "swiper/react";

import {Link} from "react-router-dom";
import {Autoplay, EffectCoverflow, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


function mockData() {
    return [
        { promotionId: 1, imgUrl: "https://cdn.galaxycine.vn/media/2025/8/26/2048-zalopay_1756202416336.png" },
        { promotionId: 2, imgUrl: "https://cdn.galaxycine.vn/media/2025/8/28/click-to-pay-visa-6_1756349838815.jpg" },
        { promotionId: 3, imgUrl: "https://cdn.galaxycine.vn/media/2025/9/23/chainsaw-man-reze-a5rc-1_1758599124978.jpg" },
        { promotionId: 4, imgUrl: "https://media.pathe.fr/movie/id/44332/backdrop/225871/lg/1/back-drop-le-vent-se-leve.jpg"}
    ]
}

function PromotionSlider({promotions}) {
    // const promotions = mockData();
    promotions = promotions ?? mockData();

    return (
        <div className="relative w-full z-0">
            <Swiper
                modules={[EffectCoverflow, Autoplay, Pagination]}
                effect={"coverflow"}
                coverflowEffect={{
                    rotate: 30,        // Góc xoay
                    stretch: 0,        // Khoảng cách giữa các slide
                    depth: 100,        // Độ sâu (3D)
                    modifier: 1,       // Tăng giảm hiệu ứng
                    scale: 1,
                    slideShadows: false// Bật tắt bóng
                }}
                autoplay={{
                    delay: 4000
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}

                className="my-swiper"
            >
                {promotions.map((promotion) => (
                    <SwiperSlide key={promotion.promotionId}>
                        <Link
                            to="#chua-trien-khai"
                            className="flex justify-center items-center"
                        >
                            <img
                                src={promotion.imgUrl}
                                alt=""
                                className="aspect-[16/9] md:aspect-[3/1] w-full cursor-pointer"
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default PromotionSlider;
