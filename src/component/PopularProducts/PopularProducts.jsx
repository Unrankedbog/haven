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
                    <h2>Популярные товары</h2>

                    <div>
                        <p>Загрузка товаров...</p>
                    </div>
                </div>
            </secction>
        )
    }

    if (isError) {
        return (
            <secction>
                <div className="container">
                    <p>Не удалось загрузить товары</p>
                    <ButtonFill onClick={() => refetch()} text={"Попробовать снова"} type={'button'} />
                </div>
            </secction>
        )
    }

    return (
        <section className="section">
            <div className="container">
                <div className="popular-products-header">
                    <h2>Популярные товары</h2>

                    {isFetching && (
                        <span>Обновления...</span>
                    )}

                    <div className="popular-products-tabs">
                        {tabs.map((tab) => (
                            <button key={tab.id} className={`popular-products-tab ${activeFilter === tab.id ? 'active' : ''}`} onClick={() => setActiveFilter(tab.id)}>
                                {tab.label}
                            </button>
                            ))}
                    </div>
                </div>
                <div className="popular-products-wrapper">
                    карточки
                </div>
            </div>

        </section>
    );
};

export default PopularProducts;