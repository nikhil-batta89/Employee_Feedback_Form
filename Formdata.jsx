import React from 'react'
import './formstyle.css';

function Formdata(props) {

    let {handleBack,users} = props
return (
    <>
    <div className="next">
                {users.map((item, index) =>{
                        return (
                            <div key={index}>
                                <p>Name: {item.name}</p>
                                <p>Department: {item.dept}</p>
                                <p>Rating: {item.rating}</p>
                                <hr/>
                            </div>
                        )
                    })
                }
                <button onClick={handleBack}>Back</button>
    </div>
    </>
)
}

export default Formdata