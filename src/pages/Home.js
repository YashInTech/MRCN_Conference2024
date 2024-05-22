import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import CallForPapers from '../components/CallForPapers';
import Center from '../components/Center';
import ImportantDates from '../components/ImportantDates';
import Registration from '../components/Registration';
import Location from '../components/Location';

function Home() {
  return (
    <>
      <Hero/>
      <Center/>
      <About/>
      <CallForPapers/>
      <ImportantDates/>
      <Registration/>
      <Location/>
    </>
  )
}

export default Home