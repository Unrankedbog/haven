
import MainScreen from "../component/MainScreen/MainScreen.jsx";
import PopularCategories from "../component/PopularCategories/PopularCategories.jsx";
import NewCollection from "../component/NewCollection/NewCollection.jsx";


const HomePage = () => {
    return (
        <>
            <MainScreen/>
            <PopularCategories/>
            <NewCollection />
        </>
    );
};

export default HomePage;