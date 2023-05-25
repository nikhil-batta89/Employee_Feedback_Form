import React from 'react'
import './formstyle.css';

function ActualForm(props) {

    let {handleChangeName, handleChangeDept, handleChangeRating, handleSubmit} = props
   
return (
    <>
         <form className="back">
                <label>Name</label>
                <input type="text" id="nameIp" placeholder="Enter your name" onChange={handleChangeName}></input>
                <br/><br/> 
                <label>Department</label>
                <input type="text" id="deptIp" placeholder="Enter your dept." onChange={handleChangeDept}></input>
                <br/><br/>
                <label>Rating</label>
                <input type="number" id="ratingIp" placeholder="Enter your rating in numbers" onChange={handleChangeRating}></input>
                <br/><br/>
                <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
            


    </>
)
}

export default ActualForm