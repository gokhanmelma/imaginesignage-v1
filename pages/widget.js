import React, { useState } from 'react'
import Head from 'next/head'

import Layout from "../components/layout/layout";
import Hero from "../components/hero";
import Brands from "../components/brands";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import Link from 'next/link'

import feature03 from "../public/images/feature03.svg"
import feature01 from "../public/images/energy-energy.svg"
import feature02 from "../public/images/home-insurance.svg"

import ecna from "../public/images/widgets/enca-1.png"
import rss from "../public/images/widgets/rss-feed-1.png"
import weather from "../public/images/widgets/weather-1.png"
import website from "../public/images/widgets/website-1.png"

import leftArrow from "../public/images/left-arrow.png"

import { Row, Col, Container } from 'reactstrap';

import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

const Widget = ({data}) => {
	var settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500
	};

	const json = {
		"ecna": "ECNA news",
		"rss": "rss feed",
		"weather": "Weather",
		"website": "Website"
	}

	const img_list = {
		"ecna": ecna,
		"rss": rss,
		"weather": weather,
		"website": website
	}

  return (
  <div className="widget">
    <Head>
      <title>Widget | imGINE</title>
    </Head>

    <Layout>
		<div className="arrow-image">
			<Container><Link href="/widgets/"><a><img src={leftArrow} alt="arrow" /></a></Link></Container>
		</div>
		<div className="widget-slider">
			<Container>
				<Slider {...settings}>
					<div className="text-center">
						<img src={img_list[data]} alt="amazon" />
					</div>
					<div>
						<img src={img_list[data]} alt="dropbox" />
					</div>
					<div>
						<img src={img_list[data]} alt="mit" />
					</div>
					<div>
						<img src={img_list[data]} alt="mobil" />
					</div>
					<div>
						<img src={img_list[data]} alt="uber" />
					</div>
					<div>
						<img src={img_list[data]} alt="valve" />
					</div>
				</Slider>		
			</Container>
		</div>

		<div className="widget-text">
			<Container>
				<div className="appname">{json[data]}</div>
				<div className="description">Display a selection of the latest news with headlines and images pulled directly from eNCA – South Africa’s trusted independent news channel. 
				<br />Content is updated constantly, ensuring fresh newsworthy subject matter for your viewers.</div>
			</Container>
		</div>
    </Layout>
  </div>
)}

Widget.getInitialProps = async ({ query }) => {
	const json = {
		"ecna": "ECNA news",
		"rss": "rss feed",
		"weather": "Weather",
		"website": "Website"
	}

	return { data: query.slug }
}

export default Widget
