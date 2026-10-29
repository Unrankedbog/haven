
import MainScreen from "../component/MainScreen/MainScreen.jsx";
import PopularCategories from "../component/PopularCategories/PopularCategories.jsx";
import NewCollection from "../component/NewCollection/NewCollection.jsx";
import PopularProducts from "../component/PopularProducts/PopularProducts.jsx";


const HomePage = () => {
    return (
        <>
            <MainScreen/>
            <PopularCategories/>
            <NewCollection />
            <PopularProducts />
        </>
    );
};

export default HomePage;