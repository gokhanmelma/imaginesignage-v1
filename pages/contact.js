import React from 'react'
import Head from 'next/head'

import Layout from "../components/layout/layout";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import { Row, Col, Container } from 'reactstrap'
import Link from 'next/link'

import instagram from "../public/images/instagram.png"

import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import UseAnimations from 'react-useanimations'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faBriefcase, faCheckCircle, faServer, faGlobeAfrica, faComments, faPaste, faNewspaper } from '@fortawesome/free-solid-svg-icons'

// DAVENPORT SQUARE
// 24a, 2nd Floor, Trident Park III, 1 Niblick Way, Somerset West, Cape Town, South Africa
//-34.087142, 18.820477

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.087, lng: 18.820 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.087, lng: 18.820 }} />}
  </GoogleMap>
)

const Contact = () => (
  <div className="contact">
    <Head>
      <title>Contact | imAGINE</title>
    </Head>

    <Layout>
      
      <div className="google-map">
	    <MyMapComponent
	        isMarkerShown = { true }
	    />
	  </div>

      <div className="contact-team">
        <Container>
          <Row>
            <Col className="text-center">
            	<h3>Contact the team</h3>
              	<div className="description pt-3">Please use one of the forms below to get in touch. 
				  Please provide as much detail as you can so we can help you Get Money Calm. <br /><br />
				We’ll aim to get back to you within two working days. However, at busy times this may take a little while longer.</div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="what">
        <Container>
            <h4 className="text-center">What do you want to do?</h4>

          <Row className="pt-3">
            <Col>
              <div className="item text-center">
			  	<FontAwesomeIcon icon={faPhoneAlt} className="font-icon" />
              	<div className="name">General enquiry</div>
              </div>
            </Col>
            <Col>
              <div className="item text-center">
			  	<FontAwesomeIcon icon={faBriefcase} className="font-icon" />
              	<div className="name">Insurance enquiry</div>
              </div>
            </Col>
			<Col>
              <div className="item text-center">
			  	<FontAwesomeIcon icon={faCheckCircle} className="font-icon" />
              	<div className="name">Other enquiry</div>
              </div>
            </Col>
          </Row>

          <Row className="mt-3">
		  	<Col>
              <div className="item text-center">
			  	<FontAwesomeIcon icon={faGlobeAfrica} className="font-icon" />
              	<div className="name">Website enquiry</div>
              </div>
            </Col>
			<Col>
              <div className="item text-center">
			  	<FontAwesomeIcon icon={faServer} className="font-icon" />
              	<div className="name">Data enquiry</div>
              </div>
            </Col>
			<Col>
              <div className="item text-center">
			  	<FontAwesomeIcon icon={faComments} className="font-icon" />
              	<div className="name">Make a compliant</div>
              </div>
            </Col>
          </Row>

        </Container>
      </div>

      <div className="otherways">
      	<Container>
			<h4 className="text-center">Other ways to contact us</h4>

      		<Row className="block">
      			<Col md="2" className="px-3 py-3 text-center">
				  	<FontAwesomeIcon icon={faPhoneAlt} className="font-icon" />
      				<div>Call us</div>
      			</Col>
      			<Col md="9" className="p-3">
      				<div>Speak to one of our customer service experts.
						  Please note we are unable to offer you any advice on financial products.</div>
      				<div><code>Lines are open Mon–Fri, from 9am to 5.30pm. Excludes bank holidays.</code></div>
      				<Link href="/"><a>Call 0333 123 1983</a></Link>
      			</Col>
      		</Row>
      		<Row className="block">
      			<Col md="2" className="px-3 py-3 text-center">
				  	<FontAwesomeIcon icon={faPaste} className="font-icon" />
      				<div>Write to us</div>
      			</Col>
      			<Col md="9" className="p-3">
      				<div>Customer services</div>
      				<div><code>imAGINE House, St David's Park, Ewloe Flintshire, CH5 3UZ</code></div>
					<div>Alternatively you can contact our customer services team via email</div>
      				<Link href="/"><a>customerservices@imAGINE.com</a></Link>
      			</Col>
      		</Row>
			  <Row className="block">
      			<Col md="2" className="px-3 py-3 text-center">
				  	<FontAwesomeIcon icon={faNewspaper} className="font-icon" />
      				<div>Call us</div>
      			</Col>
      			<Col md="9" className="p-3">
      				<div>For any media enquiries or images, you can contact our press office team:</div>
      				<div>Email</div>
      				<Link href="/"><a>PressOffice@imAGINE.com</a></Link>
      			</Col>
      		</Row>
      	</Container>
      </div>

      <div className="more-help">
      	<Container>
      		<Row>
      			<Col className="text-center">
	      			<h4>How do I find more help?</h4>
	      			<p>If you need more help, our help center has all the information</p>
	      		</Col>
      		</Row>

      		<Row className="pt-5">
      			<Col className="text-center">
					<h4>Come and say hello</h4>
	      			<p>We'd love to hear from you, via any of these:</p>

	      			<ul className="social">
	    				<li>
	    					<Link href="/"><a><UseAnimations animationKey="facebook" size={50} style={{ "padding": 5 }} className="social-icon"/></a></Link>
	    				</li>
	    				<li>
	    					<Link href="/"><a><UseAnimations animationKey="linkedin" size={50} style={{ "padding": 5 }} className="social-icon"/></a></Link>
	    				</li>
	    				<li>
	    					<Link href="/"><a><UseAnimations animationKey="twitter" size={50} style={{ "padding": 5 }} className="social-icon"/></a></Link>
	    				</li>
	    				<li>
	    					<Link href="/"><a><UseAnimations animationKey="instagram" size={50} style={{ "padding": 5 }} className="social-icon"/></a></Link>
	    				</li>
	    			</ul>
	    		</Col>
      		</Row>
      	</Container>
      </div>

      <DemoRequest />
    </Layout>
  </div>
)

export default Contact
