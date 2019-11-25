import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={(event) => props.eatSushi(event, props)}>
          <img src={props.sushiImg} alt={props.sushiName} width="100%" />
      </div>
      <h4 className="sushi-details">
        {props.sushiName} - ${props.sushiPrice}
      </h4>
    </div>
  )
}

export default Sushi