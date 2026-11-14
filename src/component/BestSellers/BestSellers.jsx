import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {useBestSellers} from "../../hooks/useBestSellers.js";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import {useRef} from "react";
import SwiperProductCard from "../../shared/ui/SwiperProductCard/SwiperProductCard.jsx";

const BestSellers = () => {

    const {bestSellers, isLoading} = useBestSellers();

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    if (isLoading) {
        return <div>Загрузка</div>
    }

    if (!bestSellers?.length) {
        return <div>Бестселлеры не найдены</div>
    }




    return (
        <section className="section">
            <div className="container">
                <h2>Бестселлеры</h2>

                <Swiper modules={[Navigation]}
                        spaceBetween={14}
                        slideActiveClass={1}
                        breakpoints={
                            {
                                640: {slidesPerView: 2},
                                768: {slidesPerView: 3},
                                1024: {slidesPerView: 4},

                            }
                        }

                        onSwiper={(swiper) => {

                            if(prevRef.current && nextRef.current) {
                                swiper.params.navigation.prevEL = prevRef.current;
                                swiper.params.navigation.nextEL = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }
                        }}
                >
                    {bestSellers.map((bestSeller) => (
                        <SwiperSlide key={bestSeller.id} >
                            <SwiperProductCard product={bestSeller} />

                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            
        </section>
    );
};

export default BestSellers;