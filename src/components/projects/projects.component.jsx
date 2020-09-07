
import React from "react";

import './projects.styles.scss';

const Projects = ({ projects }) => {
    const { src, caption, details, linkUrl, sourceCode } = projects;
    return (
        <div className='menu-item'>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${src})`
                }}
            />
            <div className='content'>
                <h1 className='title'>{caption.toUpperCase()}</h1>
                <a  
                    href={linkUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='subtitle'
                >
                    CLICK HERE
                </a>
            </div>
            <div className="project-detail">{details}</div>
            <a className="source-code" href={`${sourceCode}`} target="_blank" rel="noopener noreferrer" > Source Code </a>
        </div>
    )
}

export default Projects;