import {useReviews} from "../../hooks/useReviews.js";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import prev from "../../assets/img/icon/slider-arrow-left.svg";
import next from "../../assets/img/icon/slider-arrow-right.svg";
import './style.css'
import SwiperReviewsCard from "../../shared/ui/SwiperReviewsCard/SwiperReviewsCard.jsx";

const Reviews = () => {

    const {
        reviews,
        isLoading,

    } = useReviews()

    if (isLoading) {
        return (
            <section>
                <div className="container">
                    <h2>Отзывы</h2>
                    <div>
                        <p>Загрузка отзывов...</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="section reviews">
            <div className="container">
                <Swiper modules={[Navigation]}
                        spaceBetween={20}
                        slideActiveClass={1}
                        breakpoints={
                            {
                                640: {slidesPerView: 1},
                                768: {slidesPerView: 2},
                                1024: {slidesPerView: 3},

                            }
                        }
                        navigation={{
                            prevEl: '.custom-prev.reviews',
                            nextEl: '.custom-next.reviews',
                        }}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id} >
                            <SwiperReviewsCard review={review} />
                        </SwiperSlide>
                    ))}

                </Swiper>

                <button  className="custom-prev reviews">
                    <img src={prev} alt=""/>
                </button>
                <button  className='custom-next reviews'>
                    <img src={next} alt=""/>
                </button>
            </div>
        </section>
    );
};

export default Reviews;