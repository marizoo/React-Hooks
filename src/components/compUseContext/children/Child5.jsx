import React, { useContext } from 'react'
import styled from 'styled-components'
import { CountContext } from '../Parent'

const ChildBox5 = styled.div`
width: 100px;
height: 100px;
border: 0.1rem solid black;
background-color: red;
`

const Child5 = () => {

    const count = useContext(CountContext)

    return (
        <ChildBox5>
            <h1>{count}</h1>
        </ChildBox5>
    )
}

export default Child5