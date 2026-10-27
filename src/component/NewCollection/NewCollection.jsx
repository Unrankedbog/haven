import "./style.css"
import ButtonFill from "../../shared/ui/ButtonFill/ButtonFill.jsx";
import newCollectionBanner from '../../assets/img/new-collection-banner.jpg'

const NewCollection = () => {
    return (
        <section className="section new-collection">
            <div className="container">
                <div className="new-collection-title">
                    <span>весна / лето 2026</span>
                    <h2>Новая коллекция Scandi Natural</h2>
                    <p>Скандинавский дизайн, натуральные текстуры и безупречное качество в каждой детали</p>
                    <ButtonFill type={'link'} path={'/catalog'} text={'Смотреть коллекцию'} />
                </div>
                    <div className="new-collection-banner-wrapper">
                        <img src={newCollectionBanner} alt="Banner"/>
                    </div>

            </div>
        </section>
    );
};

export default NewCollection;