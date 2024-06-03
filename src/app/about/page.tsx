import React from 'react';
import Hero from '@/components/Hero';

const About = () => {
    return (
        <div>
            <Hero
               title="Parking Time Sweden" 
               subtitle="About us"
               imageSrc="./Images/pink.jpeg"
               paragraf="We are a tech startup dedicated to transforming the parking experience for all stakeholders - parkers, parking attendants, municipalities, and property owners."
            />
        </div>
    );
}

export default About;