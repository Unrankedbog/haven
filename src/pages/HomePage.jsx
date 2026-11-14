
import MainScreen from "../component/MainScreen/MainScreen.jsx";
import PopularCategories from "../component/PopularCategories/PopularCategories.jsx";
import NewCollection from "../component/NewCollection/NewCollection.jsx";
import PopularProducts from "../component/PopularProducts/PopularProducts.jsx";
import WhyAreWe from "../shared/ui/WhyAreWe/WhyAreWe.jsx";
import Inspare from "../shared/ui/Inspare/Inspare.jsx";
import SwiperProductCard from "../shared/ui/SwiperProductCard/SwiperProductCard.jsx";
import BestSellers from "../component/BestSellers/BestSellers.jsx";


const HomePage = () => {
    return (
        <>
            <MainScreen/>
            <PopularCategories/>
            <NewCollection />
            <PopularProducts />
            <WhyAreWe />
            <Inspare />
            <BestSellers/>


        </>
    );
};

export default HomePage;