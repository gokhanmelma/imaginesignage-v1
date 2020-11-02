import React, { useState } from 'react'
import Head from 'next/head'

import Layout from "../components/layout/layout";
import HeroShop from "../components/hero_shop";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import Link from 'next/link'
import { Container, Row, Col, Input } from 'reactstrap'

import instagram from "../public/images/instagram.png"
import feature03 from "../public/images/feature01.png"
import feature01 from "../public/images/feature03.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoundSign, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import img_hardware_1 from "../public/images/hardwares/img_hardware_1.jpg"
import img_hardware_2 from "../public/images/hardwares/img_hardware_2.jpg"
import img_hardware_3 from "../public/images/hardwares/img_hardware_3.jpg"
import img_hardware_4 from "../public/images/hardwares/img_hardware_4.jpg"

// import { Slider } from "@rmwc/slider";
// import '@material/slider/dist/mdc.slider.css';
// import Brands from '../components/brands';

const Product = ({data}) => {

	return (
  <div className="shop">
    <Head>
      <title>Product | imAGINE</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Layout>
    <HeroShop />

      <div className="shopping-product">
	      <Container>
		      <Row>
		      	<Col>
		      		<h3 className="text-center py-3">Products for Digital Signage</h3>
		      	</Col>
		      </Row>

		      <Row>
		      	<Col md="2" className="sidebar text-center">
		      		<div className="top-square">Filter the results</div>
					<div className="search-area text-left">
						<Input
							type="search"
							name="search"
							id="Search"
							placeholder="Search products"
						/>
						<div className="filter-name mt-4">by Price</div>
						<hr />

						<div className="filter-name mt-4">by Categories</div>
						<hr />
						<ul>
							<li>
							〉 Hardware
							</li>
							<li>
							〉 Software
							</li>
							<li>
							〉 Display
							</li>
						</ul>
					</div>
		      	</Col>

		      	<Col md="10" className="products text-center">
		      		<Container>
                        <div className="product text-center">
                            <img src={data.url} alt="product" />
                            <div className="name">{data.name}</div>
                            <div className="price"><span>{data.onsale ? data.price : ""}</span>{ data.onsale ? data.onsaleprice : product.price}</div>
                            <Link href="/"><a className="btn square-btn cart-btn">ADD TO CART</a></Link>
                        </div>
					</Container>
					<Link href="/"><a className="btn square-btn">Load more</a></Link>
		      	</Col>
		      </Row>
	      </Container>
      </div>

    <DemoRequest />
    </Layout>
  </div>
)}

Product.getInitialProps = async ({query}) => {
	var products = [
		{
			product_id: "1",
			url: "/images/hardwares/img_hardware_1.jpg",
			name: "Intel NUC 8 Core i",
			price: "$12.99",
			category: "hardware",
			onsale: false,
			onsaleprice: "$10.99",
		},
		{
			product_id: "2",
			url: "/images/hardwares/img_hardware_2.jpg",
			name: "Amazon Fire TV Stick 4K",
			price: "$12.99",
			category: "hardware",
			onsale: true,
			onsaleprice: "$10.99"
		},
		{
			product_id: "3",
			url: "/images/hardwares/img_hardware_3.jpg",
			name: "Intel Compute Stick",
			price: "$12.99",
			category: "hardware",
			onsale: false,
			onsaleprice: "$10.99"
		},
		{
			product_id: "4",
			url: "/images/hardwares/img_hardware_4.jpg",
			name: "AOpen Chromebox Mini",
			price: "$12.99",
			category: "hardware",
			onsale: true,
			onsaleprice: "$10.99"
		},
		{
			product_id: "5",
			url: "/images/hardwares/img_hardware_1.jpg",
			name: "Intel NUC 8 Core i",
			price: "$12.99",
			category: "hardware",
			onsale: true,
			onsaleprice: "$10.99"
		},
		{
			product_id: "6",
			url: "/images/hardwares/img_hardware_1.jpg",
			name: "Intel NUC 8 Core i",
			price: "$12.99",
			category: "hardware",
			onsale: false,
			onsaleprice: "$10.99"
		},
		{
			product_id: "7",
			url: "/images/hardwares/img_hardware_2.jpg",
			name: "Amazon Fire TV Stick 4K",
			price: "$12.99",
			category: "hardware",
			onsale: true,
			onsaleprice: "$10.99"
		},
		{
			product_id: "8",
			url: "/images/hardwares/img_hardware_3.jpg",
			name: "Intel Compute Stick",
			price: "$12.99",
			category: "hardware",
			onsale: false,
			onsaleprice: "$10.99"
		},
		{
			product_id: "9",
			url: "/images/hardwares/img_hardware_4.jpg",
			name: "AOpen Chromebox Mini",
			price: "$12.99",
			category: "hardware",
			onsale: true,
			onsaleprice: "$10.99"
		},
    ]
	return { data : products[query.slug-1]}
}

export default Product
