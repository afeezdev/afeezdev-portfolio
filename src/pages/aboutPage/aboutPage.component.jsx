import React from 'react';

import Introduction from '../../components/introduction/introduction.component';
import SkillsAndPicture from '../../components/skills-and-picture/skills-and-picture.component';

import './aboutPage.styles.scss';

const AboutPage = () => (
    <div className='about-page'>
        <Introduction />
        <SkillsAndPicture />
    </div>
)

export default AboutPage;