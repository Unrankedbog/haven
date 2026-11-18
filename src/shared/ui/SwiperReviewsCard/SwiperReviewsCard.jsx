import './style.css'
import fillStar from "../../../assets/img/icon/fill-star.svg";
import emptyStar from "../../../assets/img/icon/empty-star.svg";

const SwiperReviewsCard = ({review}) => {
    return (
        <div className='swiper-review-card'>
            <div className="swiper-review-stars">
                {[...Array(5)].map((_, index) => {
                    if (index < review.countStars){
                        return <img src={fillStar} alt="star" key={index} />
                    }
                    return <img src={emptyStar} alt="star" key={index} />
                })}

            </div>
            <p>{review.text}</p>
            <div className="swiper-review-bottom">
                <div className="swiper-review-avatar-wrapper">
                    <img src={`/Images/Avatars/${review.avatar}`} alt={`${review.name}`} />
                </div>
                <div className="swiper-review-info">
                    <p>{review.name}</p>
                    <span>{review.city}</span>
                </div>
            </div>
            
        </div>
    );
};

export default SwiperReviewsCard;