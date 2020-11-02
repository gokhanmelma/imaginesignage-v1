import React from 'react'
import Link from 'next/link'
import { Col, Row, Container } from 'reactstrap'

import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import img_gallery_1 from "../public/images/img_gallery_1.jpg"
import img_gallery_7 from "../public/images/img_gallery_7.jpg"

const SliderFlow = () => {
	var settings = {
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };

    return (
		<div className="sliderflow">
			<Slider {...settings}>
		        <div>
		          <img src={img_gallery_1} alt="image" />
		        </div>
		        <div>
		          <img src={img_gallery_7} alt="image" />
		        </div>
		        <div>
		          <img src={img_gallery_1} alt="image" />
		        </div>
		        <div>
		          <img src={img_gallery_7} alt="image" />
		        </div>
		        <div>
		          <img src={img_gallery_1} alt="image" />
		        </div>
		        <div>
		          <img src={img_gallery_7} alt="image" />
		        </div>
		        <div>
		          <img src={img_gallery_1} alt="image" />
		        </div>
		        <div>
		          <img src={img_gallery_7} alt="image" />
		        </div>
		        <div>
		          <img src={img_gallery_7} alt="image" />
		        </div>
		        <div>
		          <img src={img_gallery_7} alt="image" />
		        </div>
		        <div>
		          <img src={img_gallery_7} alt="image" />
		        </div>
			</Slider>
		</div>
	)
}
export default SliderFlow