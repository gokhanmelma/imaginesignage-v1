import React from 'react'
import Link from 'next/link'
import { Col, Row, Container } from 'reactstrap'

import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faEye } from '@fortawesome/free-solid-svg-icons'

import img_hardware_1 from "../public/images/hardwares/img_hardware_1.jpg"
import img_hardware_2 from "../public/images/hardwares/img_hardware_2.jpg"
import img_hardware_3 from "../public/images/hardwares/img_hardware_3.jpg"
import img_hardware_4 from "../public/images/hardwares/img_hardware_4.jpg"
import new_tag from '../public/images/newtagsm.png'

const SliderProducts = () => {
	var settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500
    };

    return (
		<div className="sliderproducts">
			<Container className="text-center">
			<h3>New Products</h3>
			<div className="description">The imAGINE has new products, simply click the "Add To Cart" button</div>
			<Slider {...settings}>
		        <div className="text-center product">
						<div className="product-image">
							<img src={img_hardware_2} alt="image" />
							<div className="new">
								<img src={new_tag} alt="new product tag"/>
							</div>
	         			</div>
		        		<p className="product-name">Amazon Fire TV Stick 4K</p>
		        		<p className="price"><sup>$12.99</sup> $10.99</p>
		        		<Link href="/"><a className="btn square-btn cart-btn"><FontAwesomeIcon icon={faShoppingCart} className="awesome-font" /> ADD TO CART</a></Link>
	        	</div>
	        	<div className="text-center product">
						<div className="product-image">
							<img src={img_hardware_3} alt="image" />
	         			</div>
		        		<p className="product-name">Intel Compute Stick</p>
		        		<p className="price"><sup>$12.99</sup> $10.99</p>
		        		<Link href="/"><a className="btn square-btn cart-btn"><FontAwesomeIcon icon={faShoppingCart} className="awesome-font" /> ADD TO CART</a></Link>
	        	</div>
	        	<div className="text-center product">
						<div className="product-image">
							<img src={img_hardware_4} alt="image" />
							<div className="new">
								<img src={new_tag} alt="new product tag" />
							</div>
	         			</div>
		        		<p className="product-name">AOpen Chromebox Mini</p>
		        		<p className="price"><sup>$12.99</sup> $10.99</p>
		        		<Link href="/"><a className="btn square-btn cart-btn"><FontAwesomeIcon icon={faShoppingCart} className="awesome-font" /> ADD TO CART</a></Link>
	        	</div>
	        	<div className="text-center product">
						<div className="product-image">
							<img src={img_hardware_1} alt="image" />
							<div className="new">
								<img src={new_tag} alt="new product tag" />
							</div>
	         			</div>
		        		<p className="product-name">Intel NUC 8 Core i</p>
		        		<p className="price"><sup>$12.99</sup> $10.99</p>
		        		<Link href="/"><a className="btn square-btn cart-btn"><FontAwesomeIcon icon={faShoppingCart} className="awesome-font" /> ADD TO CART</a></Link>
	        	</div>
	        	<div className="text-center product">
						<div className="product-image">
							<img src={img_hardware_2} alt="image" />
	         			</div>
		        		<p className="product-name">Product Nam</p>
		        		<p className="price"><sup>$12.99</sup> $10.99</p>
		        		<Link href="/"><a className="btn square-btn cart-btn"><FontAwesomeIcon icon={faShoppingCart} className="awesome-font" /> ADD TO CART</a></Link>
	        	</div>
	        	<div className="text-center product">
						<div className="product-image">
							<img src={img_hardware_3} alt="image" />
	         			</div>
		        		<p className="product-name">Product Nam</p>
		        		<p className="price"><sup>$12.99</sup> $10.99</p>
		        		<Link href="/"><a className="btn square-btn cart-btn"><FontAwesomeIcon icon={faShoppingCart} className="awesome-font" /> ADD TO CART</a></Link>
	        	</div>
			</Slider>
			</Container>
		</div>
	)
}
export default SliderProducts