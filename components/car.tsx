
"use client"
import React from 'react';
import { Slide,Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Image from "next/image";
import styles from "@/styles/testimonial.module.scss";
const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}
const slideImages = [
    {
        url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 1'
    },
    {
        url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
        caption: 'Slide 2'
    },
    {
        url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 3'
    },
];

const Slideshow = () => {
    const zoomInProperties = {
        indicators: true,
        duration: 3000,
        loop: true,
        transitionDuration: 1000,
        infinite: true,
        prevArrow: (
            <div
                style={{ width: "30px", marginLeft: "0px", cursor: "pointer" }}
                className={styles.prevArrow}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 612 612"
                    fill="#2e2e2e"
                >
                    <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
                </svg>
            </div>
        ),
        nextArrow: (
            <div
                style={{ width: "30px", marginLeft: "-30%", cursor: "pointer" }}
                className={styles.nextArrow}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 612 612"
                    fill="#2e2e2e"
                >
                    <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
                </svg>
            </div>
        ),
    };
    return (
        <div className="w-96 ">
            <div className="w-96 h-auto relative flex justify-center">
                <div className="relative max-w-[50%] ">
                    <div className="slide-container">
                        <Zoom scale={0.4}>
                            {slideImages.map((each, index) => (
                                <div key={index} className="slide-item">
                                    <Image
                                        width={100}
                                        height={100}
                                        style={{ width: "100%" }}
                                        alt={"rahul"}
                                        src={each.url}
                                    />
                                </div>
                            ))}
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>




)
}
export default Slideshow;