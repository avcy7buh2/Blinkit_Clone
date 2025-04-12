import React, {useState, useEffect, useContext, memo} from "react"
import "../../Styling/card.css"
import { GoPlus } from "react-icons/go";
import { HiMiniMinusSmall } from "react-icons/hi2";
import BillingContext from "../../context/cartContext";

const ProductCard = ({info}) => {
    const [count, setCount] = useState(0);
    const {price, item, setPrice, setItem, product, setProduct} = useContext(BillingContext);

    const handleAdd = () => {
        setCount(count+1)
        setPrice(price + info.price);
        setItem(item + 1)
        setProduct(product.map(singleItem => singleItem.id === info.id ? {...singleItem, count: count + 1} : singleItem))
    }

    const handleRemove = () => {
        if(count > 0){
            setCount(count-1);
            setPrice(price - info.price);
            setItem(item - 1)
            setProduct(product.map(singleItem => singleItem.id === info.id ? {...singleItem, count: count - 1} : singleItem))
        }
    }

    const handleCart = () => {
        setCount(1);
        setPrice(info.price);
        setItem(1);
        setProduct([...product, {...info, count: 1}])
    }

    return (
        <>
            {
                info && (
                    <div className="cardContaier">
                        <div className="contentContainer">
                            <img className="cardImage" src={info.image}></img>
                            <div className="titleContainer">
                                <span className="timer block">30 MIns</span>
                                <span className="title block">{info.title}</span>
                                <span className="block">500 ml</span>
                            </div>
                            <div className="pricingContainer">
                                <span>₹ {info.price}</span>
                                {
                                    count > 0 ? (
                                        <div className="IndProductCounter greenButton">
                                    <HiMiniMinusSmall className="counter" onClick={() => handleRemove(info.id)}/>
                                    <span>{count}</span>
                                    <GoPlus className="counter" onClick={() => handleAdd(info.id)}/>
                                </div>
                                    ): <span className="greenButton" onClick={() => handleCart(info.id)}>Add</span> 
                                } 
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default memo(ProductCard);