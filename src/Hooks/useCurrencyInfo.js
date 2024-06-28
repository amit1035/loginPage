import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    setLoading(true); // Set loading to true before fetch

    fetch(`https://v6.exchangerate-api.com/v6/28b32ea0eafa5072da7d5d8d/latest/${currency}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch exchange rates');
        }
        return res.json();
      })
      .then((res) => {
        setData(res.conversion_rates);
        setLoading(false); // Set loading to false on successful fetch
      })
      .catch((error) => {
        console.error('Error fetching currency info:', error);
        setError('Failed to fetch exchange rates data');
        setLoading(false); // Set loading to false on error
      });
  }, [currency]);

  return { data, error, loading }; // Return data, error, and loading states
}

export default useCurrencyInfo;
