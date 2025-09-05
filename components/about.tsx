import React from "react";
import { NewsletterSignup } from "./newsletter-signup";
function About() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-lg p-6 md:p-10 max-w-5xl mx-auto my-10">
  {/* About Us */}
  <div className="flex-1 space-y-4">
    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-500 pb-2">
      About Us
    </h2>
    <p className="text-gray-600">
      Welcome to <span className="font-semibold text-indigo-600">ABD jewellers</span>,
      your premier destination for stylish and affordable clothing for  women, and Girls. 
      Based in Sargodha, Pakistan, we combine trendsetting fashion with unmatched customer service and unbeatable prices.
    </p>
   
    <p className="text-gray-600">
      Join our growing community and experience fashion the ABD jewellers way.
    </p>
  </div>

  {/* Contact Us */}
  <div className="flex-1 space-y-4">
    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-500 pb-2">
      Contact Us
    </h2>
    <p className="text-gray-600">
      <span className="font-semibold text-gray-800">Phone:</span> 03087575476
    </p>
    <p className="text-gray-600">
      {/* <span className="font-semibold text-gray-800">Email:</span> ascentgarments92@gmail.com */}
    </p>
    <p className="text-gray-600">
      <span className="font-semibold text-gray-800">Address:</span> Sargodha Sarafa bazar, Pakistan
    </p>
  </div>
</div>
 <NewsletterSignup /> 
    </>
  );
}

export default About;
