const baseUrl= "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT"
const getGuests= async()=> {
  const response = await fetch(`${baseUrl}/guests`)
  const data= await response.json();
  return data.data;
}
const GUESTS= getGuests();
const App= () => {
  return (
   <ul>
      {GUESTS.map((guest)=> (
      <li>
        {guest.name}
      </li>        
      ))}
    </ul>
  )
}