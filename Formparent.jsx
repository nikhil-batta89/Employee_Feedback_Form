import React, { useState } from 'react'
import ActualForm from './ActualForm'
import Formdata from './Formdata'
import './formstyle.css';



function Formparent() {

  const [users,setUsers] = useState([])
  const [nameIp,setName] = useState('')
  const [deptIp,setDept] = useState('')
  const [ratingIp,setRating] = useState('')
  const [myObj] = useState({})
  const [isSubmitted,setisSubmitted] = useState(false)




const handleChangeName = (e) => {
    console.log('Typing....');
    setName(e.target.value);
}

const handleChangeDept = (e) => {
  console.log('Typing....');
  setDept(e.target.value);
}

const handleChangeRating = (e) => {
  console.log('Typing....');
  setRating(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    let tempObject = myObj;
    tempObject={
        name: nameIp,
        dept: deptIp,
        rating:ratingIp
    };
    console.log(tempObject);

    let tempArr = users;
    tempArr.push(tempObject);

    setUsers(()=>([
      ...tempArr
    ]))

    console.log(users);
    setisSubmitted(!isSubmitted)
}

const handleBack = (e) => {
    setisSubmitted(!isSubmitted)
}

return (
    <div>

      <h1 style={{textAlign: 'center'}}>Employee Feedback Form</h1> 
      
    {
    !isSubmitted?
    <ActualForm handleChangeName={handleChangeName} handleChangeDept={handleChangeDept} handleChangeRating={handleChangeRating} handleSubmit={handleSubmit}/>
    :
    <Formdata users={users} handleBack={handleBack}/>
    }

    </div>
  )
}
export default Formparent