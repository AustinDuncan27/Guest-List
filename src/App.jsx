import { useEffect, useState } from "react";
const baseUrl= "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2510-CPU-RM-WEB-PT"
 const getGuest= async()=> {
    const response= await fetch(`${baseUrl}/guests`);
    const data = await response.json();
      console.log(data.data)
      return data.data
  }
  const GUESTS= await getGuest();
  export default  function App() {
  const [guests, setGuest]= useState(GUESTS)

 
  return <>
    <ul>
        {guests.map((guest)=>(
          <li>
            {guest.name}
          </li>
        ))}
    </ul>
  </>;
}
