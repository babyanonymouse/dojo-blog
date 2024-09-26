import { useState, useEffect } from "react";
// custom hooks. should start with "use"
const useFetch = (url) => {
  // using the useState hook to create a state variable
  const [data, changeData] = useState(null);
  const [pending, changePending] = useState(true);
  const [error, changeError] = useState(null);

  // useEffect hook to fetch data/db.json data
  useEffect(() => {
    // abort fetch if the component is unmounted
    const abortCont = new AbortController();
    //setTimeout to simulate a delay
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            //checking if response is ok
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          changeData(data);
          changePending(false); //pending data is false if data is fetched
          changeError(null); //error is null if data is fetched
        })
        //catching any error
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            changePending(false);
            changeError(err.message);
          }
        });
    }, 500); //delay of 500ms
    return () => abortCont.abort(); //cleanup function
  }, [url]); //dependency array

  return { data, pending, error };
};

export default useFetch;
