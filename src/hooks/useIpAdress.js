import axios from "axios";
import { useState, useEffect } from 'react';


// IP adresini almak için fonksiyon
export const getIpAddress = async () => {
  try {
    // ipify'ın ücretsiz API'sini kullanıyoruz
    const response = await axios.get("https://api.ipify.org?format=json");
    return response.data.ip;
  } catch (error) {
    console.error("IP adresi alınamadı:", error);
    // Hata durumunda varsayılan bir değer dönebiliriz
    return "unknown";
  }
};

// React hook'u
const useIpAddress = () => {
  const [ipAddress, setIpAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const ip = await getIpAddress();
        setIpAddress(ip);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchIpAddress();
  }, []);

  return { ipAddress, loading, error };
};

export default useIpAddress;
