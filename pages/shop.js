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
import { faCheckCircle, faTimesCircle, faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

import img_hardware_1 from "../public/images/hardwares/img_hardware_1.jpg"
import img_hardware_2 from "../public/images/hardwares/img_hardware_2.jpg"
import img_hardware_3 from "../public/images/hardwares/img_hardware_3.jpg"
import img_hardware_4 from "../public/images/hardwares/img_hardware_4.jpg"

// import { Slider } from "@rmwc/slider";
// import '@material/slider/dist/mdc.slider.css';
// import Brands from '../components/brands';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import NativeSelect from '@material-ui/core/NativeSelect';

const Shop = ({data}) => {
	const [filter, setFilter] = useState({ min: 1, max: 500 })
	const [filtered, setFiltered] = useState(data)
	const [age, setAge] = useState('')

	const [value, setValue] = useState(0)
	const [message, setMessage] = useState('')

	const onFilter = (value) => {
		setFilter(value)

		let filtered_products = data.filter(
			(item) => {
				if (item.price >= value.min && item.price <= value.max)
					return true
			}
		)
		setFiltered(filtered_products)
	}

	const handleChange = event => {
		setAge(event.target.value);
	};


	const doDecrement = () => {
		if(value) {
			setValue(value - 1)
			setMessage('')
		} 
		else {
			setMessage("Can't decrement. Since 0 is the min value")
		}
	}
	const doIncrement = () => {
		if(value < 10) {
			setValue(value + 1)
			setMessage('')
		} 
		else {
			setMessage("Can't increment. Since 10 is the max value")
		}
	}
	
	return (
  <div className="shop">
    <Head>
      <title>Shop | imAGINE</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Layout>
    <HeroShop />

      <div className="shopping-cart">
	      <Container>
				<Row className="filter-area-top">
				<Col md={{offset: 6, size: 3}}>
					{/* <Input
						type="search"
						name="search"
						id="Search"
						placeholder="Search products"
					/> */}
					<TextField id="standard-search" label="Search products" type="search" />
				</Col>
				<Col md="3">
					<div className="price-range mt-2">Price: ${filter.min} - ${filter.max}</div>
					<InputRange
						formatLabel={val => ''}
						minValue={1}
						maxValue={500}
						value={filter}
						onChange={val => onFilter(val)}
					/>
				</Col>
		    	</Row>

		      <Row>
		      	<Col md="2" className="sidebar text-center">
		      		<div className="top-square">Product Category</div>
					<div className="filter-area-side text-left px-3 py-3">
						<ul>
							<li>
							Menu Board screens
							</li>
							<li>
							TV screens
							</li>
							<li>
							Monitors
							</li>
							<li>
							Commercial Lite monitors
							</li>
							<li>
							Full Commercial monitors
							</li>
							<li>
							Video Wall screens
							</li>
							<li>
							Outdoor screens
							</li>
						</ul>
					</div>
		      	</Col>

		      	<Col md="10" className="products text-center">
		      		<Container>
						{
							filtered.map((product, id) => (
							<Row className="product" key={id}>
								<Col md="2" className="center"><img src={product.url} alt="product" /></Col>
								<Col md="2" className="center">
									<div className="name">{product.name}</div>
									<div>24 month contract</div>
								</Col>
								<Col md="3" className="center text-left">
									<div><FontAwesomeIcon icon={faCheckCircle} className="font-icon-check" /> Auto start on power failure</div>
									<div><FontAwesomeIcon icon={faCheckCircle} className="font-icon-check" /> Multiple regions/zones</div>
									<div><FontAwesomeIcon icon={faCheckCircle} className="font-icon-check" /> Start up and Shutdown timer</div>
									<div><FontAwesomeIcon icon={faTimesCircle} className="font-icon-cross" /> Auto start on power failure</div>
								</Col>
								<Col md="2" className="center">
									<Row>Select OS version</Row>
									<Row>
										<div>
											<FontAwesomeIcon icon={['fab', 'windows']} className="fab-icon" /><br />
										Windows
										</div>
										<div>
											<FontAwesomeIcon icon={['fab', 'linux']} className="fab-icon" /><br />
										Linux
										</div>
									</Row>
								</Col>		
								<Col md="2" className="add-to-btn">
									<div className="price">${ product.price }</div>
									<Row className="justify-content-center">
										<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={age}
										onChange={handleChange}
										>
											<MenuItem value={10}>Ten</MenuItem>
											<MenuItem value={20}>Twenty</MenuItem>
											<MenuItem value={30}>Thirty</MenuItem>
										</Select>

										<div id="increment-component" className="ml-3">
											<button onClick={doDecrement}><FontAwesomeIcon icon={faMinus} className="font-icon-check" /></button>
											<input type="text" className="number" value={value}></input>
											<button onClick={doIncrement}><FontAwesomeIcon icon={faPlus} className="font-icon-check" /></button>
											{/* <sub>{message}</sub> */}
										</div>
									</Row>
									<Link href={`/product/${product.product_id}`}><a className="btn square-btn cart-btn mt-2"><FontAwesomeIcon icon={faShoppingCart} className="faShoppingCart" className="cart-font-icon"/> ADD TO CART</a></Link>
								</Col>
							</Row>
							))
						}
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

Shop.getInitialProps = async ({query}) => {
	var products = [
		{
			product_id: "1",
			url: "/images/hardwares/img_hardware_1.jpg",
			name: "Intel NUC 8 Core i",
			price: "12.99",
			category: "hardware",
			onsale: false,
			onsaleprice: "10.99",
		},
		{
			product_id: "2",
			url: "/images/hardwares/img_hardware_2.jpg",
			name: "Amazon Fire TV Stick 4K",
			price: "12.99",
			category: "hardware",
			onsale: true,
			onsaleprice: "10.99"
		},
		{
			product_id: "3",
			url: "/images/hardwares/img_hardware_3.jpg",
			name: "Intel Compute Stick",
			price: "12.99",
			category: "hardware",
			onsale: false,
			onsaleprice: "10.99"
		},
		{
			product_id: "4",
			url: "/images/hardwares/img_hardware_4.jpg",
			name: "AOpen Chromebox Mini",
			price: "12.99",
			category: "hardware",
			onsale: true,
			onsaleprice: "10.99"
		},
		{
			product_id: "5",
			url: "/images/hardwares/img_hardware_1.jpg",
			name: "Intel NUC 8 Core i",
			price: "112.99",
			category: "hardware",
			onsale: true,
			onsaleprice: "110.99"
		},
		{
			product_id: "6",
			url: "/images/hardwares/img_hardware_1.jpg",
			name: "Intel NUC 8 Core i",
			price: "212.99",
			category: "hardware",
			onsale: false,
			onsaleprice: "210.99"
		},
		{
			product_id: "7",
			url: "/images/hardwares/img_hardware_2.jpg",
			name: "Amazon Fire TV Stick 4K",
			price: "212.99",
			category: "hardware",
			onsale: true,
			onsaleprice: "210.99"
		},
		{
			product_id: "8",
			url: "/images/hardwares/img_hardware_3.jpg",
			name: "Intel Compute Stick",
			price: "312.99",
			category: "hardware",
			onsale: false,
			onsaleprice: "310.99"
		},
		{
			product_id: "9",
			url: "/images/hardwares/img_hardware_4.jpg",
			name: "AOpen Chromebox Mini",
			price: "312.99",
			category: "hardware",
			onsale: true,
			onsaleprice: "310.99"
		},
	]
	return { data:products }
}

export default Shop
