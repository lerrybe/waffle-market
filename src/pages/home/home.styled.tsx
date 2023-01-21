import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 360px;
  overflow-x: hidden;
`;

export const Background = styled.img`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: -1;
  object-fit: cover;
`;
