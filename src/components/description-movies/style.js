import styled from "styled-components";

export const ContainerDescription = styled.div`
  width: 500px;
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

export const Title = styled.p`
  font-weight: 700;
  font-size: 40px;
  color: #ffffff;
`;

export const SubTitle = styled.p`
  font-weight: 700;
  font-size: 32px;
  color: #ffffff;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  opacity: 0.7;
`;

export const Button = styled.button`
  width: 193px;
  height: 56px;
  margin-top: 16px;

  background: #fa4776;
  border-radius: 41px;

  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  font-weight: 600;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: 0.04em;
  color: #ffffff;

  transition: 0.3s;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  &:active {
    opacity: 0.5;
  }
`;
