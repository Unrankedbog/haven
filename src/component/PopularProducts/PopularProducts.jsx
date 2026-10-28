import React from 'react';
import {usePopularCategories} from "../../hooks/useCategories.js";
import {FILTERS, usePopularProducts} from "../../hooks/usePopularProducts.js";
import ButtonFill from "../../shared/ui/ButtonFill/ButtonFill.jsx";
const PopularProducts = () => {

    const {
        products,
        activeFilter,
        setActiveFilter,
        isLoading,
        isFetching ,
        isError ,
        error ,
        refetch
    } = usePopularProducts();

    const tabs = [
        {id:FILTERS.HITS, label:"Хиты продаж"},
        {id:FILTERS.NEW, label:"Новинки"},
        {id:FILTERS.SALES, label:"Со скидкой"},
    ]

    if (isLoading) {
        return (
            <secction>
                <div className="container">
                    <h2>Популярные категории</h2>
                    <p>Выберите категорию и найдите идеальные решения для вашего интерьера</p>

                    <div>
                        <p>Загрузка категорий...</p>
                    </div>
                </div>
            </secction>
        )
    }

    if (isError) {
        return (
            <secction>
                <div className="container">
                    <p>Не удалось загрузить категории</p>
                    <ButtonFill onClick={() => refetch()} text={"Попробовать снова"} type={'button'} />
                </div>
            </secction>
        )
    }

    return (
        <div>

        </div>
    );
};

export default PopularProducts;