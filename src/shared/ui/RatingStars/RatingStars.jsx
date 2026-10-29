import emptyStar from '../../../assets/img/icon/empty-star.svg'
import fillStar from '../../../assets/img/icon/fill-star.svg'
import halfStar from '../../../assets/img/icon/half-star.svg'


const RatingStars = ({rating, reviewsCount}) => {

    const fullStars = Math.floor(rating)

    const  hasHalfStars = rating % 1 >= 0.5
    return (
        <div className="product-card-rating">
            <div className="product-card-stars">
                {[...Array(5)].map((_, index) => {
                    if (index < fullStars){
                        return <img src={fillStar} alt="star" key={index} />
                    }
                    if (index === fullStars && hasHalfStars){
                        return <img src={halfStar} alt="star" key={index} />
                    }
                    return <img src={emptyStar} alt="star" key={index} />
                })}

            </div>
            <div className="product-card-reviews">
                ({reviewsCount})
            </div>

        </div>
    );
};

export default RatingStars;