import React, { lazy, useEffect, useState } from "react";
import UserData from "./components/UserData";

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [mes, setMes] = useState('')

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://codeforces.com/api/user.info?handles=${query}&checkHistoricHandles=false`
      );
      if(!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      setData(result);
      setError(null)
    } catch (error) {
      setError(error.message);
      setData(null)
    }
  };
  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="handler..."
      />
      <br></br>

      {query == '' ? (
        <><button onClick={()=>setMes("Input Required")}>Search User</button>
        {mes && <p>Input is Required</p>}
        </>
      ) : (
        <>

          <button onClick={handleSearch}>Search User</button>
          {error ? <h1>Not Found!</h1> : <></>}
          {data ? <UserData data={data}/> : <></>}
        
        </>
      )}
      
      {/* {error && <p>{error}</p>} */}
    </>
  );
};

export default App;
