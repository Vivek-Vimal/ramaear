import React from 'react'
import styled from 'styled-components'

const Text = (props) => {

    const StyledText = styled.p`
        font-size:${props.size ? props.size : "14px"};
        color: ${props.color ? props.color : "#ffffff"};
        text-align: ${props.center ? "center" : "left"};
        letter-spacing: ${props.ls ? props.ls : "0.1em"};
        line-height: ${props.lh ? props.lh : "25px"};
        font-weight: ${props.fw ? props.fw : "500"};
        font-family: ${props.roboto ? "Roboto" : "Poppins"};

        @media only screen and (max-width: 1200px) {
            font-size:${props.xmsize ? props.xmsize : "12px"};
          }

        @media only screen and (max-width: 768px) {
            font-size:${props.msize ? props.msize : "10px"};
          }
    `
    
    return (
        <StyledText> 
            {props.Text ? props.Text : "Default Text"}
        </StyledText>
    )
}

export default Text