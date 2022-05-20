import { useEffect, useState } from "react";

const useService = (id) => {
  const [service, setService] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setIsLoading(false);
      });
  }, [id]);

  return { service, setService, isLoading };
};

export default useService;
