import React from 'react';

function PricingPlan({ WebsiteData }) {
  // Log the incoming WebsiteData for debugging
  console.log(WebsiteData, "WebsiteData");

  // Create pricingData based on the WebsiteData structure
  const pricingData = [
    { item: "Hosting Type", price: WebsiteData.hostingPrice },
    { item: "Logo Type", price: WebsiteData.logoPrice },
    { item: "Domain Extension", price: WebsiteData.domainPrice },
    { item: "Platform", price: WebsiteData.platformPrice },
    { item: "Product", price: WebsiteData.productCount ? WebsiteData.productCount * 100 : null },
    {item:"Pages",price:WebsiteData?.pageCount ? WebsiteData?.pageCount * 4000 : null}
  ];

  // Filter out any item where price is null or undefined
  const filteredPricingData = pricingData.filter(plan => plan.price !== null && plan.price !== undefined);

  // Calculate the total price
  const totalPrice = filteredPricingData.reduce((total, plan) => total + (plan.price || 0), 0);

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
    </div>
  );
}

export default PricingPlan;
