import { useEffect,useState } from "react";
//Customhooks 
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
  //converting the data to the json format 
  .then((res)=>res.json())
  .then((res)=>setData(res[currency]))
    },[currency])
  console.log(data)
   return data
}

export default useCurrencyInfo;