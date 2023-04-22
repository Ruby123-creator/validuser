import { useNavigate } from "react-router-dom";

import { useState } from "react";

async function loginUser(credentials) {

   return fetch('https://dummyjson.com/auth/login', {
  
     method: 'POST',
  
     headers: {
  
       'Content-Type': 'application/json'
  
     },
  
     body: JSON.stringify(credentials)
  
   })
  
     .then(data => data.json())
     .then(res=>{
      // console.log(res);
      localStorage.setItem("loginUser" , res.id);

      return res;
     
   }
      )
      .catch(()=>{
        // console.log("hii")
      // alert(e);
      return 0;
  })  
  }
  
  export default function Login({setToken}) {
  
    const [username, setUserName] = useState();
  
    const [password, setPassword] = useState();
    let Navigate = useNavigate();

    const HandleSubmit = async e => {
  
      e.preventDefault();
  
      const token = await loginUser({
  
        username,
  
        password
  
      });
      
      setToken(token);
      console.log(token)
      if(token.message==="Invalid credentials"){
      
        alert("No username is found ,username and password is invalid")
      }else{
              Navigate('/profile')

      }

  
    }
   
  
    return(
  
      <div className="login-wrapper">
  
        <h1>Please Log In</h1>
  
        <form onSubmit={HandleSubmit}>
  
          <label>
  
            <p>Username</p>
  
            <input type="text" onChange={e => setUserName(e.target.value)} />
  
          </label>
  
          <label>
  
            <p>Password</p>
  
            <input type="password" onChange={e => setPassword(e.target.value)} />
  
          </label>
  
          <div>
  
            <button type="submit">Submit</button>
  
          </div>
  
        </form>
  
      </div>
  
    )
  
  }
  
