import React from 'react';

const Newsletter = () => {
  return (
    <div className="max-w-xl mx-auto p-6 border border-gray-300 bg-gray-100">
      <header className="text-center mb-6">
        <img src="logo.png" alt="Parking Time Logo" className="mx-auto w-48" />
        <img src="banner.jpg" alt="Welcome Banner" className="mt-4 w-full" />
      </header>

      <section className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Hi [First Name],</h1>
        <p>Welcome to Parking Time! We're excited to have you join our community of smart parkers. Our mission is to make parking a hassle-free experience for you.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Discover Convenient Parking Locations</h2>
        <p className="mb-4">Finding the perfect parking spot has never been easier. Explore our wide network of parking locations across the city, designed to save you time and effort.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Real-time availability</li>
          <li>Competitive pricing</li>
          <li>Secure and well-lit areas</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. How to Get Started</h2>
        <p className="mb-4">Getting started with Parking Time is simple. Follow these steps to begin your hassle-free parking journey:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Download the App:</strong> Available on iOS and Android.</li>
          <li><strong>Create an Account:</strong> Sign up with your email or social media.</li>
          <li><strong>Find Your Spot:</strong> Use our app to locate and reserve your parking space.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Special Offers Just for You</h2>
        <p>As a welcome gift, enjoy 10% off your first reservation with the promo code <strong>WELCOME10</strong>. Don't miss out on our exclusive deals and discounts!</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What Our Users Are Saying</h2>
        <blockquote className="italic bg-gray-200 p-4 rounded">
          "Parking Time has completely changed the way I park. It's fast, easy, and reliable!" - Jane Doe
        </blockquote>
      </section>

      <section className="text-center mb-6">
        <p className="mb-4">Ready to experience the convenience of Parking Time?</p>
        <a href="#" className="inline-block px-6 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600">Download the App Now</a>
        <br />
        <a href="#" className="text-blue-500 hover:underline">Visit Our Website</a>
      </section>

      <footer className="text-center border-t border-gray-300 pt-4">
        <div className="mb-4">
          <a href="#"><img src="facebook-icon.png" alt="Facebook" className="inline w-8 h-8 mx-2" /></a>
          <a href="#"><img src="twitter-icon.png" alt="Twitter" className="inline w-8 h-8 mx-2" /></a>
          <a href="#"><img src="instagram-icon.png" alt="Instagram" className="inline w-8 h-8 mx-2" /></a>
        </div>
        <div className="mb-4">
          <p>support@parkingtime.com | 1-800-555-1234</p>
        </div>
        <div>
          <a href="#" className="text-blue-500 hover:underline">Unsubscribe</a>
        </div>
      </footer>
    </div>
  );
};

export default Newsletter;
