import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Cont = styled.div`
display: flex;
justify-content: start;
align-items: center;
height: 100vh;
width: 100vw;
flex-direction: column;
`

const Title = styled.h1`
color: palevioletred;
margin: 30px 0;
`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
width: 70%;
`

const Box = styled.div`
width: 100px;
height: 100px;
background-color: palevioletred;
cursor: pointer;
font-size: 2rem;
display: flex;
justify-content: center;
align-items: center;
`

const Img = styled.img`
width: 300px;
height: 300px;
object-fit: cover;
margin-top: 25px;
`

const CompUseEffect = () => {

    const [showCont, setShowCont] = useState(false);

    const [boxPicked, setBoxPicked] = useState(0);
    const [image, setImage] = useState("");

    useEffect(() => {
        setTimeout( () => {
            console.log('shud only run 1x')
            setShowCont(true)
        }, 2000 )
    }, [])

    useEffect(() => {
        if(boxPicked === 0) {
            setImage("")
        } else {
            fetchImage(boxPicked)
        }
    }, [boxPicked]);

    const fetchImage = async (boxId) => {
        if(boxId === 1) {
            const response = await axios.get(
                'https://randomfox.ca/floof/?ref=apilist.fun'
            );
            setImage(response.data.image);
        } else if (boxId === 2) {
            const response = await axios.get(
                'https://aws.random.cat/meow?ref=apilist.fun'
            );
            setImage(response.data.file);
        } else if (boxId === 3) {
            const response = await axios.get(
                'https://dog.ceo/api/breeds/image/random'
            );
            setImage(response.data.message);
        }
    }
    
    return (
        <Cont>
           {
           showCont && 
           <>
           <Title>Pick a box</Title>
           <Wrapper>
               <Box id="1" onClick={(e) => setBoxPicked(parseInt(e.target.id))}>1</Box>
               <Box id="2" onClick={(e) => setBoxPicked(parseInt(e.target.id))}>2</Box>
               <Box id="3" onClick={(e) => setBoxPicked(parseInt(e.target.id))}>3</Box>
           </Wrapper>
           </>
           }
           {image &&
           (
               <Img src={image}/>
           )
           }
        </Cont>
    )
}

export default CompUseEffect

