import React from 'react';
import Hero from './Hero/Hero';
import Header from '../Header/Header';
import AboutMe from './AboutMe/AboutMe';
import Student from './Student/Student';
import Tech from './Tech/Tech';
import Portfolio from './Portfolio/Portfolio';

const Landing = () => {
  return (
    <main>
      <Header />
      <Hero />
      <AboutMe />
      <Tech />
      <Student />
      <Portfolio />
    </main>
  );
};

export default Landing;