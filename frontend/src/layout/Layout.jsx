import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="sm:w-[70%] w-[95%] mx-auto min-h-screen">{children}</div>
      <footer className="bg-accenturePurple p-4 text-center">
        <p>&copy; 2024 Accenture. All rights reserved.</p>
      </footer>
    </div>
    
  );
};

export default Layout;
