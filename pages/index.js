import React from 'react'
import Head from 'next/head'

import Layout from "../components/layout/layout";
import Hero from "../components/hero";
import Services from "../components/services";
import Brands from "../components/brands";
import Video from "../components/video";
import Triple from "../components/triple";
import Apps from "../components/apps";
import SliderProducts from "../components/sliderproducts";
import DemoRequest from "../components/demorequest";
import SliderFlow from "../components/sliderflow";

const Home = () => (
  <div className="home">
    <Head>
      <title>Home | imAGINE</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Layout>
      <Hero />
      <Video />
      <Triple />
      <Apps />
      <SliderProducts />
      <Brands />
      <DemoRequest />
    </Layout>
  </div>
)

export default Home
