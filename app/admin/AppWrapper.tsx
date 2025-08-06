"use client";

import dynamic from "next/dynamic";

// Dynamically import the App component with SSR disabled
const App = dynamic(() => import("./app"), { ssr: false });

const AppWrapper = () => {
  return <App />;
};

export default AppWrapper;