import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/header/header.component';
import HomePage from './pages/homePage/homePage.component';
import ProjectsPage from './pages/projectsPage/projectsPage.component';
import AboutPage from './pages/aboutPage/aboutPage.component';
import FeedbackPage from './pages/feedbackPage/feedbackPage.components';
import Footer from './components/footer/footer.component';

import 'bootstrap/dist/css/bootstrap.css';


import Particles from "react-particles-js";

import './App.scss'

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 1500
      }
    }
  },
  
};

class App extends Component {
  render() {
    return (
      <div>
        <Particles className="particles" params={particlesOptions} />
        <Header />
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about-me" component={AboutPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/feedback" component={FeedbackPage} />
        </Switch>
        <Footer className='footer' />
      </div>
    );
  }
}

export default App;