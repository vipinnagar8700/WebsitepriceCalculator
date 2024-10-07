import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import WebsiteForm from './WebsiteForm';
import DigitalMarketingForm from './DigitalMarketingForm';
import PricingPlan from './PricingPlan';
import ApplicationForm from './ApplicationForm';
import ServicesFormList from '../Screens/ServicesForm';
import GraphicsForm from './GraphicsForm';

function ServicesForm() {
  const { p_id, activeTab } = useParams();
  const [WebsiteData, setWebsiteData] = useState([])
  let formToRender;
  // State to hold the form data
  const handleFormSubmit = (data) => {
    console.log('Received form data from WebsiteForm:', data);
    setWebsiteData(data)
    // You can perform additional actions here like saving the data or updating state
  };
  // Determine which form to display based on activeTab
  switch (decodeURIComponent(activeTab)) {
    case 'website':
      formToRender = <WebsiteForm onSubmit={handleFormSubmit} />;
      break;
    case 'application':
      formToRender = <ApplicationForm />;
      break;
    case 'digital':
      formToRender = <DigitalMarketingForm />;
      break;
    case 'software':
      formToRender = <ServicesFormList />;
      break;
    case 'graphics':
      formToRender = <GraphicsForm />;
      break;
    default:
      formToRender = <div>Please select a valid service.</div>;
      break;
  }

  return (
    <div className="w-full bg-lightsecondary py-10 font-montserrat">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column - Services Card (Spans 8 columns) */}
        <div className="bg-white rounded-lg md:col-span-8">
          <h2 className="text-xl font-medium text-primary mb-4 pb-2 border-b border-gray-200 p-3">
            Fill your basic Requirement for {decodeURIComponent(activeTab)}?
          </h2>

          {/* Render Services based on Active Tab */}
          {formToRender}

        </div>
        {/* Right Column - Pricing Table (Spans 4 columns) */}
        <PricingPlan WebsiteData={WebsiteData} />
      </div>
    </div>
  );
}

export default ServicesForm;
