import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  width: 500px;

  margin-left: 214px;
`;

export const Button = styled.button`
  border: 1px solid;
  color: rgb(63, 94, 251);
  border-radius: 4px;
  font-weight: 500;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  cursor: pointer;
  transition: 0.4s;
  color: #f0eaea;
  &:hover {
    background: radial-gradient(
      circle,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%
    );
  }
`;

export const Loading = styled.div`
  margin: 0;
  top: 553px;
  left: 540px;
  color: red;
  font-size: 25px;
`;
