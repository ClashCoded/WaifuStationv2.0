import React from 'react';
import fairLaunch from "../../assets/images/home/Images/fair-launch.png"
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

const FairLaunchModal = (props) => {
    
return (

    <Modal
    show={props.show}
    onHide={props.onHide}
  >
    <Modal.Header closeButton></Modal.Header>

    <div className="modal-body space-y-20 pd-40">
    <img src={fairLaunch} alt="fair-launch" />
    <h1>Fair Launch</h1>
            <p className="hover-p">
              The launch includes 3 rounds: Community Presale, Partner Presale,
              Public Sale. No bonding curve.
            </p>
            <a href="/documents/WaifustationEN.pdf" target="__blank"><StyledButton>Learn More</StyledButton></a>
    </div>
    </Modal>
  );
};

export default FairLaunchModal;
