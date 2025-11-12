import { useState, useEffect } from "react";

const useFetch = (API) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(API, { signal })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((json) => {
        setData(json.data);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          return;
        }
        setError(error);
      })
      .finally(() => {
        if (!signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [API]);

  return [data, error, loading];
};

export default useFetch;
