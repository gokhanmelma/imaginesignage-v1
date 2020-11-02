import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Layout from "../components/layout/layout";
import HeroPricing from "../components/hero_pricing";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import { Container, Row, Col } from 'reactstrap'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { Slider } from "@rmwc/slider";
import '@material/slider/dist/mdc.slider.css';
import Brands from '../components/brands';

const Pricing = () => (
  <div className="pricing">
    <Head>
      <title>Pricing | imAGINE</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Layout>
      <HeroPricing />

      <div className="membership">
      	<Container>
      		<Row>
      			<Col className="text-center">
      				<h3>Simple pricing with no setup fees</h3>
      				<p className="description">Use the slider below to estimate your contacts</p>
      			</Col>
      		</Row>
      		<Row>
				<Col className="text-center px-5">
					<div className="contacts">
						<h5>How many contacts do you have?</h5>
						<hr />
						<h1>500</h1>
						Contacts
						<Slider
								onInput={evt => console.log(evt)}
								onChange={evt => console.log(evt)}
								discrete
								step={1}
								max={100}
							/>
						<hr />
						Paid: Monthly / Annually (Save 15%)
					</div>
				</Col>
      			<Col className="text-center">
      				<div className="level">
      					<div className="box">
      						<p className="name"><strong>Starter</strong></p>
      						<div className="price">$13.99</div>
      						<p className="monthly">Billed Monthly</p>
      						<hr />
      					</div>
      					<div className="member-services">
      						<p>10 Participants</p>
      						<ul>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Web Audio
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Screen Sharing
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Unlimited
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Web Audio
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Screen Sharing
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Unlimited
      							</li>
      						</ul>
      						<Link href="/"><a className="btn line-btn">Get started</a></Link>
      					</div>
      				</div>
      			</Col>

      			<Col className="text-center">
      				<div className="level professional">
					  <div className="box">
      						<p className="name"><strong>Professional</strong></p>
      						<div className="price">$23.99</div>
      						<p className="monthly">Billed Monthly</p>
      						<hr />
      					</div>
      					<div className="member-services">
      						<p>20 Participants</p>
      						<ul>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Web Audio
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Screen Sharing
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Unlimited
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Web Audio
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Screen Sharing
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Unlimited
      							</li>
      						</ul>
      						<Link href="/"><a className="btn fill-btn">Get started</a></Link>
      					</div>
      				</div>
      			</Col>

      			<Col className="text-center">
      				<div className="level">
					  <div className="box">
      						<p className="name"><strong>Plus</strong></p>
      						<div className="price">$53.99</div>
      						<p className="monthly">Billed Annually</p>
      						<hr />
      					</div>
      					<div className="member-services">
      						<p>50 Participants</p>
      						<ul>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Web Audio
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Screen Sharing
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Unlimited
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Web Audio
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Screen Sharing
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Unlimited
      							</li>
      						</ul>
      						<Link href="/"><a className="btn line-btn">Get started</a></Link>
      					</div>
      				</div>
      			</Col>

      			<Col className="text-center">
      				<div className="level">
						<div className="box">
      						<p className="name"><strong>Enterprise</strong></p>
      						<div className="contact">Contact us to learn how imAGINE can drive productivity</div>
      						<hr />
      					</div>
      					<div className="member-services">
      						<p>Up to 2000 Partis</p>
      						<ul>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Web Audio
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Screen Sharing
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Unlimited
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Web Audio
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Screen Sharing
      							</li>
      							<li>
      								<FontAwesomeIcon icon={faCheck} className="awesome-font" className="awesome-font" /> &nbsp;&nbsp;Unlimited
      							</li>
      						</ul>
      						<Link href="/"><a className="btn line-btn">Get started</a></Link>
      					</div>
      				</div>
      			</Col>
      		</Row>
      	</Container>
      </div>

      <div className="eligibility">
      	<Container>
      		<Row>
      			<Col className="text-center">
      				<h3>Why should I use ...?</h3>
      				<p className="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      				<Link href="/"><a className="btn fill-btn">Compare credit cards</a></Link>
      			</Col>
      		</Row>
      		<Accordion className="accordion mt-5">
      			<AccordionItem>
	                <AccordionItemHeading>
	                    <AccordionItemButton>
	                        Lorem ipsum dolor sit amet
	                    </AccordionItemButton>
	                </AccordionItemHeading>
	                <AccordionItemPanel>
	                    <p>
	                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
	                    </p>
	                </AccordionItemPanel>
	            </AccordionItem>
	            <AccordionItem>
	                <AccordionItemHeading>
	                    <AccordionItemButton>
	                        What harsh truths do you prefer to ignore?
	                    </AccordionItemButton>
	                </AccordionItemHeading>
	                <AccordionItemPanel>
	                    <p>
	                        Exercitation in fugiat est ut ad ea cupidatat ut in
	                        cupidatat occaecat ut occaecat consequat est minim minim
	                        esse tempor laborum consequat esse adipisicing eu
	                        reprehenderit enim.
	                    </p>
	                </AccordionItemPanel>
	            </AccordionItem>
	            <AccordionItem>
	                <AccordionItemHeading>
	                    <AccordionItemButton>
	                        Is free will real or just an illusion?
	                    </AccordionItemButton>
	                </AccordionItemHeading>
	                <AccordionItemPanel>
	                    <p>
	                        In ad velit in ex nostrud dolore cupidatat consectetur
	                        ea in ut nostrud velit in irure cillum tempor laboris
	                        sed adipisicing eu esse duis nulla non.
	                    </p>
	                </AccordionItemPanel>
	            </AccordionItem>
        	</Accordion>
      	</Container>
      </div>

	  <Brands />
      <DemoRequest />
    </Layout>
  </div>
)

export default Pricing
