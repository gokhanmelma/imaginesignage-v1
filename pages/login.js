import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Container, Row, Col, Form, FormGroup, FormText, FormFeedback, Label, Input, Button } from 'reactstrap'

import Logo from "../public/images/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
	return (
	<div className="login">
		<Head>
			<title>Sign in | imAGINE</title>
		</Head>

		<div className="close"><Link href="/"><a>X</a></Link></div>
		<Container>
			<Row>
				<Col>
					<div className="text">
					Welcome to imAGINE!<br />
					Please enter your username
					and password to login.
					</div>
				</Col>
				
				<Col>
					<div className="login-panel">
						<div className="label1">
							Login to continue
						</div>
						<div className="label2">
							Please enter your username and password to login.
						</div>
						<div className="input">
							<Input type="email" placeholder="Username" />
							<Input type="password" placeholder="Password" />
						</div>
						<div className="remember">
							<Label className="ml-4"><Input type="checkbox" />Remember Me</Label>
						</div>
						<div className="btn fill-btn">Log in</div>
						<div className="signup">Not a member? Go to <Link href="/register"><a>Sign up</a></Link></div>
					</div>
				</Col>
			</Row>
		</Container>
	</div>
)}

export default Login

/*import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Container, Row, Col, Form, FormGroup, FormText, FormFeedback, Label, Input, Button } from 'reactstrap'

import Logo from "../public/images/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    const initialValue = { "emailState" : "" };
    const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [validate, setValidate] = useState(initialValue);

	 function validateEmail(e) {
	    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	      if (emailRex.test(e.target.value)) {
	        validate.emailState = 'has-success'
	      } else {
	        validate.emailState = 'has-danger'
	      }
	    }

	 function handleChange (event) {
	    const { target } = event;
	    const value = target.type === 'checkbox' ? target.checked : target.value;
	    setName(value);
	  }

	 function submitForm(e) {
	    e.preventDefault();
	    console.log(`Email: ${ email }`)
	  }

	return (
	<div className="login">
		<Head>
			<title>Sign in | imAGINE</title>
		</Head>

		<div>
			<Container className="wrap">
			<div className="text-center logo">
				<img src={Logo} alt="imAGINE logo" />
			</div>
	        
	        <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
	          <Col>
	            <FormGroup>
	              <Label className="label-user"><FontAwesomeIcon icon={faUser} size="xs" className="icon" /></Label>
	              <Input
	                type="email"
	                name="email"
	                id="exampleEmail"
	                placeholder="myemail@email.com"
	                value={ email }
	                valid={ validate.emailState === 'has-success' }
	                invalid={ validate.emailState === 'has-danger' }
	                onChange={ (e) => {
	                            validateEmail(e)
	                            handleChange(e)
	                          } }
	              />
	              <FormFeedback valid>
	                That's a tasty looking email you've got there.
	              </FormFeedback>
	              <FormFeedback>
	                Uh oh! Looks like there is an issue with your email. Please input a correct email.
	              </FormFeedback>
	              <FormText>Your username is most likely your email.</FormText>
	            </FormGroup>
	          </Col>
	          <Col>
	            <FormGroup>
	              <Label for="examplePassword" className="label-user"><FontAwesomeIcon icon={faKey} size="xs" className="icon" /></Label>
	              <Input
	                type="password"
	                name="password"
	                id="examplePassword"
	                placeholder="********"
	                value={ password }
	                onChange={ (e) => handleChange(e) }
	            />
	            </FormGroup>
	          </Col>
	          <Col>
	            <FormGroup>
	              <Input
	                type="checkbox"
	                name="remember"
	                id="rememberMe"
	                className="remember-check"
	              />
	              <Label for="rememberMe" className="pl-3 remember-text">Remember Me</Label>
	            </FormGroup>
	          </Col>
	          <div className="text-center"><Button className="fill-btn">Sign in</Button></div>

	          <p className="text-center my-5 remember-text">Not a member? <Link href="/register/"><a className="sign-up">Sign up now</a></Link></p>
	      </Form>
	      </Container>
		</div>
	</div>
)}

export default Login
*/