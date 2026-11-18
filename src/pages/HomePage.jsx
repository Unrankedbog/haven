
import MainScreen from "../component/MainScreen/MainScreen.jsx";
import PopularCategories from "../component/PopularCategories/PopularCategories.jsx";
import NewCollection from "../component/NewCollection/NewCollection.jsx";
import PopularProducts from "../component/PopularProducts/PopularProducts.jsx";
import WhyAreWe from "../shared/ui/WhyAreWe/WhyAreWe.jsx";
import Inspare from "../shared/ui/Inspare/Inspare.jsx";
import BestSellers from "../component/BestSellers/BestSellers.jsx";
import Reviews from "../component/Reviews/Reviews.jsx";
import FormSell from "../shared/ui/FormSell/FormSell.jsx";


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
            <Reviews />
            <FormSell />


        </>
    );
};

export default HomePage;