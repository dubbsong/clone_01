import React from 'react';
import styled from 'styled-components';
import bg from 'assets/bg_tv.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: top center;
  height: 80vh;
  position: relative;
`;

const Gradient = styled.div`
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(40, 40, 40, 0.6),
    rgba(20, 20, 20, 1)
  );
  height: 80vh;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  padding: 0 4%;
  width: 35%;

  @media (max-width: 768px) {
    top: 60%;
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 1.2px;
  margin-bottom: 8px;
  text-shadow: 5px 5px 20px #141414;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Button = styled.button`
  width: 120px;
  height: 30px;
  background-color: rgba(51, 51, 51, 0.4);
  color: inherit;
  font-size: 14px;
  letter-spacing: 1.5px;
  border-width: 0;
  border-radius: 2px;
  margin-right: 8px;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
    color: #000000;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 85px;
    height: 22px;
    font-size: 8px;
  }
`;

const Overview = styled.p`
  font-size: 16px;
  letter-spacing: 1.2px;
  line-height: 1.2;
  color: #e6e6e6;
  text-shadow: 5px 5px 20px #141414;
  margin-top: 8px;
`;

const StyledIcon = styled(FontAwesomeIcon)``;

export default () => (
  <Container>
    <Gradient />
    <Content>
      <Title>Love, Death + Robots</Title>
      <Button>
        <StyledIcon icon={faPlay} /> Play
      </Button>
      <Button>
        <StyledIcon icon={faPlus} /> My List
      </Button>
      <Overview>
        Long after the fall of humanity, three robots embark on a sightseeing
        tour of a post-apocalyptic city.
      </Overview>
    </Content>
  </Container>
);
