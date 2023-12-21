import React from "react";
import Navbar from "../components/navbar.js";
import MobNav from "../components/MobNav.js";
import Hero from "../components/hero.js";
import Category from "../components/Category.js";
import Feature from "../components/Feature.js"
import Breakfast from "../components/Breakfast.js";
import Banner from "../components/banner.js"
import BlogSection from "../components/BlogSection.js";
import NewsLetter from "../components/NewsLetter.js";
import Footer from "../components/footer.js"
import Footerr from "../components/footer_2.js"
import {CartContextProvider} from "../context/cartContext";
import { useState } from "react";
import Cart from "../components/Cart.js";
export default function(){
    const [showCart,setShowCart] =useState(false);
    return(
        <>
        <CartContextProvider>
        <Navbar setShowCart={setShowCart} /> 
         <MobNav setShowCart={setShowCart}/>
         <Hero/>
         <Category/>
         <Feature/>
         <Breakfast/>
         <Banner/>
         <BlogSection/>
         <NewsLetter/>
         <Footer/>
         <Footerr/>
         {showCart && <Cart showCart={showCart} setShowCart={setShowCart}/>}
        </CartContextProvider>
         
         
        </>
       
    )
}