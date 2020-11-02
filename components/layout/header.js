import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Col, Row, Container } from 'reactstrap'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';

import logo from "../../public/images/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'

import UseAnimations from 'react-useanimations'

var classNames = require('classnames');

const Header = ( props ) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // for the menu change while scrolling down
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      console.log(scroll);
      const scrollCheck = window.scrollY > 400
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
        console.log(scrollCheck);
      }
    })
  })

return (
  <header className={classNames({'header-scroll': scroll})}>
  <div className="top-bar mui-fixed">
  <Container>
  <Row>
    <ul className="col-md-8">
      <li className="item">
        <Link href="/"><a><FontAwesomeIcon icon={faPhone} className="icon" /> +27 21 851 0119</a></Link>
      </li>
      <li className="item">|</li>
      <li className="item">
        <Link href="/"><a><FontAwesomeIcon icon={faEnvelopeOpen} className="icon" /> support@imaginesignage.com</a></Link>
      </li>
      <li className="item">|</li>
      <li className="item">
        <ul className="header-social">
          <li>
              <Link href="/"><a><UseAnimations animationKey="facebook" size={18} className="social-icon" /></a></Link>
          </li>
          <li>
              <Link href="/"><a><UseAnimations animationKey="linkedin" size={18} className="social-icon" /></a></Link>
          </li>
          <li>
              <Link href="/"><a><UseAnimations animationKey="twitter" size={18} className="social-icon" /></a></Link>
          </li>
          <li>
              <Link href="/"><a><UseAnimations animationKey="instagram" size={18} className="social-icon" /></a></Link>
          </li>
        </ul>
      </li>
    </ul>
    <div className="sign-btns col-md-4">
        <Link href="/register/"><a className="btn fill-btn">Sign up</a></Link>
        <Link href="/login/"><a className="btn login-btn">Log in</a></Link>
    </div>
  </Row>
  </Container>
  </div>

  <Container className="mui-fixed">
    <Navbar color="light" light expand="md" >
        <NavbarBrand>
          <Link href="/"><a>
            <img src={logo} alt="imaginesignage logo" />
          </a></Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {/*<Nav className="ml-auto contact" navbar>
            <NavItem>
              <Link href="/features/"><a><FontAwesomeIcon icon={faPhone} className="icon" /> 
                        +27 21 851 0119</a></Link>
            </NavItem>
            <NavItem className="divider-hide">
              |
            </NavItem>
            <NavItem>
              <Link href="/widgets/"><a><FontAwesomeIcon icon={faEnvelopeOpen} className="icon" />
                        support@imaginesignage.com</a></Link>
            </NavItem>
</Nav>*/}

          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link href="/features/"><a>Features</a></Link>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Industries
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link href="/industries/retail/"><a>
                    <div className="mega-menu">
                      <div>Retail</div>
                      <div>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor</div>
                    </div>
                  </a></Link>
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem>
                  <Link href="/industries/restaurants/"><a>
                    <div className="mega-menu">
                      <div>Restaurants</div>
                      <div>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor</div>
                    </div>
                  </a></Link>
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem>
                  <Link href="/industries/education/"><a>Education</a></Link>
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem>
                  <Link href="/industries/corporate/"><a>Corporate</a></Link>
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem>
                  <Link href="/industries/hospitality/"><a>Hospitality</a></Link>
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem>
                  <Link href="/industries/healthcare/"><a>Healthcare</a></Link>
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem>
                  <Link href="/industries/casino/"><a>Casino</a></Link>
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem>
                  <Link href="/industries/outdoor/"><a>Outdoor</a></Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <Link href="/widgets/"><a>Widgets</a></Link>
            </NavItem>
            <NavItem>
              <Link href="/shop/"><a>Shop</a></Link>
            </NavItem>
            <NavItem>
              <Link href="/pricing/"><a>Pricing</a></Link>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Company
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link href="/clients/"><a>Clients</a></Link>
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem>
                  <Link href="/partners/"><a>Partners</a></Link>
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem>
                  <Link href="/about/"><a>About Us</a></Link>
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem>
                  <Link href="/contact/"><a>Contact Us</a></Link>
                </DropdownItem>

                <DropdownItem divider />
                
                <DropdownItem>
                  <Link href="/blog/"><a>News & Blog</a></Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>
        </Collapse>

      </Navbar>
    </Container>
  </header>
)}

export default Header
