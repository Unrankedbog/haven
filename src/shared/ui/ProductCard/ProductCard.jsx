

const ProductCard = ({product}) => {
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "Р";
    }

    const hasDiscount = product.oldPrice && product.oldPrice > product.price

    return (
        <div>
            
        </div>
    );
};

export default ProductCard;