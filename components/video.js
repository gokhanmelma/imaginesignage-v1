import React from 'react'
import Link from 'next/link'
import { Col, Row, Container } from 'reactstrap'
import ReactPlayer from 'react-player'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Video = () => (
	<div className="video">
		<Container>
			<Row>
				<Col md="7" className="video-area">
					<div className='player-wrapper'>
						<ReactPlayer
							className='react-player'
							url='https://www.youtube.com/watch?v=Cti96c3dhxM'
							width='100%'
							height='100%'
						/>
					</div>
				</Col>
				<Col md="5" className="text-area">
					<h3>
					Managing your screens couldn't get any easier than this!
					</h3>
					<div className="description">
					An intuitive central management interface that summarises your entire visual network on one display. View registered, online and offline devices, locate them on the map or chat write my essay online to our team for support. Not to mention the ease of our screenshot feature for additional assurances.
					</div>
					<div className="icons">
						<Link href="/"><a><FontAwesomeIcon icon={['fab', 'apple']} className="icon" /></a></Link>
						<Link href="/"><a><FontAwesomeIcon icon={['fab', 'linux']} className="icon" /></a></Link>
						<Link href="/"><a><FontAwesomeIcon icon={['fab', 'windows']} className="icon" /></a></Link>
					</div>
				</Col>
			</Row>
		</Container>
	</div>
)
export default Video