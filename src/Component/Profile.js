import { useEffect,useState } from "react";
import axios from 'axios';

const Profile =()=>{
    let [data,setData] = useState({});
    // let obj;
    useEffect(()=>{
      let id = localStorage.getItem('loginUser')

      axios.get(`https://dummyjson.com/users/${id}`)
      .then((response)=> {console.log(response.data)
        setData(response.data)
      })
      .catch(()=> console.log("Error"))
    }
  
,[])
    
   
    return (
        <div>
            
          {
           <div>
            
            <img src={data.image} alt="" />
            <p>id:{data.id}</p>
            <p>userName:{data.username}</p>

            <p>firstName:{data.firstName}</p>
            <p>lastName:{data.lastName}</p>

            <p>Age:{data.age}</p>
            <p>Gender:{data.gender}</p>
            <p>email:{data.email}</p>

           </div>
                    
        
          }
        </div>
    )
}
export default Profile;