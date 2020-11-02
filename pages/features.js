import React from 'react'
import Head from 'next/head'

import Layout from "../components/layout/layout";
import HeroFeatures from "../components/hero_features";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

import { Row, Col, Container } from 'reactstrap'
import Link from 'next/link'

import feature03 from "../public/images/feature03.svg"
import feature01 from "../public/images/feature01.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoVideo, faCompressArrowsAlt, faBug, faClipboardList, faCubes, faClock, faCalculator, faUsers, faGift, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const Features = () => (
  <div className="features">
    <Head>
      <title>Features | imGINE</title>
    </Head>

    <Layout>
      <HeroFeatures />
      
      <div className="list">
        <Container>
          <Row>
            <Col>
              <div className="item text-center">
                <FontAwesomeIcon icon={faClipboardList} className="font-icon"/>
                <div className="name">
                  Manage Your Subscriptions
                </div>
                <div className="description">
                Purchase new licences, re-new old subscriptions, or disable existing licences with ease
                </div>
              </div>
            </Col>
            <Col>
              <div className="item text-center">
                <FontAwesomeIcon icon={faCalculator} className="font-icon"/>
                <div className="name">
                  Month To Month
                </div>
                <div className="description">
                imAGINE is available on a month to month basis. No contractual agreements
                </div>
              </div>
            </Col>
            <Col>
              <div className="item text-center">
                <FontAwesomeIcon icon={faUsers} className="font-icon"/>
                <div className="name">
                Scalable
                </div>
                <div className="description">
                No limitations to the amount of players added to a CMS
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="compare">
        <Container>
          <Row>
            <Col className="text-center">
              <h3>Full features</h3>
              <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <p className="description"><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</i></p>
            </Col>
          </Row>
          <Row>
            <Col className="block">
              <FontAwesomeIcon icon={faCubes} className="font-icon"/>
              <div className="title">SCREEN ORIENTATION</div>
              <div className="description">Display content in portrait or landscape orientation</div>
            </Col>
            <Col className="block">
              <FontAwesomeIcon icon={faCubes} className="font-icon"/>
              <div className="title">MULTIPLE RESOLUTIONS</div>
              <div className="description">Select from the popular resolutions or create a custom resolution</div>
            </Col>
            <Col className="block">
              <FontAwesomeIcon icon={faCubes} className="font-icon"/>
              <div className="title">CHOOSE A TEMPLATE</div>
              <div className="description">Select from a list of a pre-created templates</div>
            </Col>
          </Row>
          <Row>
            <Col className="block">
              <FontAwesomeIcon icon={faCubes} className="font-icon"/>
              <div className="title">CUSTOM TEMPLATE</div>
              <div className="description">Divide your screen into regions or create a full screen experience</div>
            </Col>
            <Col className="block">
              <FontAwesomeIcon icon={faCubes} className="font-icon"/>
              <div className="title">ADDING BACKGROUNDS</div>
              <div className="description">Upload your own background or select a default color.</div>
            </Col>
            <Col className="block">
              <FontAwesomeIcon icon={faCubes} className="font-icon"/>
              <div className="title">UPLOADING CONTENT</div>
              <div className="description">Access your library and drag and drop the media into the correct region</div>
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

      <div className="purchase">
        <Container>
          <Row>
            <Col>
              <h3>Management</h3>
              <p>An intuitive central management interface that summarises your entire visual network on one display</p>
            </Col>
            <Col className="text-center">
              <FontAwesomeIcon icon={faCubes} className="font-icon"/>
              <Link href="/"><a className="btn fill-btn">Find Balance</a></Link>
            </Col>
            <Col className="ml-3">
              <h3>Schedule</h3>
              <p>You have the freedom to have your individual content or entire playlists change automatically or based on your time pro essay writing service preferences.</p>
            </Col>
            <Col className="text-center">
              <FontAwesomeIcon icon={faClock} className="font-icon"/>
              <Link href="/"><a className="btn fill-btn">Find Balance</a></Link>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="credit-card">
        <Container>
          <Row>
            <Col md={{ size: '4', offset: 2 }}>
              <h3>Players Availability</h3>
              <div className="description">
              Export a comprehensive report highlighting individual players ON/OFF status during a day, week, month or year
              </div>
              <Link href="/"><a className="btn line-btn">Find out more</a></Link>
            </Col>
              
            <Col className="text-center">
              <FontAwesomeIcon icon={faPhotoVideo} className="font-icon"/>
            </Col>
          </Row>

          <hr />

          <Row>
            <Col className="text-center">
              <FontAwesomeIcon icon={faCompressArrowsAlt} className="font-icon"/>
            </Col>
            <Col>
              <h3>Layouts Playback</h3>
              <div className="description">
              Highlight how many times a specific layout played on a specific player in a day, week, month or year
              </div>
              <Link href="/"><a className="btn line-btn">Find out more</a></Link>
            </Col>
          </Row>
          
          <hr />
          
          <Row>
            <Col md={{ size: '4', offset: 2 }}>
              <h3>Content Reports</h3>
              <div className="description">
              Asses how many times a specific media item played in a day, week, month or year
              </div>
              <Link href="/"><a className="btn line-btn">Find out more</a></Link>
            </Col>
              
            <Col className="text-center">
              <FontAwesomeIcon icon={faBug} className="font-icon"/>
            </Col>
          </Row>
        </Container>
      </div>

      <DemoRequest />
    </Layout>
  </div>
)

export default Features
