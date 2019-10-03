import React from "react";
import styled from "styled-components";
import { device } from "./Devices";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid gray;
  box-shadow: 5px 5px #ccc;
  padding: 10px;
  margin: 10px;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const Image = styled.img``;

const Content = styled.div`padding: 10px;`;

const Card = ({ withPictureOf }) => (
  <CardWrapper>
    <Image src={`https://placem.at/things/?w=500&random=${withPictureOf}`} />
  </CardWrapper>
);

export default Card;
