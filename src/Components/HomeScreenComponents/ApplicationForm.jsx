import React from 'react';

const ApplicationForm = () => {
  return (
    <div className='m-4 font-montserrat'>
      <h3 className="text-lg font-semibold mb-3 font-montserrat">App Requirements</h3>
      <form>
        <div className="mb-4">
          <label className="block mb-1 font-montserrat">App Platform:</label>
          <select className="border rounded-lg w-full p-2 font-montserrat">
            <option value="custom">Flutter Application</option>
            <option value="theme-based">React Native Application</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-montserrat">Logo:</label>
          <input type="file" className="border rounded-lg w-full p-2" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-montserrat">Landing Page:</label>
          <input type="text" className="border rounded-lg w-full p-2" placeholder="Enter landing page URL" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-montserrat">Play Store Console:</label>
          <input type="text" className="border rounded-lg w-full p-2" placeholder="Enter Play Store Console ID" />
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
