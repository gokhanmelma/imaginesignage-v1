import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Container, Row, Col, Form, FormGroup, FormText, FormFeedback, Label, Input, Button } from 'reactstrap'

import Logo from "../public/images/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
	return (
	<div className="register">
		<Head>
			<title>Sign up | imAGINE</title>
		</Head>

		<div className="close"><Link href="/"><a>X</a></Link></div>
		<Container>
			<Row>
				<Col>
					<div className="text">
					Welcome to imAGINE!<br />
					Please enter your username
					and password to register.
					</div>
				</Col>
				
				<Col>
					<div className="login-panel">
						<div className="label1">
							Register to continue
						</div>
						<div className="label2">
							Please enter your username and password to register.
						</div>
						<div className="input">
							<Input type="email" placeholder="Username" />
							<Input type="password" placeholder="Password" />
							<Input type="password" placeholder="Confirm" />
						</div>
						<div className="btn fill-btn">Register</div>
						<div className="signup">Already a member? Go to <Link href="/login"><a>Sign in</a></Link></div>
					</div>
				</Col>
			</Row>
		</Container>
	</div>
)}

export default Register