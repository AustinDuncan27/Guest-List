import { useEffect, useState } from "react";
const baseUrl= "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2510-CPU-RM-WEB-PT"

const App = () => {
  const [selectedGuest, setSelectedGuest] = useState();
  const [guests, setGuests]= useState([]);
  
  const syncGuests = async() => {
    const response = await fetch (`${baseUrl}/guests`);
    const data= await response.json();
    setGuests(data.data)
  };

  useEffect(()=>{
    syncGuests();
  }, []);
  const handleClickSelect = (guest) => () => {
    setSelectedGuest(guest);
  };
  
  const handleClickUnselect = ()=> {
    setSelectedGuest(undefined)
  }

  return (
    <div>
      <h2>Guest List</h2>

      <div style={{ display: "flex" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {guests.map((guest) => (
            <li>
              <div
                style={{
                  border: "1px solid black",
                  padding: 4,
                  margin: 4,
                  borderRadius: 4,
                }}
              >
                <div>Name: {guest.name}</div>
                <div>Email: {guest.email}</div>
                <button onClick={handleClickSelect(guest)}>Select</button>
              </div>
            </li>
          ))}
        </ul>
        {selectedGuest && <div>
          <div style= {{border: "1px solid black"}}>
            <div>name: {selectedGuest?.name}</div>
            <div>bio: {selectedGuest?.bio}</div>
            <div>phone: {selectedGuest?.phone}</div>
            <div>email: {selectedGuest?.email}</div>
            <div>job: {selectedGuest?.job}</div>
            <button onClick= {handleClickUnselect}>Unselect</button>
          </div>
        </div>}
      </div>
    </div>
  );
};
export default App;
