
import React from "react";

const Services = () => {
  return (
    <div id="about" className="container mx-auto pt-32 px-6">
      <h2 className="text-5xl md:text-6xl text-[#7ed627]" data-aos="zoom-in-up">
        My Services
      </h2>
      <p className="text-white pt-4" data-aos="zoom-in-up">
        I offer a wide range of services designed to help your business grow and succeed in the digital age.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        
  
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-3xl font-semibold text-[#7ed627] mb-4">Web Development</h3>
          <p className="text-gray-800 mb-4">
            I specialize in creating dynamic, responsive websites that offer both functionality and aesthetics. My goal is to make your online presence more effective and engaging.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-800">
            <li>Custom Websites</li>
            <li>E-commerce Solutions</li>
            <li>Responsive Design</li>
            <li>Content Management Systems</li>
            <li>Web Applications</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-3xl font-semibold text-[#7ed627] mb-4">Graphic Design</h3>
          <p className="text-gray-800 mb-4">
            From logos to marketing materials, I provide creative graphic design solutions that elevate your brands visual identity and help you stand out.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-800">
            <li>Brand Identity</li>
            <li>Logo Design</li>
            <li>Marketing Collateral</li>
            <li>Print Design</li>
            <li>Social Media Graphics</li>
          </ul>
        </div>

      
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-3xl font-semibold text-[#7ed627] mb-4">Landing Page</h3>
          <p className="text-black mb-4">
            I create high-converting landing pages that are designed to drive engagement and conversions, whether its for a product launch or lead generation.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-black">
            <li>Lead Generation</li>
            <li>Product Launches</li>
            <li>Call-to-Action Focused</li>
            <li>SEO Optimized</li>
            <li>Conversion Rate Optimization</li>
          </ul>
        </div>


        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-3xl font-semibold text-[#7ed627] mb-4">On-Page SEO</h3>
          <p className="text-black mb-4">
            I optimize your website for search engines to help improve your sites visibility and organic traffic with effective on-page SEO techniques.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-black">
            <li>Keyword Research</li>
            <li>Meta Tags Optimization</li>
            <li>Content Optimization</li>
            <li>Internal Linking</li>
            <li>Page Speed Optimization</li>
          </ul>
        </div>

      
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-3xl font-semibold text-[#7ed627] mb-4">Web Hosting</h3>
          <p className="text-black mb-4">
            I offer reliable and fast web hosting services with excellent uptime, security, and scalability to ensure your website performs well at all times.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-black">
            <li>Shared Hosting</li>
            <li>VPS Hosting</li>
            <li>Dedicated Servers</li>
            <li>SSL Certificates</li>
            <li>Cloud Hosting</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Services;
