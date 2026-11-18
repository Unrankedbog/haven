import "./style.css"
import ButtonFill from "../ButtonFill/ButtonFill.jsx";

const FormSell = () => {
    return (
        <section className="section form-sell">
            <div className="container">
                <div className="form-sell-left">
                    <h2>Будьте в курсе новинок и акций</h2>
                    <p>Подпишитесь на нашу рассылку и получите скидку 10% на первый заказ</p>
                </div>

                <div className="form-sell-right">
                    <form>
                        <input type="email" placeholder="Ваш e-mail"/>
                        <ButtonFill type={"button"} text={'Подписаться'} typeBtn={'submit'}/>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default FormSell;