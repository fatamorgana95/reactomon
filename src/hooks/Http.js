import { useState, useEffect } from "react";
import axios from "axios";

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    (async function mimic() {
      setIsLoading(true);
      await axios
        .get(url)
        .then((response) => {
          setFetchedData(response);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    })();
  }, dependencies);

  return [isLoading, fetchedData];
};
