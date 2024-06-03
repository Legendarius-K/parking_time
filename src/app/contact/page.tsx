import React from 'react';
import Hero from '@/components/Hero';

const Contact = () => {
    return (
        <div>
            <Hero
               title="We Would Love To Hear From You" 
               subtitle="Contact"
               imageSrc="./Images/pink.jpeg" 
               isContactPage={true}
            />
        </div>
    );
}

export default Contact;