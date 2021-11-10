import React from 'react'
import styled from 'styled-components'
import Child4 from './Child4'

const ChildBox3 = styled.div`
width: 300px;
height: 300px;
border: 0.1rem solid black;
background-color: green;
`

const Child3 = () => {
    return (
        <ChildBox3>
            <Child4 />
        </ChildBox3>
    )
}

export default Child3