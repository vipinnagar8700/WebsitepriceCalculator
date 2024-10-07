import React, { useState, useEffect } from 'react';
import Select from 'react-select'; // Import the react-select component

const WebsiteForm = ({ onSubmit, selectedServiceName }) => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    hostingType: '',
    logoType: '',
    domainExtension: '',
    productCount: 0, // Default value set to 1
    platform: '', // Added to track the selected platform
    pageCount: '', // Added to track the selected number of pages
    selectedServices: [] // Added for multi-select dropdown
  });

  const hostingOptions = [
    { value: 'shared', label: 'Shared Hosting', price: 200 },
    { value: 'independent', label: 'Independent Hosting', price: 500 },
    { value: 'No Need', label: 'No Need', price: 0 },
  ];

  const logoOptions = [
    { value: '2d', label: '2D', price: 500 },
    { value: '3d', label: '3D', price: 1000 },
    { value: 'No Need', label: 'No Need', price: 0 },
  ];

  const domainOptions = [
    { value: '.com', label: '.com', price: 3000 },
    { value: '.in', label: '.in', price: 2000 },
    { value: 'Other', label: 'Other', price: 0 },
    { value: 'No Need', label: 'No Need', price: 0 },
  ];

  const platformOptions = [
    { value: 'wordpress', label: 'WordPress', price: 10000, timing: '20' },
    { value: 'shopify', label: 'Shopify', price: 12000, timing: '20' },
    { value: 'joomla', label: 'Joomla', price: 9000, timing: '20' },
    { value: 'magento', label: 'Magento', price: 6000, timing: '20' },
    { value: 'html & bootstrap', label: 'HTML Bootstrap', price: 20000, timing: '20' },
    { value: 'react js + tailwind', label: 'React.js + Tailwind CSS', price: 30000, timing: '20' },
    { value: 'next js + tailwind', label: 'Next.js + Tailwind CSS', price: 40000, timing: '20' },
    { value: 'vue js + tailwind', label: 'Vue.js + Tailwind CSS', price: 50000, timing: '20' },
    { value: 'nuxt js + tailwind', label: 'Nuxt.js + Tailwind CSS', price: 55000, timing: '20' },
    { value: 'laravel + tailwind', label: 'Laravel + Tailwind CSS', price: 25000, timing: '20' },
    { value: 'No Need', label: 'No Need', price: 0 ,timing:0},
  ];

  const pageOptions = [
    { value: '1', label: '1 Page' ,price:'4000'},
    { value: '3', label: '3 Pages',price:'12000' },
    { value: '5', label: '5 Pages' ,price:'20000'},
    { value: '10', label: '10 Pages',price:'40000' },
    { value: '20', label: '20 Pages' ,price:'80000'},
    { value: 'more', label: 'More than 20 Pages' ,price:'100000'},
  ];

  // Multiple selection service options
  const serviceOptions = [
    { value: 'seo', label: 'SEO Optimization' },
    { value: 'marketing', label: 'Digital Marketing' },
    { value: 'design', label: 'UI/UX Design' },
    { value: 'development', label: 'Custom Development' },
    { value: 'content', label: 'Content Writing' }
  ];

  // Effect to auto-submit form after 300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      handleSubmit();
    }, 300);

    return () => clearTimeout(timer);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSliderChange = (e) => {
    const newCount = e.target.value;
    setFormData((prev) => ({
      ...prev,
      productCount: newCount,
    }));
  };

  const handleMultiSelectChange = (selectedOptions) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: selectedOptions,
    }));
  };

  const handleSubmit = () => {
    const selectedHosting = hostingOptions.find(option => option.value === formData.hostingType);
    const selectedLogo = logoOptions.find(option => option.value === formData.logoType);
    const selectedDomain = domainOptions.find(option => option.value === formData.domainExtension);
    const selectedPlatform = platformOptions.find(option => option.value === formData.platform);

    const totalPrice = 
      (selectedHosting ? selectedHosting.price : 0) +
      (selectedLogo ? selectedLogo.price : 0) +
      (selectedDomain ? selectedDomain.price : 0) +
      (selectedPlatform ? selectedPlatform.price : 0);

    const allData = {
      ...formData,
      platformData: selectedPlatform || null, 
      hostingPrice: selectedHosting ? selectedHosting.price : 0,
      logoPrice: selectedLogo ? selectedLogo.price : 0,
      domainPrice: selectedDomain ? selectedDomain.price : 0,
      platformPrice: selectedPlatform ? selectedPlatform.price : 0,
      totalPrice, 
    };

    console.log('Form submitted:', allData);
    onSubmit(allData); 
  };

  return (
    <div className='m-4 font-montserrat bg-white'>
    <form className="px-4 py-6 sm:px-6 lg:px-1">
  {/* Website Platform Select */}
  <div className="mb-4 flex flex-col sm:flex-row sm:justify-between text-center">
    <label className="block mb-1 font-medium text-gray-900 font-montserrat">
      Website Platform language:
    </label>
    <select
      name="platform"
      onChange={handleChange}
      className="border rounded-lg w-full sm:w-1/3 p-2 mt-2 sm:mt-0"
    >
      <option value="" disabled>Select a platform</option>
      {platformOptions.map(option => (
        <option
          key={option.value}
          value={option.value}
          className='font-medium text-gray-900 font-montserrat'
        >
          {option.label}
        </option>
      ))}
    </select>
  </div>


  {/* Domain Extension Radio Buttons */}
  <div className="mb-4 flex flex-col sm:flex-row sm:justify-between text-center">
    <label className="block mb-1 font-medium text-gray-900 font-montserrat">
      Domain Extension:
    </label>
    <div className="flex flex-col sm:flex-row gap-4 mt-2 sm:mt-0">
      {domainOptions.map(option => (
        <label key={option.value} className="flex items-center">
          <input
            type="radio"
            name="domainExtension"
            value={option.value}
            checked={formData.domainExtension === option.value}
            onChange={handleChange}
            className="mr-2"
          />
          {option.label}
        </label>
      ))}
    </div>
  </div>

  {/* Hosting Type Radio Buttons */}
  <div className="mb-4 flex flex-col sm:flex-row sm:justify-between text-center">
    <label className="block mb-1 font-medium text-gray-900 font-montserrat">
      Hosting Type:
    </label>
    <div className="flex flex-col sm:flex-row gap-4 mt-2 sm:mt-0">
      {hostingOptions.map(option => (
        <label key={option.value} className="flex items-center">
          <input
            type="radio"
            name="hostingType"
            value={option.value}
            checked={formData.hostingType === option.value}
            onChange={handleChange}
            className="mr-2"
          />
          {option.label}
        </label>
      ))}
    </div>
  </div>

  {/* Conditional Rendering based on selectedServiceName */}
  {selectedServiceName === 'E-commerce' ? (
    // Product Count Slider for E-commerce
    <div className="mb-4 text-center">
      <div className='flex flex-col sm:flex-row justify-between'>
        <label className="block mb-1 font-medium text-gray-900 font-montserrat">Number of Products:</label>
        <p className='font-medium text-gray-900 font-montserrat'>Selected Products: {formData.productCount}</p>
      </div>
      <input
        type="range"
        min="1"
        max="100"
        value={formData.productCount}
        onChange={handleSliderChange}
        className="w-full mt-2"
      />
    </div>
  ) : (
    // Page Count Dropdown for non-E-commerce services
    <div className="mb-4 text-center flex flex-col sm:flex-row justify-between">
      <label className="block mb-1 text-gray-900 font-medium font-montserrat">Number of Pages:</label>
      <select
        name="pageCount"
        onChange={handleChange}
        className="border rounded-lg w-full sm:w-1/3 p-2 mt-2 sm:mt-0"
      >
        <option value="" disabled>Select number of pages</option>
        {pageOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )}

  {/* Multi-Select Services Dropdown */}

  <div className="mb-4 flex flex-col sm:flex-row sm:justify-between text-center">
    <label className="block mb-1 font-medium text-gray-900 font-montserrat">
      Additional Services:
    </label>
    <div className="w-full sm:w-1/3 mt-2 sm:mt-0">
      <Select
        isMulti
        name="selectedServices"
        options={serviceOptions}
        value={formData.selectedServices}
        onChange={handleMultiSelectChange}
        className="basic-multi-select"
        classNamePrefix="select Services"
      />
    </div>
  </div>

  {/* Disclaimer */}
  <div className="mt-6">
    <label className="block text-gray-900 font-montserrat font-medium">Disclaimer:</label>
    <p className='font-thin text-gray-900 font-montserrat text-sm'>
      All code and design assets will be owned by the client upon full payment. Any additional features requested beyond the initial scope will be subject to additional fees. Payment must be made according to the agreed terms, and any overdue payments may result in project delays.
    </p>
  </div>
</form>

    </div>
  );
};

export default WebsiteForm;
