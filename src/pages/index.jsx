import { useState } from 'react'
import { NavBar } from '../components/shared/NavBar'
import ImageHolder from '../components/shared/imageHolder'
import ProductLayout from '../components/layouts/ProductLayout'
import BillingContext from '../context/cartContext'
import "../App.css";

function Index() {

  const [price, setPrice] = useState(0);
  const [item, setItem] = useState(0);
  const [product, setProduct] = useState([]);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <BillingContext.Provider value={{price, item, setPrice, setItem, product, setProduct, searchText, setSearchText}}>
        <NavBar />
        <div className='bodyBox'>
          <ImageHolder src={["https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"]} />
          <ImageHolder src={[
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg",
            "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg"]} />
        </div>
        <ProductLayout />
      </BillingContext.Provider>
    </>
  )
}

export default Index;
