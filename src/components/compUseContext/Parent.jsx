import React, { useState, createContext } from 'react'
import styled from 'styled-components';
import Child1 from './children/Child1';

export const CountContext = createContext(0);

const Cont = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Parent = () => {

    const [count, setCount] = useState(0)

    return (
        <CountContext.Provider value={count}>
            <Cont>
                <Child1 />
                <h1>{count}</h1>
                <button onClick={()=>setCount(count + 1)}>Add</button>
            </Cont>
        </CountContext.Provider>
    )
}

export default Parent;
