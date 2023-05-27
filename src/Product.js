import React from 'react';
import { useState } from 'react';
import {data} from "./data";
import logo from "./images/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import avatar from "./images/image-avatar.png";

const Product = () => {
    const [products] = useState(data);
    const [value, setValue] = useState([0])

    const {mainImage} = products[value]

  return (
    <>
   <div className='flex item-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto'>
     <div className='flex items-center justify-start gap-4'>
      <img src={logo} alt="" />

      <nav>
        <ul className='flex items-center justify-start gap-4'>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>

    </div>
    <div>
        <ul className='flex items-center justify-start gap-4'>
            <li>
               <button>
                <AiOutlineShoppingCart/> 
               </button></li>
            <li><img src={avatar} alt='' className='w-12' /></li>
        </ul>
    </div>   
   </div>

    <section>
     
          <img src={mainImage} alt="" />
          {products.map((item) => (
            <ul key={item.id}>
              <img src={item.thumbnail} alt=""/>
            </ul>
        ))}
    </section>

</>
  )
}

export default Product
