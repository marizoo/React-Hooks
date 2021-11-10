import React from 'react'
import styled from 'styled-components'
import Child5 from './Child5'

const ChildBox4 = styled.div`
width: 200px;
height: 200px;
border: 0.1rem solid black;
background-color: blue;
`

const Child4 = () => {
    return (
        <ChildBox4>
            <Child5 />
        </ChildBox4>
    )
}

export default Child4