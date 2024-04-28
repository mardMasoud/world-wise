import { useContext } from "react";
import { createContext, useEffect, useState } from "react";

const CitiesContext = createContext(null);

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState([]);
    useEffect(function () {
        async function fetchcity() {
            const res = await fetch("http://localhost:8000/cities");
            const data = await res.json();

            setCities(data);
        }
        fetchcity();
    }, []);
  

    return <CitiesContext.Provider value={{ cities }}>{children}</CitiesContext.Provider>;
}
function useCities() {
    const context = useContext(CitiesContext);
    return context;
}
export { CitiesProvider, useCities };
