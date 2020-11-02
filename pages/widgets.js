import React, { useState } from 'react'
import Head from 'next/head'

import Layout from "../components/layout/layout";
import HeroWidgets from "../components/hero_widgets";
import Brands from "../components/brands";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import Link from 'next/link'

import feature03 from "../public/images/feature03.svg"
import feature01 from "../public/images/energy-energy.svg"
import feature02 from "../public/images/home-insurance.svg"

import widget01 from "../public/images/widgets/enca-1.png"
import widget02 from "../public/images/widgets/rss-feed-1.png"
import widget03 from "../public/images/widgets/weather-1.png"
import widget04 from "../public/images/widgets/website-1.png"

import { Row, Col, Container, Input, Label } from 'reactstrap';

import Lottie from 'react-lottie';
import * as starsLottie from '../public/animations/coming-soon.json'

const Widgets = () => {

	const [gaegae, setGaegae] = useState('');
	const [nongam, setNongam] = useState('All');

	const starsLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: starsLottie.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
	};
	
	const app_list = [
		{
			url: "/widget/ecna/",
			img: widget01,
			name: "ECNA news",
			tag: "Social Media",
			description: "Display a selection of the latest news with headlines and images pulled directly from eNCA"
		},
		{
			url: "/widget/rss/",
			img: widget02,
			name: "Rss feed",
			tag: "Social Media",
			description: "Display a selection of the latest news with headlines and images pulled directly from eNCA"
		},
		{
			url: "/widget/weather/",
			img: widget03,
			name: "Weather",
			tag: "Weather",
			description: "Display a selection of the latest news with headlines and images pulled directly from eNCA"
		},
		{
			url: "/widget/website/",
			img: widget04,
			name: "Website",
			tag: "Website",
			description: "Display a selection of the latest news with headlines and images pulled directly from eNCA"
		},
		{
			url: "/widget/rss/",
			img: widget02,
			name: "Rss feed",
			tag: "Social Media",
			description: "Display a selection of the latest news with headlines and images pulled directly from eNCA"
		},
		{
			url: "/widget/weather/",
			img: widget03,
			name: "Weather",
			tag: "Weather",
			description: "Display a selection of the latest news with headlines and images pulled directly from eNCA"
		},
		{
			url: "/widget/website/",
			img: widget04,
			name: "Website",
			tag: "Website",
			description: "Display a selection of the latest news with headlines and images pulled directly from eNCA"
		},
		{
			url: "/widget/ecna/",
			img: widget01,
			name: "ECNA news",
			tag: "Social Media",
			description: "Display a selection of the latest news with headlines and images pulled directly from eNCA"
		}
	]

	const [filtered, setFiltered] = useState(app_list);

	const onSearch = (value) =>  {
		setGaegae(value)
		//console.log(value)

		let filtered_app_list = app_list.filter(
			(item) => {
				if (nongam === "All") {
					if (value !=='')
						return (String(item["name"]).toLowerCase().indexOf(value.toLowerCase()) !== -1)
					else return app_list
				}
				else {
					if (value !=='')
						return (String(item["tag"]).toLowerCase().indexOf(nongam.toLowerCase()) !== -1 && String(item["name"]).toLowerCase().indexOf(value.toLowerCase()) !== -1)
					else return (String(item["tag"]).toLowerCase().indexOf(nongam.toLowerCase()) !== -1)
				}
			}
		);
		
		setFiltered(filtered_app_list)
	}

	const onFilter = (value) => {
		setNongam(value)
		//console.log(value)

		let filtered_app_list = app_list.filter(
			(item) => {
				if (value === "All") {
					if (gaegae !=='')
						return (String(item["name"]).toLowerCase().indexOf(gaegae.toLowerCase()) !== -1 )
					else return app_list
				}
				else {
					if (gaegae !=='')
						return (String(item["name"]).toLowerCase().indexOf(gaegae.toLowerCase()) !== -1 && String(item["tag"]).toLowerCase().indexOf(value.toLowerCase()) !== -1 )
					else return (String(item["tag"]).toLowerCase().indexOf(value.toLowerCase()) !== -1)
				}
			}
		);
		
		setFiltered(filtered_app_list)
	}

  return (
  <div className="widgets">
    <Head>
      <title>Widgets | imGINE</title>
    </Head>

    <Layout>
      
      <HeroWidgets />
      <Brands />

		<div className="free">
			<Container className="text-center">
				<h3 className="text-center py-3">Free Widgets</h3>
				<p>These widgets are included with your imAGINE subscription and available to all users.</p>
				<div className="filter pt-5">
					<Row>
						<Col md={{ offset: 1, size: 1 }} className="text-right"><Label for="category" className="py-2">Categories</Label></Col>
						<Col md="3">
							<Input type="select" name="select" id="category" onChange={(e)=> onFilter(e.target.value)}>
								<option>All</option>
								<option>Social Media</option>
								<option>Weather</option>
								<option>Website</option>
							</Input>
						</Col>
						<Col md={{ offset: 2, size: 1 }} className="text-right py-2"><Label for="Search">Search</Label></Col>
						<Col md="3">
						<Input
							type="search"
							name="search"
							id="Search"
							value={gaegae}
							onChange={(e) => onSearch(e.target.value)}
							placeholder="Search Apps"
						/>
						</Col>
					</Row>
				</div>
				
				<div className="app-list">
				{
					filtered.map( (item, id) =>(
						<div className="widget-box" key={id}>
							<Link href={item["url"]}><a>
							<Row>
								<Col><img src={item["img"]} alt="image" /></Col>
								<Col className="title">
									<div className="name">{item["name"]}</div>
									<div className="tag">{item["tag"]}</div>
								</Col>
							</Row>
							<Row>
								<Col className="text-left">
									<div className="description">{item["description"]}</div>
								</Col>
							</Row>
							</a></Link>
						</div>
				))}
				</div>

				{/*<Row className="my-4">
					<Col>
						<div className="widget-box-new">
							<Link href="/widget/ecna/"><a>

								<img src={widget01} alt="image" />
								<div className="name">ECNA news</div>
								<div className="tag">Social Media</div>
								<div className="description">Display a selection of the latest news with headlines and images pulled directly from eNCA</div>

							</a></Link>
						</div>
					</Col>
					<Col>
						<div className="widget-box-new">
							<Link href="/widget/ecna/"><a>

								<img src={widget01} alt="image" />
								<div className="name">ECNA news</div>
								<div className="tag">Social Media</div>
								<div className="description">Display a selection of the latest news with headlines and images pulled directly from eNCA</div>

							</a></Link>
						</div>
					</Col>
					<Col>
						<div className="widget-box-new">
							<Link href="/widget/ecna/"><a>

								<img src={widget01} alt="image" />
								<div className="name">ECNA news</div>
								<div className="tag">Social Media</div>
								<div className="description">Display a selection of the latest news with headlines and images pulled directly from eNCA</div>

							</a></Link>
						</div>
					</Col>
					<Col>
						<div className="widget-box-new">
							<Link href="/widget/ecna/"><a>

								<img src={widget01} alt="image" />
								<div className="name">ECNA news</div>
								<div className="tag">Social Media</div>
								<div className="description">Display a selection of the latest news with headlines and images pulled directly from eNCA</div>

							</a></Link>
						</div>
					</Col>
  </Row>*/}
				{/*<Row className="my-4">
					<Col>
						<div className="widget-box">
							<Link href="/widget/ecna/"><a>
							<Row>
								<Col><img src={widget01} alt="image" /></Col>
								<Col className="title">
									<div className="name">ECNA news</div>
									<div className="tag">Social Media</div>
								</Col>
							</Row>
							<Row>
								<Col className="text-left">
									<div className="description">Display a selection of the latest news with headlines and images pulled directly from eNCA</div>
								</Col>
							</Row>
							</a></Link>
						</div>
					</Col>
					<Col>
						<div className="widget-box">
							<Link href="/widget/rss/"><a>
							<Row>
								<Col><img src={widget02} alt="image" /></Col>
								<Col className="title">
									<div className="name">Rss feed</div>
									<div className="tag">Social Media</div>
								</Col>
							</Row>
							<Row>
								<Col className="text-left">
									<div className="description">Display a selection of the latest news with headlines and images pulled directly from eNCA</div>
								</Col>
							</Row>
							</a></Link>
						</div>
					</Col>
					<Col>
						<div className="widget-box">
						<Link href="/widget/weather/"><a>
							<Row>
								<Col><img src={widget03} alt="image" /></Col>
								<Col className="title">
									<div className="name">Weather</div>
									<div className="tag">Social Media</div>
								</Col>
							</Row>
							<Row>
								<Col className="text-left">
									<div className="description">Display a selection of the latest news with headlines and images pulled directly from eNCA</div>
								</Col>
							</Row>
						</a></Link>
						</div>
					</Col>
					<Col>
						<div className="widget-box">
							<Link href="/widget/website/"><a>
							<Row>
								<Col><img src={widget04} alt="image" /></Col>
								<Col className="title">
									<div className="name">Website</div>
									<div className="tag">Social Media</div>
								</Col>
							</Row>
							<Row>
								<Col className="text-left">
									<div className="description">Display a selection of the latest news with headlines and images pulled directly from eNCA</div>
								</Col>
							</Row>
							</a></Link>
						</div>
					</Col>
				</Row>
				<Row className="my-4">
					<Col>
						<div className="widget-box">
							<Link href="/widget/ecna/"><a>
							<Row>
								<Col><img src={widget01} alt="image" /></Col>
								<Col className="title">
									<div className="name">ECNA news</div>
									<div className="tag">Social Media</div>
								</Col>
							</Row>
							<Row>
								<Col className="text-left">
									<div className="description">Display a selection of the latest news with headlines and images pulled directly from eNCA</div>
								</Col>
							</Row>
							</a></Link>
						</div>
					</Col>
					<Col>
						<div className="widget-box">
							<Link href="/widget/rss/"><a>
							<Row>
								<Col><img src={widget02} alt="image" /></Col>
								<Col className="title">
									<div className="name">Rss feed</div>
									<div className="tag">Social Media</div>
								</Col>
							</Row>
							<Row>
								<Col className="text-left">
									<div className="description">Display a selection of the latest news with headlines and images pulled directly from eNCA</div>
								</Col>
							</Row>
							</a></Link>
						</div>
					</Col>
					<Col>
						<div className="widget-box">
						<Link href="/widget/weather/"><a>
							<Row>
								<Col><img src={widget03} alt="image" /></Col>
								<Col className="title">
									<div className="name">Weather</div>
									<div className="tag">Social Media</div>
								</Col>
							</Row>
							<Row>
								<Col className="text-left">
									<div className="description">Display a selection of the latest news with headlines and images pulled directly from eNCA</div>
								</Col>
							</Row>
						</a></Link>
						</div>
					</Col>
					<Col>
						<div className="widget-box">
							<Link href="/widget/website/"><a>
							<Row>
								<Col><img src={widget04} alt="image" /></Col>
								<Col className="title">
									<div className="name">Website</div>
									<div className="tag">Social Media</div>
								</Col>
							</Row>
							<Row>
								<Col className="text-left">
									<div className="description">Display a selection of the latest news with headlines and images pulled directly from eNCA</div>
								</Col>
							</Row>
							</a></Link>
						</div>
					</Col>
</Row>*/}
			</Container>
		</div>

		<div className="premium text-center">
			<Container>
				<h3 className="text-center py-3">Premium Widgets</h3>
				<p>These widgets are included with your imAGINE subscription and available to all users.</p>
				<Row className="my-4">
					<Col>
						<Lottie options={starsLottieOptions}
						width={300} className="lottie-coming-soon" />
					</Col>
				</Row>
			</Container>
		</div>

      <DemoRequest />
    </Layout>
  </div>
)}

export default Widgets
