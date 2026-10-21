import './style.css'
import ButtonFill from "../../shared/ui/ButtonFill/ButtonFill.jsx";
import ButtonBorder from "../../shared/ui/ButtonBorder/ButtonBorder.jsx";
import mainImg from '../../assets/img/main-banner.jpg'
const MainScreen = () => {
    return (
        <section className="main-screen">
            <div className="container main">
                <div className="main-left-col">
                    <span>новая коллекция 2026</span>
                    <h1>Мебель для современной жизни</h1>
                    <p>Создаем функциональные и эстетичные решения для вашего дома</p>
                    <div className="btn-wrapper">
                        <ButtonFill type={'link'} path={'/catalog'} text={'Смотреть каталог'} />
                        <ButtonBorder type={'link'} path={'/about'} text={'Узнать больше'} />
                    </div>
                </div>
                <div className="main-right-col">
                    <img src={mainImg} alt="main-banner"/>
                </div>
            </div>
        </section>
    );
};

export default MainScreen;


