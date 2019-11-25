import React from 'react'

const AddFunds = (props) => {
    return(
        <div className="addFunds">
          <b>Add Funds: </b>
          <br/>
          <input type="number" placeholder="0" min="0" className="addFunds"/>
          <button onClick={(event) => props.addFunds(event)} className="addFunds" >Add Funds</button>
        </div>
    )
}

export default AddFunds