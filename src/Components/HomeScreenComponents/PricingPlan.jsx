import React, { useState } from 'react';
import SuccessImg from '../assets/success.png';

function Modal({ showModal, handleClose, handleSubmit, showForm }) {
  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 w-96 text-center relative">
          {/* Close button */}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 border-2 border-primary rounded-full"
            onClick={handleClose}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png"
              alt="Close"
              className="w-3 h-3 m-2"
            />
          </button>

          {showForm ? (
            <>
              <h2 className="text-xl font-medium text-primary mb-4 font-montserrat">Send Quote</h2>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 rounded-lg px-3 py-2 font-montserrat"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-lg px-3 py-2 √"
                  required
                />
                <input
  type="tel"
  placeholder="Phone"
  className="border border-gray-300 rounded-lg px-3 py-2 font-montserrat"
  required
  pattern="[0-9]{10}" // Pattern to ensure only 10 digits
  maxLength={10} // Limit the input to 10 characters
  title="Please enter a valid 10-digit phone number" // Tooltip for invalid input
/>

                <textarea
                  placeholder="Message"
                  className="border border-gray-300 rounded-lg px-3 py-2 font-montserrat"
                  rows="3"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-white py-2 px-4 rounded font-montserrat"
                >
                  Submit
                </button>
              </form>
            </>
          ) : (
            <>
              {/* Success Message */}
              <img
                src={SuccessImg}
                alt="Success"
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="text-gray-700 font-medium mb-4 font-montserrat">
                Your request was successfully received. We will contact you shortly!
              </p>
              <button
                className="bg-primary text-white py-2 px-4 rounded font-montserrat"
                onClick={handleClose}
              >
                OK
              </button>
            </>
          )}
        </div>
      </div>
    )
  );
}

function PricingPlan({ WebsiteData }) {
  // State for managing modal visibility
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(true); // State for form/success view

  // Log the incoming WebsiteData for debugging
  console.log(WebsiteData, "WebsiteData");

  // Create pricingData based on the WebsiteData structure
  const pricingData = [
    { item: "Hosting Type", price: WebsiteData.hostingPrice },
    { item: "Logo Type", price: WebsiteData.logoPrice },
    { item: "Domain Extension", price: WebsiteData.domainPrice },
    { item: "Platform", price: WebsiteData.platformPrice },
    { item: "Product", price: WebsiteData.productCount ? WebsiteData.productCount * 100 : null },
    { item: "Pages", price: WebsiteData.pageCount ? WebsiteData.pageCount * 4000 : null }
  ];

  // Filter out any item where price is null or undefined
  const filteredPricingData = pricingData.filter(plan => plan.price !== null && plan.price !== undefined);

  // Calculate the total price
  const totalPrice = filteredPricingData.reduce((total, plan) => total + (plan.price || 0), 0);

  // Handler to open the modal
  const handleSendQuote = () => {
    setShowForm(true); // Set to show the form first
    setShowModal(true);
  };

  // Handler to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Handler to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false); // Switch to success message view
  };

  return (
    <div className="relative md:col-span-4 font-montserrat">
      <div className="bg-white rounded-lg p-3 sticky top-0">
        <h2 className="text-xl font-medium text-primary mb-4 pb-2 border-b border-gray-200 font-montserrat">Pricing Plans</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left font-montserrat">Plan</th>
              <th className="px-4 py-2 text-left font-montserrat">Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredPricingData.map((plan, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 font-montserrat">{plan.item}</td>
                <td className="border px-4 py-2 font-montserrat">₹ {plan.price}</td>
              </tr>
            ))}
            <tr className="font-bold">
              <td className="border px-4 py-2 font-montserrat">Total</td>
              <td className="border px-4 py-2 font-montserrat">₹ {totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Send Quote Button */}
      <button className="p-4 bg-primary my-3 text-white font-montserrat w-full rounded" onClick={handleSendQuote}>
        Send Quote
      </button>

      {/* Modal Component */}
      <Modal
        showModal={showModal}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmit}
        showForm={showForm}
      />
    </div>
  );
}

export default PricingPlan;
