import React from 'react';
import AboutHero from '@/components/AboutHero';
import KnowMore from '../../../components/KnowMore';
import MeetTheTeam from '@/components/MeetTheTeam';
import CEOValues from '@/components/CEOValues';
import OurVisionStory from '@/components/OurVisionStory';

const About = () => {
    return (
        <div>
            <AboutHero />
            <CEOValues />
            <MeetTheTeam />
            <OurVisionStory />
            <KnowMore />
        </div>
    );
}

export default About;