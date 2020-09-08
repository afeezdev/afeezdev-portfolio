import React from 'react';

import './footer.styles.scss';

const Footer = () => (
    <div>
        <footer>
            <ul className="footer-links d-flex justify-content-center">
                <li> <a href="/"> Home</a> </li>
                <li> <a href="/about-me">About</a> </li>
                <li> <a href="/projects">Projects </a> </li>
                <li> <a href="/feedback">Feedback </a> </li>
            </ul>
            <div 
                className=" d-flex flex-row justify-content-center">
                <a href="https://web.facebook.com/olawale.abdulyekeen?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"> 
                    <i className="mr-4 ml-4  fa fa-facebook-official"> </i> 
                </a>
                <a href="https://twitter.com/talk2wale09" target="_blank" rel="noopener noreferrer"> 
                    <i className="mr-4 ml-4 fa fa-twitter"> </i> 
                </a>
                <a href="https://www.linkedin.com/in/afeezdev" target="_blank" rel="noopener noreferrer">
                    <i className="mr-4 ml-4 fa fa-linkedin"> </i>
                </a>
                <a href="https://github.com/afeezdev" target="_blank" rel="noopener noreferrer">
                    <i className="mr-4 ml-4 fa fa-github"> </i>
                </a>
            </div>
            <br/>
        <div id="copyright">Copyright © Afeez Olawale 2020 </div>
        <br/>
            
        </footer>
    </div>
);
export default Footer;