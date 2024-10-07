import React, { useState } from 'react';

const DigitalMarketingForm = () => {
  const [selectedPlan, setSelectedPlan] = useState('1-month');

  const handleTabChange = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className='m-4 font-montserrat'>
      <div className="mb-4">
        <button
          className={`px-4 py-2 rounded-lg ${selectedPlan === '1-month' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange('1-month')}
        >
          1 Month Plan
        </button>
        <button
          className={`px-4 py-2 rounded-lg mx-2 ${selectedPlan === '3-months' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange('3-months')}
        >
          3 Months Plan
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedPlan === '6-months' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange('6-months')}
        >
          6 Months Plan
        </button>
      </div>

      <div className="mt-4">
        {selectedPlan === '1-month' && (
          <p>Details for the 1 Month Plan will be displayed here.</p>
        )}

        {selectedPlan === '3-months' && (
          <p>Details for the 3 Months Plan will be displayed here.</p>
        )}

        {selectedPlan === '6-months' && (
          <p>Details for the 6 Months Plan will be displayed here.</p>
        )}
      </div>
    </div>
  );
};

export default DigitalMarketingForm;
