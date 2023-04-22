import { useState } from 'react';
import './App.css';
import Login from './Component/Login';
import Profile from './Component/Profile';
import { Route,Routes } from 'react-router-dom';

function App() {
  let [user , setUser] = useState({})
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setToken={setUser}/>}  />
        <Route path="/profile" element={<Profile  userValue={user}/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
