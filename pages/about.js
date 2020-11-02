import React, { useState } from 'react'
import Head from 'next/head'

import Layout from "../components/layout/layout";
import HeroCompany from "../components/hero_company";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import Link from 'next/link'

import daniil01 from "../public/images/daniil01.jpg"
import daniil03 from "../public/images/daniil03.jpg"
import daniil04 from "../public/images/daniil04.jpg"

import three_screens from "../public/images/company/three_screens.jpg"

import heroImg from "../public/images/hero/hero.jpg"

import { Row, Col, Container } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import UseAnimations from 'react-useanimations'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const AboutUs = () => {

  return (
  <div className="about">
    <Head>
      <title>About Us | imAGINE</title>
    </Head>

    <Layout>
      
      <HeroCompany />

		<div className="us">
			<Container>
				<h3 className="text-center my-3">About Us</h3>
				<Row className="mt-5">
					<Col>
						<img src={heroImg} alt="about us"/>
					</Col>
					<Col>
						<div className="right-description">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since been
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since been
						</div>
						<ul>
							<li><FontAwesomeIcon icon={faCheckCircle} className="font-icon" />&nbsp;&nbsp;Deliver a high quality digital signage products</li>
							<li><FontAwesomeIcon icon={faCheckCircle} className="font-icon" />&nbsp;&nbsp;Support our customers once signing a contract</li>
							<li><FontAwesomeIcon icon={faCheckCircle} className="font-icon" />&nbsp;&nbsp;Streamline an expanded array of digital signage</li>
							<li><FontAwesomeIcon icon={faCheckCircle} className="font-icon" />&nbsp;&nbsp;Pursue signage-enabled niche markets with professionals</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>

		<div className="team">
			<Container>
				<h3 className="text-center my-3">Meet the best team</h3>
				<Row className="mt-5 text-center">
					<Col>
						<Card>
							<CardImg top src="/images/paul.png" alt="Perfect man"/>
							<CardBody>
								<CardTitle>Paul Pleming</CardTitle>
								<CardSubtitle>Co-owner at InteractiveMedia</CardSubtitle>
								<CardText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</CardText>
								<ul className="social">
									<li>
										<Link href="/"><a><UseAnimations animationKey="facebook" size={22} className="social-icon" /></a></Link>
									</li>
									<li>
										<Link href="/"><a><UseAnimations animationKey="linkedin" size={22} className="social-icon" /></a></Link>
									</li>
									<li>
										<Link href="/"><a><UseAnimations animationKey="twitter" size={22} className="social-icon" /></a></Link>
									</li>
									<li>
										<Link href="/"><a><UseAnimations animationKey="instagram" size={22} className="social-icon" /></a></Link>
									</li>
								</ul>
							</CardBody>
						</Card>
					</Col>
					<Col>
						<Card>
							<CardImg top className="card-img" src={daniil01} alt="Card image cap"/>
							<CardBody>
								<CardTitle>Daniil Livada</CardTitle>
								<CardSubtitle>Web Developer</CardSubtitle>
								<CardText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</CardText>
								<ul className="social">
									<li>
										<Link href="/"><a><UseAnimations animationKey="facebook" size={22} className="social-icon" /></a></Link>
									</li>
									<li>
										<Link href="/"><a><UseAnimations animationKey="linkedin" size={22} className="social-icon" /></a></Link>
									</li>
									<li>
										<Link href="/"><a><UseAnimations animationKey="twitter" size={22} className="social-icon" /></a></Link>
									</li>
									<li>
										<Link href="/"><a><UseAnimations animationKey="instagram" size={22} className="social-icon" /></a></Link>
									</li>
								</ul>
							</CardBody>
						</Card>
					</Col>
					<Col>
						<Card>
							<CardImg top className="card-img" src="/images/deon.png" alt="Card image cap"/>
							<CardBody>
								<CardTitle>Deon van Staden</CardTitle>
								<CardSubtitle>Sales Cosultant at InteractiveMedia</CardSubtitle>
								<CardText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</CardText>
								<ul className="social">
									<li>
										<Link href="/"><a><UseAnimations animationKey="facebook" size={22} className="social-icon" /></a></Link>
									</li>
									<li>
										<Link href="/"><a><UseAnimations animationKey="linkedin" size={22} className="social-icon" /></a></Link>
									</li>
									<li>
										<Link href="/"><a><UseAnimations animationKey="twitter" size={22} className="social-icon" /></a></Link>
									</li>
									<li>
										<Link href="/"><a><UseAnimations animationKey="instagram" size={22} className="social-icon" /></a></Link>
									</li>
								</ul>
							</CardBody>
						</Card>
					</Col>
					<Col>
						<Card>
							<CardImg top className="card-img" src={daniil04} alt="Card image cap"/>
							<CardBody>
								<CardTitle>Daniil L</CardTitle>
								<CardSubtitle>Developer</CardSubtitle>
								<CardText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</CardText>
								<ul className="social">
									<li>
										<Link href="/"><a><UseAnimations animationKey="facebook" size={22} className="social-icon" /></a></Link>
									</li>
									<li>
										<Link href="/"><a><UseAnimations animationKey="linkedin" size={22} className="social-icon" /></a></Link>
									</li>
									<li>
										<Link href="/"><a><UseAnimations animationKey="twitter" size={22} className="social-icon" /></a></Link>
									</li>
									<li>
										<Link href="/"><a><UseAnimations animationKey="instagram" size={22} className="social-icon" /></a></Link>
									</li>
								</ul>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>

      <DemoRequest />
    </Layout>
  </div>
)}

export default AboutUs
