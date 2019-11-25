import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
          {props.sushiList.slice(props.sushiListStart,props.sushiListEnd).map((sushi) =>{
            
            return (

            <Sushi key={sushi.id} 
              sushiName={sushi.name} 
              sushiPrice={sushi.price} 
              sushiImg={sushi.img_url}
              eatSushi={props.eatSushi}/>

              )

          })}
        <MoreButton nextSushis={props.nextSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer