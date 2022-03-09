import styled from "styled-components"
import React from "react"
function Section({title, ptext, spantext, rightButton, leftButton, backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText className="Fade">
                <h1>{title}</h1>
                <p>{ptext} <span>{spantext}</span></p>
            </ItemText>
            <Button>
                <ButtomGroup>
                    <LeftButton>{leftButton}</LeftButton>
                    {rightButton &&
                        <RightButton>{rightButton}</RightButton>
                    }
                </ButtomGroup>
                <DownArrow src="/images/down-arrow.svg"/>
            </Button>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/images/model-s.jpg");
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
    padding-top: 15px;
    text-align: center;
    h1 {
        align-items: center;
        font-size: 40px;
        text-transform: uppercase;
        color: #382f2f;
        font-weight: 500;
        margin-top: 100px;
        cursor: pointer;
    }
    p {
        margin-top: 2px;
        cursor: pointer;
    }
    span{
        border-bottom: 1px solid black;
    }
    span:hover {
        border-bottom: 2px solid black;
    }

`

const ButtomGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px)
    {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.4);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    opacity: 0.85;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    text-transform: uppercase;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const Button = styled.div`

`

const DownArrow = styled.img`
    margin-top : 20px;
    height : 40px;
    overflow-x : hidden;
    animation : animateDown infinite 1.5s;
    align-items: center;
    justify-content: center;
    margin-left: 252px;
    @media (max-width: 768px)
    {
         margin-left: 120px;
    }
`