import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {useBestSellers} from "../../hooks/useBestSellers.js";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SwiperProductCard from "../../shared/ui/SwiperProductCard/SwiperProductCard.jsx";
import next from "../../assets/img/icon/slider-arrow-right.svg"
import prev from "../../assets/img/icon/slider-arrow-left.svg"
import './style.css'

const BestSellers = () => {

    const {bestSellers, isLoading} = useBestSellers();



    if (isLoading) {
        return (
            <section>
                <div className="section best-sellers">
                    <h2>Бестселлеры</h2>
                    <div>
                        <p>Загрузка бестселлеров...</p>
                    </div>
                </div>
            </section>
        )
    }

    if (!bestSellers?.length) {
        return <div>Бестселлеры не найдены</div>
    }




    return (
        <section className="section best-sellers">
            <div className="container">
                <h2>Бестселлеры</h2>

                <Swiper modules={[Navigation]}
                        spaceBetween={14}
                        slideActiveClass={1}
                        breakpoints={
                            {
                                640: {slidesPerView: 2},
                                868: {slidesPerView: 4},
                                1024: {slidesPerView: 6},

                            }
                        }
                        navigation={{
                            prevEl: '.custom-prev.best-sellers',
                            nextEl: '.custom-next.best-sellers',
                        }}
                >
                    {bestSellers.map((bestSeller) => (
                        <SwiperSlide key={bestSeller.id} >
                            <SwiperProductCard product={bestSeller} />
                        </SwiperSlide>
                    ))}

                </Swiper>

                <button  className="custom-prev best-sellers">
                    <img src={prev} alt=""/>
                </button>
                <button  className='custom-next best-sellers'>
                    <img src={next} alt=""/>
                </button>
            </div>
            
        </section>
    );
};

export default BestSellers;