import React from 'react';
import AboutHero from '@/components/AboutHero';
import KnowMore from '../../../components/KnowMore';
import OurVisionStory from '@/components/OurVisionStory';
import MeetTheTeam from '@/components/MeetTheTeam';
import CEOValues from '@/components/CEOValues';

const About = () => {
    return (
        <div>
            <AboutHero />
            <OurVisionStory />
            <CEOValues />
            <MeetTheTeam />
            <KnowMore />
        </div>
    );
}

export default About;