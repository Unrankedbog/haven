import ButtonFill from "../shared/ui/ButtonFill/ButtonFill.jsx";
import ButtonBorder from "../shared/ui/ButtonBorder/ButtonBorder.jsx";


const HomePage = () => {
    return (
        <div>
            <ButtonFill type={'link'} path={'/catalog'} text={'Смотреть каталог'} />
            <ButtonBorder type={'link'} path={'/catalog'} text={'Смотреть каталог'} />



        </div>
    );
};

export default HomePage;