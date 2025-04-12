import React, { useContext, useState } from "react";
import "../../Styling/navbar.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import BillingContext from "../../context/cartContext";

export function NavBar(props) {
    const { price, item, searchText, setSearchText } = useContext(BillingContext);
    const [val, setVal ] = useState("");

    const handleText = (event) => {
        setSearchText(event.target.value);
    }

    return (
        <>
            <div className="navbar flex-full">
                <div className="sideContainer">
                    <h1 style={{ borderRight: "1px solid grey", padding: "20px" }}>
                        <span className="logo-yellow">blink</span>
                        <span className="logo-green">it</span>
                    </h1>
                    <div className="address">
                        <h3>Delivery in 8 minutes</h3>
                        <lable>Malad, Panch Bawadi, Malad East, Mumbai, Maharashtra 400097, India</lable>
                    </div>
                </div>
                <div className="searchBox">
                    <CiSearch className="icon" />
                    <input type="text" placeholder="search 'Curd'" value={searchText} onChange={handleText} />
                </div>
                <div className="sideContainer">
                    <div>
                        <label>Login</label>
                    </div>
                    <div className="flex-full cart-button">
                        <MdOutlineShoppingCart color="black" className="icon" />
                        <div>
                            <p>{item} Items</p>
                            <p>₹ {price} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}