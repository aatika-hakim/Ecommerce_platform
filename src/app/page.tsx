'use client'
import Hero from "@/components/hero/Hero";
import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductList from "@/components/ProductList";
import AOS from "aos"
import "aos/dist/aos.css"
import Features from "@/components/Features";
import Promotions from "@/components/Promotions";

export default function Home() {
    React.useEffect(() => {
        setTimeout(() => {
            AOS.init({
                offset: 100,
                duration: 800,
                easing: "ease-in-out-sine",
                delay: 100,
            });
            AOS.refresh();
        }, 100); 
    }, []);
    return (
        <main className="">
            <Hero />
            <ProductList/>
            <Features/>
            <Promotions />
        </main>
    );
}
