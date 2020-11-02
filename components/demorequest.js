import React from 'react'
import Link from 'next/link'
import { Col, Row, Container } from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'

const DemoRequest = () => (
	<div className="demorequest">
		<Container>
			<Row>
				<Col md="4" className="text-right">
					<FontAwesomeIcon icon={faCogs} className="icon" />
				</Col>
				<Col md="5" className="text-center">
					<h3>Digital Signage Project?</h3>
					<p className="mt-4"><Link href="/"><a className="demo-link btn">Request a DEMO</a></Link></p>
				</Col>
			</Row>
		</Container>
	</div>
)
export default DemoRequest