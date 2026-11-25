import {FOOTER_MENU} from "../../config/navigation/footerMenu.config.js";
import './style.css'
import Logo from "../../shared/ui/Logo/Logo.jsx";
import logoImg from "../../assets/img/icon/logo.svg"
import {Link} from "react-router-dom";
import telegramIcon from '../../assets/img/icon/telegram.svg'
import okIcon from '../../assets/img/icon/OK.svg'
import messageIcon from '../../assets/img/icon/messenger.svg'
import FooterMenuItem from "../../shared/ui/FooterMenuItem/FooterMenuItem.jsx";
import phoneIcon from '../../assets/img/icon/phone.svg'
import emailIcon from '../../assets/img/icon/mail.svg'
import locationIcon from '../../assets/img/icon/location.svg'
import clockIcon from '../../assets/img/icon/clock.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container ">
                <div className="footer-column">
                    <Logo logoImg={logoImg} alt="logo" />
                    <p>Создаем мебель и предметы интерьеров для уютной и гармоничной жизни.</p>
                    <div className="footer-social">
                        <Link to="/">
                            <img src={telegramIcon} alt="telegramLogo" />
                        </Link>
                        <Link to="/">
                            <img src={okIcon} alt="OKLogo" />
                        </Link>
                        <Link to="/">
                            <img src={messageIcon} alt="messengerLogo" />
                        </Link>
                    </div>
                </div>

                <div className="footer-column">
                    <h4>Каталог</h4>
                    <FooterMenuItem itemMenu={FOOTER_MENU.catalog}/>
                </div>

                <div className="footer-column">
                    <h4>О компании</h4>
                    <FooterMenuItem itemMenu={FOOTER_MENU.aboutCompany}/>
                </div>

                <div className="footer-column">
                    <h4>Покупателям</h4>
                    <FooterMenuItem itemMenu={FOOTER_MENU.customers}/>
                </div>

                <div className="footer-column">
                    <h4>Контакты</h4>

                    <div className="footer-column-item">
                        <img src={phoneIcon} alt="телефон"/>
                        <a href={`tel:${FOOTER_MENU.contacts.phone}`}>
                            {FOOTER_MENU.contacts.phone}
                        </a>
                    </div>

                    <div className="footer-column-item">
                        <img src={emailIcon} alt="почта"/>
                        <a href={`mailTo:${FOOTER_MENU.contacts.email}`}>
                            {FOOTER_MENU.contacts.email}
                        </a>
                    </div>

                    <div className="footer-column-item">
                        <img src={locationIcon} alt="адресс"/>
                        <p>
                            {FOOTER_MENU.contacts.address}
                        </p>
                    </div>

                    <div className="footer-column-item">
                        <img src={clockIcon} alt="время работы"/>
                        <p>
                            {FOOTER_MENU.contacts.sсhedule}
                        </p>
                    </div>


                </div>
            </div>

        </footer>
    );
};

export default Footer;