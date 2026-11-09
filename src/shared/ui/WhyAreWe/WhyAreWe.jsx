import './style.css';
import bannerWhyWe from '../../../assets/img/why-we.jpg';
import  matherialIcon from '../../../assets/img/icon/leaf.svg';
import  deliveryIcon from '../../../assets/img/icon/truck.svg';
import  premiumIcon from '../../../assets/img/icon/check.svg';
import  supportIcon from '../../../assets/img/icon/headset.svg'

import ButtonFill from "../ButtonFill/ButtonFill.jsx";
const WhyAreWe = () => {
    return (
        <section className="section why-we">
            <div className="container">
                <div className="why-are-we-left">
                    <img src={bannerWhyWe} alt="banner"/>
                </div>

                <div className="why-are-we-right">
                    <h2>Почему выбирают HAVEN?</h2>
                    <p>Мы создаем мебель и предметы интерьера, которые сочетают в себе качество, функциональность и эстетику</p>

                    <div className="why-are-we-wrapper">
                        <div className="why-are-we-item">
                            <div className="why-are-we-icon">
                                <img src={matherialIcon} alt="icon"/>
                            </div>
                            <div className="why-are-we-text">
                                <h3>Экологические материалы</h3>
                                <p>Используем безопасные и сертифицированные материалы</p>
                            </div>
                        </div>

                        <div className="why-are-we-item">
                            <div className="why-are-we-icon">
                                <img src={premiumIcon} alt="icon"/>
                            </div>
                            <div className="why-are-we-text">
                                <h3>Премиальное качество</h3>
                                <p>Контроль качества на каждом этапе производства</p>
                            </div>
                        </div>

                        <div className="why-are-we-item">
                            <div className="why-are-we-icon">
                                <img src={deliveryIcon} alt="icon"/>
                            </div>
                            <div className="why-are-we-text">
                                <h3>Быстрая доставка</h3>
                                <p>Доставка по всей России от 1 до 7 дней</p>
                            </div>
                        </div>

                        <div className="why-are-we-item">
                            <div className="why-are-we-icon">
                                <img src={supportIcon} alt="icon"/>
                            </div>
                            <div className="why-are-we-text">
                                <h3>Забота о клиентах</h3>
                                <p>Поддержка 24/7 и легкий возврат товара</p>
                            </div>
                        </div>

                    </div>
                    <ButtonFill type={"link"} text={"Подробнее о нас"} path={'/about'} arrow={true}/>

                </div>
            </div>


        </section>
    );
};

export default WhyAreWe;