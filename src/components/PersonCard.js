import React, { useState } from 'react';

const PersonCard = props => {
    const [state, setState] = useState({
        // ages: props.age
    })
    
    // const clickHandler = e => {
    //     setState({
    //         ages: state.ages + 1
    //     })
    // }

    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <h3>Age: {state.ages}</h3>
            <h3>Hair Color: {props.hairColor}</h3>
            {/* <button onClick={clickHandler}>Birthday Button for {props.firstName} {props.lastName} </button> */}
        </div>
    );
}

export default PersonCard;