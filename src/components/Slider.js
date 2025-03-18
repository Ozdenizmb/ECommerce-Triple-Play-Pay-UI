'use client';
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const categories = ["Electronics", "Fashion", "Cosmetics", "Home & Kitchen", "Sports", "Grocery", "Books", "Toys","Health & Wellness"];

    return (
        <section className="slider pt-3">
            <div className="container">
                <main className="card">
                    <div className="row p-lg-2 p-1">

                        <aside className="d-none d-lg-block col-lg-3">
                            <nav className="nav nav-pills flex-column flex-nowrap overflow-auto slider_nav">
                                {categories.map((category, index) => (
                                    <a
                                        key={index} href='#'
                                        className={`nav-link ${activeIndex === index ? "active" : ""}`}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        {category}
                                    </a>
                                ))}
                            </nav>
                        </aside>

                        <div className="col-lg-9">
                        <Swiper
                            modules={[Navigation, Pagination, A11y, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide key={'slider1'}><img src='/slider-1.jpeg' alt='slider1'/></SwiperSlide>
                        <SwiperSlide key={'slider2'}><img src='/slider-2.jpeg' alt='slider2'/></SwiperSlide>
                        <SwiperSlide key={'slider3'}><img src='/slider-3.jpeg' alt='slider3'/></SwiperSlide>
                        </Swiper>
                        </div>

                    </div>
                </main>
            </div>
        </section>
    )
}

export default Slider