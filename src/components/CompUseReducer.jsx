import React, { useReducer } from 'react'
import styled from 'styled-components'

const Cont = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const reducer = (state, action) => {
    switch(action.type){
        case "DEPOSIT":
            return state + action.payload;
        case "WITHDRAW":
            return state - action.payload;
        default:
            return state;
    }
};

const CompUseReducer = () => {

    const deposit = (amount) => {
        dispatch({
            type: "DEPOSIT",
            payload: amount,
        });
    }

    const withdraw = (amount) => {
        dispatch({
            type: "WITHDRAW",
            payload: amount,
        });
    }

    const [amount, dispatch] = useReducer(reducer, 500)

    return (
        <Cont>
            <h1>
            {amount}
            </h1>
            <button onClick={() => deposit(500)}>Deposit</button>
            <button onClick={() => withdraw(500)}>Withdraw</button>
        </Cont>
    )
}

export default CompUseReducer
