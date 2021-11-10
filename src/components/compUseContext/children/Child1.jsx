import React, { useContext } from 'react'
import styled from 'styled-components'
import { CountContext } from '../Parent'
import Child2 from './Child2'

const ChildBox1 = styled.div`
width: 500px;
height: 500px;
border: 0.1rem solid black;
margin: 10rem auto;
background-color: blueviolet;
display: flex;
justify-content: center;

`

const Child1 = () => {

    const count = useContext(CountContext)

    return (
        <ChildBox1>
            <Child2 />
            <h1>{count}</h1>
        </ChildBox1>
    )
}

export default Child1
