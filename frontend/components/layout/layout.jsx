import React from './node_modules/react';

const Layout = ({ ...children }) => (
  <div>
    <Navbar />
    <div>
      <img />
    </div>
    {children}
    <Footer />
  </div>
);

export default Layout;