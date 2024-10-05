import React, { useEffect, useState } from 'react';
import PricingPlan from './PricingPlan';
import { Link, useNavigate } from 'react-router-dom';
import WebsiteForm from './WebsiteForm';
import ApplicationForm from './ApplicationForm';
import DigitalMarketingForm from './DigitalMarketingForm';
import ServicesFormList from '../Screens/ServicesForm';
import GraphicsForm from './GraphicsForm';

function ServicesSection() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(null); // Track the active tab
  const [selectedServiceId, setSelectedServiceId] = useState(null); // Track the selected service
  console.log(activeTab, "selectedServiceId")
  const [selectedServiceName, setSelectedServiceName] = useState('');
  const [formShow,setFormShow]= useState(false)
  // Sample data for the 10 cards (can replace with actual content)
  const servicesData = {
    website: [
      { id: 1, name: 'Static / Information', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png' },
      { id: 2, name: 'E-commerce', imageUrl: 'https://cdn-icons-png.flaticon.com/128/397/397181.png' },
      { id: 3, name: 'Blog Website', imageUrl: 'https://cdn-icons-png.flaticon.com/128/4104/4104718.png' },
      { id: 4, name: 'Portfolio Website', imageUrl: 'https://cdn-icons-png.flaticon.com/128/8644/8644474.png' },
      { id: 5, name: 'Corporate Website', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2103/2103799.png' },
      { id: 6, name: 'Landing Page Website', imageUrl: 'https://cdn-icons-png.flaticon.com/128/1324/1324931.png' }
    ],
    application: [
      { id: 1, name: 'Hybrid Application', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png' },
      { id: 2, name: 'Native Application', imageUrl: 'https://cdn-icons-png.flaticon.com/512/4661/4661284.png' },
      { id: 3, name: 'Webs Application', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2103/2103799.png' },
      { id: 4, name: 'Communication Application', imageUrl: 'https://cdn-icons-png.flaticon.com/512/3110/3110908.png' },
      { id: 5, name: 'LifeStyle Application', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1162/1162499.png' },
      { id: 6, name: 'Utility Application', imageUrl: 'https://cdn-icons-png.flaticon.com/512/270/270832.png' },
      { id: 7, name: 'Entertainment Application', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png' },
      { id: 8, name: 'News Application', imageUrl: 'https://cdn-icons-png.flaticon.com/512/4661/4661284.png' },
      { id: 9, name: 'Education Application', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2103/2103799.png' },
    ],
    digital: [
      { id: 1, name: 'SEO / SMO', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png' },
      { id: 2, name: 'Google Ads', imageUrl: 'https://cdn-icons-png.flaticon.com/512/4661/4661284.png' },
      { id: 3, name: 'Content Marketing', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2103/2103799.png' }
    ],
    software: [
      { id: 1, name: 'School Management Software', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png' },
      { id: 2, name: 'Hospital Management Software', imageUrl: 'https://cdn-icons-png.flaticon.com/512/4661/4661284.png' },
      { id: 3, name: 'Learning Management Software', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2103/2103799.png' }
    ],
    graphics: [
      { id: 1, name: 'Figma Design', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png' },
      { id: 2, name: 'Logo Design', imageUrl: 'https://cdn-icons-png.flaticon.com/512/4661/4661284.png' },
      { id: 3, name: 'Catalog Design', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2103/2103799.png' },
      { id: 4, name: 'Banner Design', imageUrl: 'https://cdn-icons-png.flaticon.com/512/2103/2103799.png' },
      { id: 5, name: 'Figma Design', imageUrl: 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png' },
      { id: 6, name: 'Logo Design', imageUrl: 'https://cdn-icons-png.flaticon.com/512/4661/4661284.png' },
    ],
  };

  const handleServiceClick = async (data) => {
    setSelectedServiceId(data.id); // Reset selected service on tab change
    setSelectedServiceName(data?.name)
    console.log(data)
    try {
      setTimeout(()=>{
      setFormShow(true)
      },1000)
    } catch (error) {
      console.log(error)
    }
  }

const [WebsiteData,setWebsiteData] = useState([])
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
      formToRender = <WebsiteForm selectedServiceName={selectedServiceName}  onSubmit={handleFormSubmit}/>;
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
        <div className="bg-white rounded-lg md:col-span-8 ">

          {/* Tab Navigation */}

          {/* Render Services based on Active Tab */}
          
          {
            formShow ? (
              <div className="">
              <div className="">
                {/* Left Column - Services Card (Spans 8 columns) */}
                <div className="bg-white rounded-lg md:col-span-8">
                  <h2 className="text-xl font-medium text-primary mb-4 pb-2 border-b border-gray-200 p-3">
                    Fill your basic Requirement for {selectedServiceName} {decodeURIComponent(activeTab)}? 
                  </h2>
                  {/* Render Services based on Active Tab */}
                  {formToRender}
                </div>
              </div>
            </div>
            ):(
              <>
          <h2 className="text-xl font-medium text-primary  border-b border-gray-200 p-3">Are You Looking For?</h2>

{
            selectedServiceId ? (
              <ul className="space-y-2 px-3 py-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {servicesData[activeTab].map((service) => (
                    <button
                      key={service.id}
                      className={`cursor-pointer p-4 rounded-lg text-center bg-light2secondary border 
                              ${selectedServiceName === service?.name ? 'border-primary text-white  bg-primary' : 'border-gray-200 text-gray-500'}`} // Change border color based on selection

                      onClick={() => 
                          handleServiceClick(service)
                      }
                    // Set selected service on click
                    >
                      <img
                        src={service?.imageUrl}
                        alt={service?.name}
                        className="w-16 h-16 mx-auto mb-3"
                      />
                      <p className={`text-base font-light text-gray-500 ${selectedServiceName === service?.name ? 'border-primary text-white  bg-primary' : 'border-gray-200 text-gray-500'} `}>{service?.name}</p>
                    </button>
                  ))}
                </div>
              </ul>
            ) : (
              <div>
              <ul className="space-y-2 px-3 py-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {['website', 'application', 'digital', 'software', 'graphics'].map((tab) => {
                    let buttonLabel = tab;
                    let imgSrc = '';
            
                    // Custom labels and images based on the tab value
                    if (tab === 'website') {
                      buttonLabel = 'Website Design & Development';
                      imgSrc = 'https://cdn-icons-png.flaticon.com/128/7991/7991055.png'; // Example image for Website Design & Development
                    } else if (tab === 'application') {
                      buttonLabel = 'Application Development';
                      imgSrc = 'https://cdn-icons-png.flaticon.com/128/11078/11078771.png'; // Example image for Application Development
                    } else if (tab === 'digital') {
                      buttonLabel = 'Digital Marketing';
                      imgSrc = 'https://cdn-icons-png.flaticon.com/128/8644/8644426.png'; // Example image for Digital Marketing
                    } else if (tab === 'software') {
                      buttonLabel = 'Software Development';
                      imgSrc = 'https://cdn-icons-png.flaticon.com/128/3950/3950815.png'; // Example image for Software Development
                    } else if (tab === 'graphics') {
                      buttonLabel = 'Graphics Designs';
                      imgSrc = 'https://cdn-icons-png.flaticon.com/128/12294/12294398.png'; // Example image for Graphics Designs
                    }
            
                    return (
                      <button
                        key={tab}
                        onClick={() => {
                          setActiveTab(tab);

                          // Delay the tab change by 2 seconds
                          setTimeout(() => {
                            setSelectedServiceId(tab); // Reset selected service on tab change
                          }, 1000);
                        }}
                        className={`cursor-pointer p-4 rounded-lg text-center bg-light2secondary border 
                          ${activeTab === tab ? 'border-primary text-white  bg-primary' : 'border-gray-200 text-gray-500'}`}
                      >
                        <img
                          src={imgSrc}
                          alt={buttonLabel}
                          className="w-16 h-16 mx-auto mb-3"
                        />
                        <p className="text-base font-light">{buttonLabel}</p>
                      </button>
                    );
                  })}
                </div>
              </ul>
            </div>
            
            )
          }
              </>
            )
          }
        </div>
        {/* Right Column - Pricing Table (Spans 4 columns) */}
        <PricingPlan WebsiteData={WebsiteData}/>
      </div>
    </div>
  );
}

export default ServicesSection;
