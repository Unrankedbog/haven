import inspiration from "../../../assets/img/inspiration-1.jpg"
import inspiration2 from "../../../assets/img/main-banner.jpg"
import inspiration3 from "../../../assets/img/category-living-room.jpg"
import inspiration4 from "../../../assets/img/category-bedroom.jpg"
import inspiration5 from "../../../assets/img/category-office.jpg"
import inspiration6 from "../../../assets/img/new-collection-banner.jpg"

import "./style.css"

const image = [
    inspiration,
    inspiration2,
    inspiration3,
    inspiration4,
    inspiration5,
    inspiration6,


]

const Inspare = () => {
    return (
        <div className="section inspare">
            <div className="container ">
                <h2>Вдохновение для вашего дома</h2>
                <div className="inspare-wrapper">
                    {image.map((image, index) => (
                        <div className="inspare-img-wrapper">
                            <img src={image} alt="img" key={index} />
                        </div>

                    ))}
                </div>

            </div>
        </div>
    );
};

export default Inspare;