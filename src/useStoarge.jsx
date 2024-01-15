import { useEffect,useState } from "react";

function getValue(key,initialvalue){
    let s, sSess;

  try {
    s = JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.error(`Error parsing JSON from localStorage for key '${key}':`, error);
  }

  try {
    sSess = JSON.parse(sessionStorage.getItem(key));
  } catch (error) {
    console.error(`Error parsing JSON from sessionStorage for key '${key}':`, error);
  }

  if (s) {
    return s;
  }

  if (sSess) {
    return sSess;
  }

  return initialvalue;
}

export default function usLocalStorage(key,initialValue){

    const [content,setContent] = useState(()=>{
        return getValue(key,initialValue);
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(content))
        sessionStorage.setItem(key,JSON.stringify(content))
    },[key,content])

    return(
        [content,setContent]
    )
}