import searchIcon from '../../assets/img/icon/search-normal.svg';
import heartIcon from '../../assets/img/icon/heart.svg';
import userIcon from '../../assets/img/icon/user.svg';
import cartIcon from '../../assets/img/icon/shopping-cart.svg';

export const MENU = {
    mainMenu : [
        {
            id: "home",
            label: "Главная",
            path: "/",
            type: "link"

        },
        {
            id: "catalog",
            label: "Каталог",
            path: "/catalog",
            type: "link"

        },
        {
            id: "about",
            label: "О нас",
            path: "/about",
            type: "link"
        },
        {
            id: "delivery",
            label: "Доставка",
            path: "/delivery",
            type: "link"
        },
        {
            id: "contacts",
            label: "Контакты",
            path: "/contacts",
            type: "link"
        },
        {
            id: "sell",
            label: "Акции",
            path: "/sell",
            type: "link"
        }

    ],
    iconMenu : [
        {
            id: "search",
            label: searchIcon,
            path: "/search",
            type: "button"
        },
        {
            id: "like",
            label: heartIcon,
            path: "/like",
            type: "link"
        },
        {
            id: "user",
            label: userIcon,
            path: "/user",
            type: "link"
        },
        {
            id: "cart",
            label: cartIcon,
            path: "cart",
            type: "link"
        }

    ]
}

