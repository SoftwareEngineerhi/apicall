import { useEffect, useState } from "react"
import './apidata.css';
export default function ApiData(){
    const [data,setdata]=useState(null);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

 useEffect(()=>{
 fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
 .then(response=>{
   if(!response.ok){
    throw new Error("fail to fetch data");
}
return response.json();
}).then(data=>{ 
setdata(data);
setUsers(data.results);

})
.catch(error =>{
setError(error);
})
},[])
    return(
       <>
        {users.map((user, index) => (
      <div className="id-card">
  <div className="id-card-content">
    <div className="photo">
      <img src={user.picture.large} alt="Profile Photo"/>
    </div>
    <div className="details">
      <div className="field">
        <span className="label">Name:{user.name.first} &nbsp;&emsp;{user.name.last}
        </span>
        </div>
      <div className="field">
        <span className="label">Gender:{user.gender}</span>
       </div>
      <div className="field">
        <span className="label">Phone Number:{user.location.street.number}</span>
       </div>
    </div>
  </div>
</div>
))}
  </>

    )
}