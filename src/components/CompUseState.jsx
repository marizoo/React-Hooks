import React, {useState} from 'react'
import styled from 'styled-components'

const Cont = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
flex-direction: column;
`

const Box1 = styled.div`
border: 0.1rem solid rgba(0, 0, 0, 0.3);
height: 100px;
width: 80%;
margin: 2rem auto;
display: flex;
`

const Bar = styled.div`
background-color: rgba(212, 113, 211, 0.3);
height: 100%;
width: 10%;
`

const Box2 = styled.div`
display: flex;
width: 15%;
justify-content: space-between;

button {
    padding: 10px;
    border: 1px solid blue;
    cursor: pointer;
}
`

const CompUseState = () => {

    const [count, setCount] = useState(0);

    const changeCount = (operation) => {
        if(operation === "add") {
            if(count < 10) setCount(count + 1)
        } else {
            if(count > 0) setCount(count - 1)
        }
    }

    const renderBar = () => {
        const bars = [];

        for(let i = 0; i < count; i++) {
            bars.push(
                <Bar></Bar>
            )
        }
        return bars;
    }

    return (
        <Cont>
            <h1>useState</h1>
            <Box1>
               {renderBar()}
            </Box1>
            <Box2>
                <button onClick={() => changeCount('subtract')}>Reduce</button>
                <button onClick={() => changeCount('add')}>Add</button>
              
            </Box2>
        </Cont>
    )
}

export default CompUseState
