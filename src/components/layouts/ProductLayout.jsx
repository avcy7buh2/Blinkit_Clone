import { useEffect, useState, memo, useContext } from "react";
import axios from "axios";
import ProductCard from "../shared/productCard";
import "../../Styling/product.css"
import BillingContext from "../../context/cartContext";

const ProductLayout = () => {
    const [product, setProduct] = useState([]);
    const { searchText } = useContext(BillingContext);

    useEffect(() => {
        const fetchData = async () => {
            const prodData = await axios.get("https://fakestoreapi.com/products");

            if (prodData) {
                setProduct(...product, prodData.data);
                console.log(prodData.data)
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <div className="product-flex">
                {
                    searchText ? (
                        product.filter((item) => item.title.includes(searchText)).map((item) => (
                            <ProductCard info={item} key={item.id} />
                        ))
                    ) : (
                        product.map((item) => (
                            <ProductCard info={item} key={item.id} />
                        ))
                    )
                }
            </div>
        </>
    )
}

export default memo(ProductLayout);