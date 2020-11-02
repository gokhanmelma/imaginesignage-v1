import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, Container, Input } from 'reactstrap';
import Link from 'next/link'

import Layout from "../components/layout/layout";
import HeroCompany from "../components/hero_company";
import Brands from "../components/brands";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import instagram from "../public/images/hero/hero.jpg"

import Lottie from 'react-lottie';
import * as starsLottie from '../public/animations/stars.json'
import * as arrowsLottie from '../public/animations/accept-arrows.json'

import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

const Partners = () => {
	var settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		autoplay: true
	};

	const starsLottieOptions = {
      loop: true,
      autoplay: true, 
      animationData: starsLottie.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
	};
	
	const arrowsLottieOptions = {
		loop: true,
		autoplay: true, 
		animationData: arrowsLottie.default,
		rendererSettings: {
		  preserveAspectRatio: 'xMidYMid slice'
		}
	  };
  return (
  <div className="partners">
    <Head>
      <title>Partners | imGINE</title>
    </Head>

    <Layout>
      
      <HeroCompany />
      <Brands />

		<div className="reviews">
			<Container>
				<h3 className="text-center">Clients Love Us</h3>
				<Lottie options={starsLottieOptions}
				height={65}
				width={200} />
				<Row className="mt-3">
					<Col md="6">
						<Container className="slider-review">
							<Slider {...settings}>
								<div>
									<div className="quote">"Paul and his team are always a pleasure to work with, nothing is too much trouble, and I can trust they will always deliver."</div>
									<span>★★★★★</span>
									<div className="client-position">Freelancer</div>
									<div className="client-name">Daniil</div>
								</div>

								<div>
									<div className="quote">"Paul and his team are always a pleasure to work with, nothing is too much trouble, and I can trust they will always deliver."</div>
									<span>★★★★★</span>
									<div className="client-position">Freelancer</div>
									<div className="client-name">Daniil</div>
								</div>
							</Slider>
						</Container>
					</Col>
					
					<Col md="6">
						<div className="love-us-text">
							The imAGNE's digital signage platform is designed to make our <span>resellers</span> successful. 
							With thousands of customers across dozens of industries, we can help nearly any business.<br /><br />
							We're simple to use, transparent with pricing, and a no-brainer to use for your clients' digital displays.
						</div>
					</Col>
				</Row>
			</Container>
		</div>

		<div className="reseller-benefit">
			<Container>
				<Row>
					<Col>
						<h3 className="text-center">imAGINE Reseller Benefits</h3>
						<Row className="mt-4">
							<Col>
								<div className="text">① &nbsp;Have full control over your business model and own the relationship with your clients.</div>
							</Col>

							<Col>
								<div className="text">② &nbsp;Use our powerful Network Dashboard to monitor and control hundreds of screens.</div>
							</Col>
						</Row>
						<Row className="mt-4">
							<Col>
								<div className="text">③ &nbsp;Begin with a few screens and expand. <span>Resellers</span> get additional licenses on higher tiers.</div>
							</Col>
							
							<Col>
								<div className="text">⑤ &nbsp;Build on our strong channel relationships with manufacturers, distributors, and more.</div>
							</Col>
						</Row>
						<Row className="mt-4">
							<Col>
								<div className="text">④ &nbsp;Sell imAGINE anywhere! We support many languages and regions.</div>
							</Col>
							
							<Col>
								<div className="text">⑥ &nbsp;Add imAGINE to your line card or service catalog in just a few steps.</div>
							</Col>
						</Row>
					</Col>

					<Col>
						<img src={instagram} alt="image" />
					</Col>
				</Row>
			</Container>
		</div>

		<div className="reseller-form">
			<Container>
				<h3 className="text-center">Apply to Become an imAGINE Reseller</h3>
				<Row className="mt-5">
					<Col>
						<Container className="left">
							<h5 className="text-center">Join our growing family of successful <br/>imAGINE Resellers around the world.</h5>
							<div className="mt-5">To get started:</div>
							<ul className="mt-3">
								<li>
								Try imAGINE's digital signage software to see the power of our platform for yourself.
								</li>
								<li>
								Become an official <span>reseller</span> and get:
									<ul>
										<li>Reseller on-boarding and training session</li>
										<li>Discounted imAGINE software licenses</li>
										<li>Training and marketing materials for <span>resellers</span></li>
										<li>Advanced monitoring and client management</li>
									</ul>
								</li>
							</ul>
						</Container>
					</Col>
					<Col>
						<Container className="right">
							<h5 className="text-center">Tell us about your business</h5>

							<div className="daniil-form mt-5">
								<Row className="mt-2">
									<Col>
										<Input type="text" placeholder="First Name" />
									</Col>
									<Col>
										<Input type="text" placeholder="Last Name" />
									</Col>
								</Row>
								<Row className="mt-2">
									<Col>
										<Input type="text" placeholder="Company Name" />
									</Col>
									<Col>
										<Input type="email" placeholder="Email Address" />
									</Col>
								</Row>
								<Input type="text" placeholder="Website URL" className="mt-2"/>
								<Input type="textarea" placeholder="Your way to partner with us" className="mt-2"/>
								<Row className="text-center mt-2">
									<Col>
									<Lottie options={arrowsLottieOptions}
									height={65}
									width={200} />
									</Col>
								
									<Col>
										<div className="btn square-btn-big mt-2">Submit Application</div>
									</Col>
								</Row>
							</div>
						</Container>
					</Col>
				</Row>
			</Container>
		</div>

      <DemoRequest />
    </Layout>
  </div>
)}

export default Partners
