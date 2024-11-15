import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SwiperComponent = () => {
    return (
        <div id="swipertext">
            <h1>We Work With</h1>
            <div className="swiper">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={5}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <img src="https://ld-wp73.template-help.com/wordpress/prod_10684/v2/wp-content/uploads/2020/11/brand-1-2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://ld-wp73.template-help.com/wordpress/prod_10684/v2/wp-content/uploads/2020/11/brand-2-2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://ld-wp73.template-help.com/wordpress/prod_10684/v2/wp-content/uploads/2020/11/brand-3-2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://ld-wp73.template-help.com/wordpress/prod_10684/v2/wp-content/uploads/2020/11/brand-4-2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://ld-wp73.template-help.com/wordpress/prod_10684/v2/wp-content/uploads/2020/11/brand-5-2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://ld-wp73.template-help.com/wordpress/prod_10684/v2/wp-content/uploads/2020/11/brand-6-2.png" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SwiperComponent;
