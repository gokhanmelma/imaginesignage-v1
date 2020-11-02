import React, { useState } from 'react'
import Head from 'next/head'

import Layout from "../components/layout/layout";
import Hero from "../components/hero";
import Brands from "../components/brands";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import Link from 'next/link'

import Inka from "../public/images/reviews/Inka.png"
import management from "../public/images/reviews/101-management.png"
import rhg from "../public/images/reviews/rhg.png"

import img_gallery_1 from "../public/images/img_gallery_1.jpg"
import img_gallery_7 from "../public/images/img_gallery_7.jpg"

import img_hardware_1 from "../public/images/hardwares/img_hardware_1.jpg"
import img_hardware_2 from "../public/images/hardwares/img_hardware_2.jpg"
import img_hardware_3 from "../public/images/hardwares/img_hardware_3.jpg"
import img_hardware_4 from "../public/images/hardwares/img_hardware_4.jpg"

import feature03 from "../public/images/feature03.svg"

import energy from "../public/images/energy-energy.svg"
import insurance from "../public/images/home-insurance.svg"
import card from "../public/images/money-credit-cards.svg"

import instagram from "../public/images/instagram.png"
import rss from "../public/images/rss.png"
import orangeTxt from "../public/images/txt5.jpg"

import { Row, Col, Container } from 'reactstrap';

// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from 'react-accessible-accordion';
// import 'react-accessible-accordion/dist/fancy-example.css';

import Lottie from 'react-lottie';
import * as starsLottie from '../public/animations/stars.json'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'

const Industries = ({data}) => {
  const starsLottieOptions = {
    loop: true,
    autoplay: true, 
    animationData: starsLottie.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const images = [Inka, management, rhg]

  return (
  <div className="industries">
    <Head>
      <title>Industries | imGINE</title>
    </Head>

    <Layout>
      
      <div className="industry-hero">
        <h1 className="text-center">Retail</h1>
      </div>
      <Brands />
{/*
      <div className="benefits">
        <Container>
          <h3 className="text-center">imAGINE Benefits for Restaurants</h3>
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
</div>*/}
      <div className="core-features">
        <Container>
          <Row>
            <Col className="text-center">
              <h3>Core features</h3>
              <p>Over 50 ways to help you Get Money Calm, from banking to insurance</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <img src={energy} alt="description" />
              <h4>Features</h4>
              <p>Our Eligibility Checker tool lets you look for a card without harming your credit file</p>
              <div>
                <Link href="/"><a className="btn fill-btn">See more</a></Link>
              </div>
            </Col>
            <Col className="text-center">
              <img src={insurance} alt="description" />
              <h4>Features</h4>
              <p>Our Eligibility Checker tool lets you look for a card without harming your credit file</p>
              <div>
                <Link href="/"><a className="btn fill-btn">See more</a></Link>
              </div>
            </Col>
            <Col className="text-center">
              <img src={card} alt="description" />
              <h4>Features</h4>
              <p>Our Eligibility Checker tool lets you look for a card without harming your credit file</p>
              <div>
                <Link href="/"><a className="btn fill-btn">See more</a></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="score">
        <Container>
          <Row>
            <Col>
              <h3>
              You name it, we display it!
              </h3>
              <div className="description">
              We cover all popular image and video formats, including PDFs, PowerPoint files, and dynamic update-able content via URL, RSS, XML, or video streams. If that’s not enough, our range of free widgets will get you started right away.<br/><br/>
              And don’t forget about our MP3 playlist creator or our multiple channel online radio stream to audibly connect with your customers.
              </div>
              <Link href="/"><a className="btn fill-btn">Get my score</a></Link>
            </Col>
              
            <Col className="text-center">
              <img src={feature03} alt="image" />
            </Col>
          </Row>
        </Container>
      </div>
      
      <div className="features-apps">
        <Container>
          <h3 className="text-center">Features and Apps</h3>
          <Row>
            <Col md="2" className="pt-5">
              <a>
                <div className="icon text-center">
                  <img src={instagram} alt="image" className="icon-image" />
                  <p className="name">Traffic</p>
                </div>
              </a>
              <a>
                <div className="icon text-center">
                  <img src={instagram} alt="image" className="icon-image" />
                  <p className="name">Traffic</p>
                </div>
              </a>
              <a>
                <div className="icon text-center">
                  <img src={instagram} alt="image" className="icon-image" />
                  <p className="name">Traffic</p>
                </div>
              </a>
            </Col>
            <Col md="8" className="show">
              <img src={img_gallery_1} alt="image" className="show-img" />
              <img src={orangeTxt} alt="image" className="square-img" />
              <div className="text">
                <h4 className="mt-2 mb-3">ECNA News</h4>
                <p className="description">Sync your Google Calendar accounts 
                to show upcoming events on your displays for meeting rooms, conferences, and more. Customize your screens with 
                Single Calendar and Overview Modes, and add your own color themes.</p>
              </div>
            </Col>
            <Col md="2" className="pt-5">
              <a>
                <div className="icon text-center">
                  <img src={rss} alt="image" className="icon-image" />
                  <p className="name">Weather</p>
                </div>
              </a>
              <a>
                <div className="icon text-center">
                  <img src={rss} alt="image" className="icon-image" />
                  <p className="name">Weather</p>
                </div>
              </a>
              <a>
                <div className="icon text-center">
                  <img src={rss} alt="image" className="icon-image" />
                  <p className="name">Weather</p>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="hardwares">
        <Container>
          <h3 className="text-center">Recommended menu hardware</h3>
          <Row>
            <Col>
              <Row className="hardware-block">
                <img src={img_hardware_1} alt="image" />
                <div className="pl-3 pt-3">
                  <div className="name">BV-88</div>
                  <div className="title">Enterprise Media Player</div>
                </div>
              </Row>
            </Col>
            <Col>
              <Row className="hardware-block">
                <img src={img_hardware_2} alt="image" />
                <div className="pl-3 pt-3">
                  <div className="name">BV-88</div>
                  <div className="title">Enterprise Media Player</div>
                </div>
              </Row>
            </Col>
            <Col>
              <Row className="hardware-block">
                <img src={img_hardware_3} alt="image" />
                <div className="pl-3 pt-3">
                  <div className="name">BV-88</div>
                  <div className="title">Enterprise Media Player</div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="case-studies">
        <Container>
          <h3 className="text-center">Case Studies</h3>
          <Row>
            <Col>
              <div className="blog-block">
                <img src={img_gallery_1} alt="image" />
                <div className="category"><FontAwesomeIcon icon={faTags} className="font-icon" /> Retail</div>
                <div className="title">Digital Signage Enables Much-Loved Luxury Beauty Retail Chain Cos Bar to Create a High-End In-Store Experience</div>
                <div className="more-btn">Read more ></div>
              </div>
            </Col>
            <Col>
              <div className="blog-block">
                <img src={img_gallery_7} alt="image" />
                <div className="category"><FontAwesomeIcon icon={faTags} className="font-icon" /> Retail</div>
                <div className="title">Digital Signage Enables Much-Loved Luxury Beauty Retail Chain Cos Bar to Create a High-End In-Store Experience</div>
                <div className="more-btn">Read more ></div>
              </div>
            </Col>
            <Col>
              <div className="blog-block">
                <img src={img_gallery_1} alt="image" />
                <div className="category"><FontAwesomeIcon icon={faTags} className="font-icon" /> Retail</div>
                <div className="title">Digital Signage Enables Much-Loved Luxury Beauty Retail Chain Cos Bar to Create a High-End In-Store Experience</div>
                <div className="more-btn">Read more ></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="reviews back-white">
        <Container>
          <h3 className="text-center">Customer Reviews</h3>
          <Lottie options={starsLottieOptions}
					height={65}
					width={200} />

          <Row>
            {data.map( (p, index) => (
              <Col className="review" key={index}>
                <div className="company-logo">
                  <img src={images[index]} alt="Inka logo" />
                </div>
                <div className="quote">{p.quote}</div>
                <div className="stars">{p.stars}</div>
                <div className="company-name">{p["company-name"]}</div>
                <div className="man-name">{p["man-name"]}</div>
                <div className="man-position">{p["man-position"]}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <DemoRequest />
      <SliderFlow />
    </Layout>
  </div>
)}

Industries.getInitialProps = async ({ query }) => {
  const json = {
    "retail":
    [
      {
      "company-logo": "../public/images/reviews/Inka.png",
      "quote": '"Both customers and staff love seeing their posts on the screen along with posts from other locations, helping to link our brand across our nationwide locations."',
      "stars": "★★★★★",
      "company-name": "INKA FRANCHISE CORP",
      "man-name": "HECTOR CABRAL",
      "man-position": "Executive Director"
      },
      {
        "company-logo": "../public/images/reviews/Inka.png",
        "quote": '"Both customers and staff love seeing their posts on the screen along with posts from other locations, helping to link our brand across our nationwide locations."',
        "stars": "★★★★★",
        "company-name": "INKA FRANCHISE CORP",
        "man-name": "HECTOR CABRAL",
        "man-position": "Executive Director"
      },
      {
        "company-logo": "../public/images/reviews/Inka.png",
        "quote": '"Both customers and staff love seeing their posts on the screen along with posts from other locations, helping to link our brand across our nationwide locations."',
        "stars": "★★★★★",
        "company-name": "INKA FRANCHISE CORP",
        "man-name": "HECTOR CABRAL",
        "man-position": "Executive Director"
      }
    ],
    "restaurants":
    [
      {
      "company-logo": "../public/images/reviews/Inka.png",
      "quote": '"Both customers and staff love seeing their posts on the screen along with posts from other locations, helping to link our brand across our nationwide locations."',
      "stars": "★★★★★",
      "company-name": "INKA FRANCHISE CORP",
      "man-name": "HECTOR CABRAL",
      "man-position": "Executive Director"
      },
      {
        "company-logo": "../public/images/reviews/Inka.png",
        "quote": '"Both customers and staff love seeing their posts on the screen along with posts from other locations, helping to link our brand across our nationwide locations."',
        "stars": "★★★★★",
        "company-name": "INKA FRANCHISE CORP",
        "man-name": "HECTOR CABRAL",
        "man-position": "Executive Director"
      },
      {
        "company-logo": "../public/images/reviews/Inka.png",
        "quote": '"Both customers and staff love seeing their posts on the screen along with posts from other locations, helping to link our brand across our nationwide locations."',
        "stars": "★★★★★",
        "company-name": "INKA FRANCHISE CORP",
        "man-name": "HECTOR CABRAL",
        "man-position": "Executive Director"
      }
    ],
    "education":
    [
      {
        "company-logo": "../public/images/reviews/management.png",
        "quote": '"imAGINE has been a saving grace for keeping our guests informed, entertained, and involved in what we do every day. From social media posts, and marketing & advertising for our events and from our sponsors, imAGINE has enabled us to reach out to our guests personally and highlight what we can offer when we want to offer it."',
        "stars": "★★★★",
        "company-name": "101 MANAGEMENT GROUP",
        "man-name": "ANTHONY THOMAS",
        "man-position": "Chief Operating Officer"
      },
      {
        "company-logo": "../public/images/reviews/management.png",
        "quote": '"imAGINE has been a saving grace for keeping our guests informed, entertained, and involved in what we do every day. From social media posts, and marketing & advertising for our events and from our sponsors, imAGINE has enabled us to reach out to our guests personally and highlight what we can offer when we want to offer it."',
        "stars": "★★★★",
        "company-name": "101 MANAGEMENT GROUP",
        "man-name": "ANTHONY THOMAS",
        "man-position": "Chief Operating Officer"
      },
      {
        "company-logo": "../public/images/reviews/management.png",
        "quote": '"imAGINE has been a saving grace for keeping our guests informed, entertained, and involved in what we do every day. From social media posts, and marketing & advertising for our events and from our sponsors, imAGINE has enabled us to reach out to our guests personally and highlight what we can offer when we want to offer it."',
        "stars": "★★★★",
        "company-name": "101 MANAGEMENT GROUP",
        "man-name": "ANTHONY THOMAS",
        "man-position": "Chief Operating Officer"
      }
    ],
    "corporate":
    [
      {
      "company-logo": "../public/images/reviews/Inka.png",
      "quote": '"Both customers and staff love seeing their posts on the screen along with posts from other locations, helping to link our brand across our nationwide locations."',
      "stars": "★★★★★",
      "company-name": "INKA FRANCHISE CORP",
      "man-name": "HECTOR CABRAL",
      "man-position": "Executive Director"
      },
      {
        "company-logo": "../public/images/reviews/Inka.png",
        "quote": '"Both customers and staff love seeing their posts on the screen along with posts from other locations, helping to link our brand across our nationwide locations."',
        "stars": "★★★★★",
        "company-name": "INKA FRANCHISE CORP",
        "man-name": "HECTOR CABRAL",
        "man-position": "Executive Director"
      },
      {
        "company-logo": "../public/images/reviews/Inka.png",
        "quote": '"Both customers and staff love seeing their posts on the screen along with posts from other locations, helping to link our brand across our nationwide locations."',
        "stars": "★★★★★",
        "company-name": "INKA FRANCHISE CORP",
        "man-name": "HECTOR CABRAL",
        "man-position": "Executive Director"
      }
    ],
    "hospitality":
    [
      {
        "company-logo": "../public/images/reviews/management.png",
        "quote": '"imAGINE has been a saving grace for keeping our guests informed, entertained, and involved in what we do every day. From social media posts, and marketing & advertising for our events and from our sponsors, imAGINE has enabled us to reach out to our guests personally and highlight what we can offer when we want to offer it."',
        "stars": "★★★★",
        "company-name": "101 MANAGEMENT GROUP",
        "man-name": "ANTHONY THOMAS",
        "man-position": "Chief Operating Officer"
      },
      {
        "company-logo": "../public/images/reviews/management.png",
        "quote": '"imAGINE has been a saving grace for keeping our guests informed, entertained, and involved in what we do every day. From social media posts, and marketing & advertising for our events and from our sponsors, imAGINE has enabled us to reach out to our guests personally and highlight what we can offer when we want to offer it."',
        "stars": "★★★★",
        "company-name": "101 MANAGEMENT GROUP",
        "man-name": "ANTHONY THOMAS",
        "man-position": "Chief Operating Officer"
      },
      {
        "company-logo": "../public/images/reviews/management.png",
        "quote": '"imAGINE has been a saving grace for keeping our guests informed, entertained, and involved in what we do every day. From social media posts, and marketing & advertising for our events and from our sponsors, imAGINE has enabled us to reach out to our guests personally and highlight what we can offer when we want to offer it."',
        "stars": "★★★★",
        "company-name": "101 MANAGEMENT GROUP",
        "man-name": "ANTHONY THOMAS",
        "man-position": "Chief Operating Officer"
      }
    ],
    "healthcare":
    [
      {
        "company-logo": "../public/images/reviews/management.png",
        "quote": '"imAGINE has been a saving grace for keeping our guests informed, entertained, and involved in what we do every day. From social media posts, and marketing & advertising for our events and from our sponsors, imAGINE has enabled us to reach out to our guests personally and highlight what we can offer when we want to offer it."',
        "stars": "★★★★",
        "company-name": "101 MANAGEMENT GROUP",
        "man-name": "ANTHONY THOMAS",
        "man-position": "Chief Operating Officer"
      },
      {
        "company-logo": "../public/images/reviews/management.png",
        "quote": '"imAGINE has been a saving grace for keeping our guests informed, entertained, and involved in what we do every day. From social media posts, and marketing & advertising for our events and from our sponsors, imAGINE has enabled us to reach out to our guests personally and highlight what we can offer when we want to offer it."',
        "stars": "★★★★",
        "company-name": "101 MANAGEMENT GROUP",
        "man-name": "ANTHONY THOMAS",
        "man-position": "Chief Operating Officer"
      },
      {
        "company-logo": "../public/images/reviews/management.png",
        "quote": '"imAGINE has been a saving grace for keeping our guests informed, entertained, and involved in what we do every day. From social media posts, and marketing & advertising for our events and from our sponsors, imAGINE has enabled us to reach out to our guests personally and highlight what we can offer when we want to offer it."',
        "stars": "★★★★",
        "company-name": "101 MANAGEMENT GROUP",
        "man-name": "ANTHONY THOMAS",
        "man-position": "Chief Operating Officer"
      }
    ],
    "casino":
    [
      {
        "company-logo": "../public/images/reviews/management.png",
        "quote": '"imAGINE has been a saving grace for keeping our guests informed, entertained, and involved in what we do every day. From social media posts, and marketing & advertising for our events and from our sponsors, imAGINE has enabled us to reach out to our guests personally and highlight what we can offer when we want to offer it."',
        "stars": "★★★★",
        "company-name": "101 MANAGEMENT GROUP",
        "man-name": "ANTHONY THOMAS",
        "man-position": "Chief Operating Officer"
      },
      {
        "company-logo": "../public/images/reviews/management.png",
        "quote": '"imAGINE has been a saving grace for keeping our guests informed, entertained, and involved in what we do every day. From social media posts, and marketing & advertising for our events and from our sponsors, imAGINE has enabled us to reach out to our guests personally and highlight what we can offer when we want to offer it."',
        "stars": "★★★★",
        "company-name": "101 MANAGEMENT GROUP",
        "man-name": "ANTHONY THOMAS",
        "man-position": "Chief Operating Officer"
      },
      {
        "company-logo": "../public/images/reviews/management.png",
        "quote": '"imAGINE has been a saving grace for keeping our guests informed, entertained, and involved in what we do every day. From social media posts, and marketing & advertising for our events and from our sponsors, imAGINE has enabled us to reach out to our guests personally and highlight what we can offer when we want to offer it."',
        "stars": "★★★★",
        "company-name": "101 MANAGEMENT GROUP",
        "man-name": "ANTHONY THOMAS",
        "man-position": "Chief Operating Officer"
      }
    ],
    "outdoor":
    [
      {
        "company-logo": "../public/images/reviews/management.png",
        "quote": '"imAGINE has been a saving grace for keeping our guests informed, entertained, and involved in what we do every day. From social media posts, and marketing & advertising for our events and from our sponsors, imAGINE has enabled us to reach out to our guests personally and highlight what we can offer when we want to offer it."',
        "stars": "★★★★",
        "company-name": "101 MANAGEMENT GROUP",
        "man-name": "ANTHONY THOMAS",
        "man-position": "Chief Operating Officer"
      },
      {
        "company-logo": "../public/images/reviews/management.png",
        "quote": '"imAGINE has been a saving grace for keeping our guests informed, entertained, and involved in what we do every day. From social media posts, and marketing & advertising for our events and from our sponsors, imAGINE has enabled us to reach out to our guests personally and highlight what we can offer when we want to offer it."',
        "stars": "★★★★",
        "company-name": "101 MANAGEMENT GROUP",
        "man-name": "ANTHONY THOMAS",
        "man-position": "Chief Operating Officer"
      },
      {
        "company-logo": "../public/images/reviews/management.png",
        "quote": '"imAGINE has been a saving grace for keeping our guests informed, entertained, and involved in what we do every day. From social media posts, and marketing & advertising for our events and from our sponsors, imAGINE has enabled us to reach out to our guests personally and highlight what we can offer when we want to offer it."',
        "stars": "★★★★",
        "company-name": "101 MANAGEMENT GROUP",
        "man-name": "ANTHONY THOMAS",
        "man-position": "Chief Operating Officer"
      }
    ]
  }

  let return_data = json[query.slug]
  return { data: return_data }
}

export default Industries
