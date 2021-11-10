import React from 'react'
import styled from 'styled-components'
import Child3 from './Child3'

const ChildBox2 = styled.div`
width: 400px;
height: 400px;
border: 0.1rem solid black;
background-color: yellow;
`

const Child2 = () => {
    return (
        <ChildBox2>
            <Child3 />
        </ChildBox2>
    )
}

export default Child2