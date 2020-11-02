import Link from 'next/link'
import { Col, Row, Container } from 'reactstrap'
import UseAnimations from 'react-useanimations'

import logo from "../../public/images/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <footer>
  	<div className="top">
    <Container>
    	<Row>
            <Col md="3">
                <img src={logo} alt="imaginesignage company logo" />
                <ul className="footer-social">
                    <li>
                        <Link href="/"><a><UseAnimations animationKey="facebook" size={32} className="social-icon" /></a></Link>
                    </li>
                    <li>
                        <Link href="/"><a><UseAnimations animationKey="linkedin" size={32} className="social-icon" /></a></Link>
                    </li>
                    <li>
                        <Link href="/"><a><UseAnimations animationKey="twitter" size={32} className="social-icon" /></a></Link>
                    </li>
                    <li>
                        <Link href="/"><a><UseAnimations animationKey="instagram" size={32} className="social-icon" /></a></Link>
                    </li>
                </ul>
            </Col>
    		<Col md="2">
    			<h5>Company</h5>
    			<ul>
    				<li>
    					<Link href="/partners"><a>Partners</a></Link>
    				</li>
    				<li>
    					<Link href="/clients"><a>Clients</a></Link>
    				</li>
    				<li>
    					<Link href="/about"><a>About Us</a></Link>
    				</li>
    				<li>
    					<Link href="/contact"><a>Contact Us</a></Link>
    				</li>
    			</ul>
    		</Col>
    		<Col md="2">
    			<h5>Industries</h5>
    			<ul>
    				<li>
    					<Link href="/industries/retail"><a>Retail</a></Link>
    				</li>
    				<li>
    					<Link href="/industries/restaurants"><a>Restaurants</a></Link>
    				</li>
    				<li>
    					<Link href="/industries/education"><a>Education</a></Link>
    				</li>
    				<li>
    					<Link href="/industries/coporate"><a>Coporate</a></Link>
    				</li>
                    <li>
    					<Link href="/industries/healthcare"><a>Healthcare</a></Link>
    				</li>
                    <li>
    					<Link href="/industries/casino"><a>Casino</a></Link>
    				</li>
                    <li>
    					<Link href="/industries/hospitality"><a>Hospitality</a></Link>
    				</li>
                    <li>
    					<Link href="/industries/outdoor"><a>Outdoor</a></Link>
    				</li>
    			</ul>
    		</Col>
    		<Col md="5">
    			<h5>Address</h5>
    			<ul className="footer-address">
                    <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> 
                        Trident Park 2,
                        1 Niblick Way, Firgrove Rural,<br />
                        Cape Town, 7130
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelopeOpen} className="icon" />
                        support@imaginesignage.com
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPhone} className="icon" /> 
                        +27 21 851 0119
                    </li>
                </ul>
    		</Col>
    	</Row>
    </Container>
    </div>

    <Container>
        <hr />
    </Container>

    <div className="bottom">
    <Container>
    	<Row>
    		<Col>
    			<div className="copyright">Copyright © 2019 Imagine Signage. All Rights Reserved.</div>
    		</Col>
            <Col className="text-right">
                <div className="terms">
                    <Link href="/privacy"><a>Privacy Policy</a></Link> | <Link href="/terms"><a>Terms & Condition</a></Link>
                </div>
            </Col>
    	</Row>
    </Container>
    </div>
  </footer>
);

export default Footer;