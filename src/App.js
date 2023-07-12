import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components/header/header.component';
import HomePage from './pages/homePage/homePage.component';
import ProjectsPage from './pages/projectsPage/projectsPage.component';
import AboutPage from './pages/aboutPage/aboutPage.component';
import FeedbackPage from './pages/feedbackPage/feedbackPage.components';
import Footer from './components/footer/footer.component';

import 'bootstrap/dist/css/bootstrap.css';


import './App.scss'

class App extends Component {
  render() {
    return (
      <div>
      
        <Header />
        
          <Routes>
            <Route  path="/" element={ <HomePage/>} />
            <Route path="/about-me" element={ <AboutPage/>} />
            <Route path="/projects" element={ <ProjectsPage/>} />
            <Route path="/feedback" element={ <FeedbackPage/>} />
          </Routes>
        
        <Footer className='footer' />
      </div>
      

    );
  }
}

export default App;