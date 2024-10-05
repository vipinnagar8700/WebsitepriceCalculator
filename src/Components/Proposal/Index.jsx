// src/Proposal.js
import React from 'react';

const Proposal = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg font-montserrat mt-9">
      <p className="text-gray-900 text-end justify-end font-extrabold text-[20px]">
        {new Date().toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        })}
      </p>

      <header className="text-center mb-6">
        <img src="https://dipanshutech.com/wp-content/uploads/2024/08/logo.png" alt="Logo" className="mx-auto mb-4" />
        <h1 className="text-xs font-light text-gray-900">Head Office: SF- 21, Parsvnath Bibhab Plaza, Alpha 1st Commercial Belt, Greater Noida, India</h1>
        <div className='flex flex-row justify-between text-center my-10'>
          <div>
            <p className="text-xs font-light text-gray-900">Mob: 90124785349 <br /><p className="text-xs font-light text-gray-900">90124785349</p></p>
          </div>
          <div>
            <p className="text-xs font-light text-gray-900">Mail: admin@dipanshutech.com <br /><p className="text-xs font-light text-gray-900">info@dipanshutech.com</p></p>
          </div>
        </div>
      </header>

      <section className="mb-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Subject- Website Design Proposal</h2>
        <p className="text-gray-700 text-start">
          Dear Sir,
          We are Pleased to Present a 5 to 7 Pages Website Design Proposal for you. The Goal of this Project is to create a Modern, user-friendly and visually appealing website that effectively communicates your brand identity and engages your Target Audience.
        </p>
      </section>
      <section className="mb-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Proposal Overview</h2>
        <p className="text-gray-700 text-start">
          Goals and Objectives<br />
          1. Create a Responsive Design: Develop a website that is visually appealing and
          functions seamlessly across various devices and screen sizes.<br />
          2. Reflect Brand Identity: Ensure that the design reflects the unique identity and values of your website.<br />
          3. User-Friendly Navigation: Implement an intuitive navigation system to enhance the user experience.<br />
          4. Highlight Key Content: Prioritize and emphasize essential content to capture the attention of your target audience<br />
          5. Maintenance or Technical Support: 3 Month free Tech Support.<br />
          6. Payment Gateway Integration : integration CCAvenue or razorpay Payment Gateway<br />
        </p>
      </section>

      <section className="mb-6 text-center">
        <p className="text-gray-700 text-start">
          Key Features<br />
           Home Page: Engaging introduction to your business, highlighting key offerings.<br />
           About Us Page: Detailed information about our Company, its mission, and the team.<br />
           Services/Products Page: Showcase your products or services with detailed descriptions.<br />
           Contact Page: Provide multiple contact options, including a form for inquiries.<br />
           Blog/News Page: If applicable, share updates and relevant information.<br />

        </p>
        <p className="text-gray-700 text-start">
          Design Approach<br />
          Style and Aesthetics<br />
          The design will be clean, modern, and in line with your brand colors and logo. We will utilize high- quality visuals and graphics to enhance the overall appeal.<br />
          Responsive Design<br />
          Our team will ensure that the website is fully responsive, providing an optimal viewing experience across a wide range of devices.<br />
          User Experience<br />
          We will focus on creating an intuitive navigation system, ensuring that users can easily find the information they seek. Calls-to-action will be strategically placed to encourage user engagement.<br />
        </p>
      </section>


      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Scope of Work</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Research and analysis</li>
          <li>Design and development</li>
          <li>Testing and implementation</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Timeline</h2>
        <p className="text-gray-700">The project is expected to take approximately 12 weeks to complete, broken down as follows:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Weeks 1-3: Research</li>
          <li>Weeks 4-6: Design</li>
          <li>Weeks 7-12: Development and testing</li>
        </ul>
      </section>
      <p className='text-gray-900 font-montserrat font-thin'>
        Note: Content (Text & Image) will be provided by client.
        We are confident that our team's expertise and creative approach will result in a website that not only meets but exceeds your expectations. We look forward to the opportunity to collaborate with you and bring this vision to life.
        Thank you for considering our proposal.</p>
      <footer className="text-center mt-6 bg-orange-100 p-4 rounded-lg">
        <p className="text-orange-500">Thank you for considering our proposal!</p>
        <p className="text-gray-600">Address: 123 Main St, City, Country</p>
        <p className="text-gray-600">Email: contact@example.com</p>
        <p className="text-gray-600">Mobile: +1 (234) 567-890</p>
      </footer>
    </div>
  );
};

export default Proposal;
