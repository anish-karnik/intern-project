import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

const Info = () => {
  return (
    <div className="font-mono bg-accentureBlack text-white min-h-screen">
      <main className="container mx-auto p-8">
        <section id="hero" className="my-16 text-center">
          <h1 className="text-6xl font-bold">Edge Technology</h1>
          <p className="mt-6 text-2xl">Revolutionizing the way you interact with the digital world.</p>
          <div className="mt-12">
          <NavLink
                to={"/login"}
                className={({ isActive }) => (isActive ? "text-blue-400" : "")}
              >
                <a href="/" className="bg-accenturePurple text-white py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition text-2xl">Our Products</a>
              </NavLink>
          </div>
        </section>
        <section id="our-products" className="my-16">
          <h2 className="text-5xl font-semibold text-center">What we Provide to you</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-4xl font-semibold">Edge Device Management</h3>
              <p className="mt-4 text-xl">
                Effortlessly manage all your edge devices from a central platform. Our management solutions provide real-time monitoring, updates, and diagnostics to ensure optimal performance and uptime.
              </p>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-4xl font-semibold">Real-time Data Processing</h3>
              <p className="mt-4 text-xl">
                Gain insights in real-time with our advanced edge analytics solutions. Process data at the source to make faster and more informed decisions.
              </p>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-4xl font-semibold">Secure Data Transmission</h3>
              <p className="mt-4 text-xl">
                Ensure secure data transmission and storage with our robust security protocols. Protect your data from unauthorized access and breaches.
              </p>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-4xl font-semibold">Scalable Edge Solutions</h3>
              <p className="mt-4 text-xl">
                Scale your edge computing infrastructure seamlessly as your needs grow. Our solutions are designed to grow with your business, providing flexibility and scalability.
              </p>
            </div>
          </div>
        </section>
        <section id="edge-technology" className="my-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-8">
            <img src="https://media.licdn.com/dms/image/D5612AQH_E1gezhnKkw/article-cover_image-shrink_720_1280/0/1699943981324?e=2147483647&v=beta&t=hPkEV3U5GSP1qcAt92F8aukcg05Wmqm6I_L_yWb6u7k" alt="Edge Technology" className="w-full rounded-lg shadow-lg"/>
          </div>
          <div className="md:w-1/2 p-8 text-center md:text-left">
            <h2 className="text-5xl font-semibold">What is Edge Technology?</h2>
            <p className="mt-8 text-xl leading-relaxed">
              Edge Technology brings computing power closer to the data source. This reduces latency, improves processing times, and provides real-time insights. It is essential for applications requiring immediate data processing such as IoT, autonomous vehicles, and smart cities.
              <br/><br/>
              By decentralizing data processing and bringing it closer to where it is generated, Edge Technology enables faster response times, reduced bandwidth usage, and enhanced reliability. It is a key enabler for next-generation applications that demand low latency and high performance.
            </p>
          </div>
        </section>
        <section id="our-edge-services" className="my-16 flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 p-8">
            <img src="https://etimg.etb2bimg.com/photo/101293031.cms" alt="Edge Services" className="w-full rounded-lg shadow-lg"/>
          </div>
          <div className="md:w-1/2 p-8 text-center md:text-left">
            <h2 className="text-5xl font-semibold">What We Provide in Edge</h2>
            <ul className="mt-8 text-xl leading-relaxed space-y-4 list-disc list-inside">
              <li>Edge Device Management: Comprehensive solutions to manage and monitor your edge devices.</li>
              <li>Real-time Data Processing: Advanced analytics to process data at the edge for immediate insights.</li>
              <li>Secure Data Transmission: Robust security measures to protect your data.</li>
              <li>Scalable Edge Solutions: Flexible and scalable solutions to grow with your needs.</li>
              <li>Custom Edge Applications: Tailored applications to meet your specific business requirements.</li>
            </ul>
          </div>
        </section>
        <section id="interactive-features" className="my-16">
          <h2 className="text-5xl font-semibold text-center">Why Edge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-4xl font-semibold">Real-time Analytics</h3>
              <p className="mt-4 text-xl">
                Gain insights in real-time with our advanced edge analytics solutions. Make informed decisions quickly with data processed at the edge.
              </p>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-4xl font-semibold">Device Management</h3>
              <p className="mt-4 text-xl">
                Effortlessly manage all your edge devices from a central platform. Our device management solutions provide real-time monitoring, updates, and diagnostics.
              </p>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-4xl font-semibold">Secure Connections</h3>
              <p className="mt-4 text-xl">
                Ensure secure data transmission and storage with our robust security protocols. Protect your data from unauthorized access and breaches.
              </p>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-4xl font-semibold">Scalable Solutions</h3>
              <p className="mt-4 text-xl">
                Scale your edge computing infrastructure seamlessly as your needs grow. Our solutions are designed to grow with your business, providing flexibility and scalability.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-accenturePurple p-4 text-center">
        <p>&copy; 2024 Accenture. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Info;
