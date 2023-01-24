import styled from "styled-components";

export const Container = styled.div`
  width: 520px;
  padding: 50px 60px 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 560px) {
    width: 100%;
    padding: 20px;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  color: #fff;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  opacity: 0.7;
`;

export const Button = styled.button`
  width: 194px;
  height: 56px;
  margin-top: 16px;

  background: #fa4776;
  border-radius: 40px;

  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  font-weight: 600;
  font: 14px;
  color: #fff;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  &:active {
    opacity: 0.5;
  }
`;
