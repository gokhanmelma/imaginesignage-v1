import React, { useState } from 'react'
import Head from 'next/head'

import Layout from "../components/layout/layout";
import HeroCompany from "../components/hero_company";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import Link from 'next/link'

import Inka from "../public/images/reviews/Inka.png"
import management from "../public/images/reviews/101-management.png"
import rhg from "../public/images/reviews/rhg.png"

import { Row, Col, Container } from 'reactstrap';

//import classnames from 'classnames';

const Clients = ({data}) => {
	const images = [Inka, management, rhg]

	let boolNumber = false

	const boolHandle = () => {
		var classname
		if (boolNumber)
		{
			boolNumber = false
			classname = "reviews"
		}
		else
		{
			boolNumber = true
			classname = "reviews back-white"
		}
		
		return classname
	}

  return (
  <div className="clients">
    <Head>
      <title>Clients | imAGINE</title>
    </Head>

    <Layout>

    <HeroCompany />
	
	{
	Object.keys(data).map( (key) => (
		<div className={boolHandle()} key={key}>
			<Container>
			<h3 className="text-center">{key}</h3>
			<Row>
				{data[key].map((item, idx) => (
					<Col className="review" key={idx}>
						<div className="company-logo">
						<img src={images[idx]} alt="Inka logo" />
						</div>
						<div className="quote">{item.quote}</div>
						<div className="stars">{item.stars}</div>
						<div className="company-name">{item["company-name"]}</div>
						<div className="man-name">{item["man-name"]}</div>
						<div className="man-position">{item["man-position"]}</div>
					</Col>
				))}
			</Row>
			</Container>
		</div>
	))}

    <DemoRequest />
    </Layout>
  </div>
)}


Clients.getInitialProps = async () => {
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
  
	//let return_data = json[query.slug]
	return { data: json }
  }

export default Clients
