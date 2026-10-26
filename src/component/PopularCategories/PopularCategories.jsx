import  './style.css';
import {usePopularCategories} from "../../hooks/useCategories.js";
import ButtonFill from "../../shared/ui/ButtonFill/ButtonFill.jsx";
import CategoryCard from "../CategoryCard/CategoryCard.jsx";

const PopularCategories = () => {

    const {
        data: categories,
        isLoading,
        isFetching ,
        isError ,
        error ,
        refetch
    } = usePopularCategories();

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

    if (!categories || categories.length === 0) {
        return (
            <secction>
                <div className="container">
                    <h2>Популярные категории</h2>
                    <p>Выберите категорию и найдите идеальные решения для вашего интерьера</p>

                    <div>
                        <p>Категории не найдены</p>
                    </div>
                </div>
            </secction>
        )
    }
    return (
        <section>
            <div className="cantainer">
                <div className="popular-category-title">
                    <h2>Популярные категории</h2>
                    <p>Выберите категорию и найдите идеальные решения для вашего интерьера</p>


                    {isFetching && (
                        <span>Обновление...</span>
                    )}
                </div>

                <div className={'popular-card-wrapper'}>
                    {categories.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCategories;