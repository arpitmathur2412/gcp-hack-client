import "./Dashboard.css"
import { React, useContext } from 'react'
import userContext from "../context/users/userContext" 
import Button from "react-bootstrap/esm/Button"

const Dashboard = () => {

  const context = useContext(userContext)
  const {user,fetchUser,setUser}=context;

  function onClick(){
    setUser(fetchUser());
    console.log(user);
  }

  return (
    <div className='dashboard-container'>
      <h1 className='heading'>
        Dashboard
      </h1>
      <Button onClick={onClick}>show Details</Button>
      <div className="details">
        <div className="dashboard-card card">
          <div className="card-body">
            <h5 className="card-title" >{user.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{user.phone}</li>
            <li className="list-group-item">{user.email}</li>
            <li className="list-group-item">{user.income}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard