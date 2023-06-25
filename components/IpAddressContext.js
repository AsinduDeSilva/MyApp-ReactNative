import React, { createContext, useState } from 'react';

const IpAddressContext = createContext();

export const IpAddressProvider = ({ children }) => {

  const [ipAddress, setIpAddress] = useState("192.168.1.20:8080");

  const updateIpAddress = (newIpAddress) => {
    setIpAddress(newIpAddress);
  };

  return (
    <IpAddressContext.Provider value={{ ipAddress, updateIpAddress }}>
      {children}
    </IpAddressContext.Provider>
  );
};

export default IpAddressContext;
