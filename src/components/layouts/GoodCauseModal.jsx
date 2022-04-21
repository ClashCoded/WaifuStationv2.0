import React from 'react';
import goodCause from "../../assets/images/home/Images/good-cause.png"
import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap";
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    margin-top: 2rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    padding: 10px 20px;
    background-color: #FD9DCB !important;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition   : all 0.3s ease-in-out;
    -ms-transition    : all 0.3s ease-in-out;
    -o-transition     : all 0.3s ease-in-out;
    transition        : all 0.3s ease-in-out;
    outline: none;
    border: none ;
    color: #fcfcfc;
    &:hover{
        color: #fcfcfc;
        opacity: 0.7;
        border: none;
    }
`

const StyledModal = styled(Modal)`
  top: 20%;
`

const ImgContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`

const StyledImg = styled.img`

`

const StyledHeading = styled.h1`
  text-align: center;
`

const StyledParagraph = styled.p`
  text-align: center;
`

const GoodCauseModal = (props) => {
    
return (

    <StyledModal
    show={props.show}
    onHide={props.onHide}
  >
    <Modal.Header closeButton></Modal.Header>

    <div className="modal-body space-y-20 pd-40">
    <ImgContainer>
    <StyledImg src={goodCause} alt="good-cause" />
    </ImgContainer>
    <StyledHeading>Good Cause</StyledHeading>
            <StyledParagraph className="hover-p">
              Upon the completion of our launch, 10 ETH will be donated to Kyoto
              Animation to support creators and commemorate the 2019 tragedy.
            </StyledParagraph>
            <a href="/documents/WaifustationEN.pdf" target="__blank"><StyledButton>Learn More</StyledButton></a>
    </div>
    </StyledModal>
    
  );
};

export default GoodCauseModal;
