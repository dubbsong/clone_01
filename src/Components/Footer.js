import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 4%;
`;

const CopyRight = styled.p`
  font-size: 16px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
`;

export default () => (
  <Container>
    <CopyRight>
      ©2019{' '}
      <a
        href="https://dubbsong.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        ㅇㅁㅂ
      </a>
    </CopyRight>
    <a
      href="https://dubbsong.github.io"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledIcon icon={faGithubSquare} />
    </a>
  </Container>
);
