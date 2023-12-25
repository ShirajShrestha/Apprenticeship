import { createContext, useEffect, useState } from "react";
import flagData from "../Data";

export const FeatureFlagContext = createContext(null);

const FlagContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [flags, setFlags] = useState([]);

  const fetchFeatureFlags = async () => {
    try {
      setLoading(true);
      const response = await flagData();
      setFlags(response);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagContext.Provider value={{ loading, flags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

export default FlagContext;
