import React from 'react';

const GraphicsForm = () => {
  return (
    <div className='m-4 font-montserrat'>
      <h3 className="text-lg font-semibold mb-3">Graphics Design Requirements</h3>
      <form>
        <div className="mb-4">
          <label className="block mb-1">Logo:</label>
          <input type="text" className="border rounded-lg w-full p-2" placeholder="Enter SEO requirements" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">SMO:</label>
          <input type="text" className="border rounded-lg w-full p-2" placeholder="Enter SMO requirements" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email Marketing:</label>
          <input type="text" className="border rounded-lg w-full p-2" placeholder="Enter email marketing strategy" />
        </div>
      </form>
    </div>
  );
};

export default GraphicsForm;
