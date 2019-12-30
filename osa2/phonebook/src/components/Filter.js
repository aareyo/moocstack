import React from 'react'

const Filter = (props) => {
    return (
        <div>
          <p>filter shown with:</p>
          <input value={props.newFilter} onChange={props.filterPersonNameChange}/>
        </div>
        
    )
}

export default Filter