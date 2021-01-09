import React from 'react';

import CustomButtom from '../../components/custom-button/custom-button.component'
import './homePage.styles.scss';

const HomePage = () => (
    <div className='home-page'>
        <div>
            <h1 className="animate__animated animate__flip hello-world" >Hello World !!!</h1>
            <h1 className="home-page-intro"> 
                <div id="info" className="animate__animated animate__fadeInDown animate__delay-3s 3s">
                    I am Afeez Olawale, a Web Developer
                </div>
            </h1>
        </div>
        <div 
            id="link-to-about"
            className="animate__animated animate__backInUp animate__delay-4s 4s">
            <CustomButtom id="link-to-about-me">
                <a href='about-me'>KNOW MORE </a>
            </CustomButtom>
            <br/>
            <br/>
            
            <div>
                <h1>
                    View My Resume</h1>
                <h3>
                    <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://drive.google.com/file/d/1-9VpzxRrA5sjxUCONdCNlp3CzTXy60Bt/view?usp=sharing"
                        >  
                        click here
                    </a>
                </h3>  
            </div>
        </div>
    </div>
)

export default HomePage;
