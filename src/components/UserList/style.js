import styled from "styled-components";

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  min-width: 50vw;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50vw;
  gap: 35px;
  height: calc(100vh - 270px);
  margin-block-start: 30px;
  overflow-y: scroll;
  border: 2px outset #dcdcdc;
  background: #6f6f6f;
  padding: 2em;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 128px;
  gap: 2px;
  overflow: hidden;
`;

export const UserPicture = styled.img`
  border-radius: 45%;
  height: 128px;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    margin-inline-end: 8px;
  }
`;
