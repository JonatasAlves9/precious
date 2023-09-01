import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 150px;
`;

export const ImageCoverFooter = styled.div`
  width: 100%;
  height: 250px;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  background-image: url('../../assets/images/coverAuthNonAuthorized.png');
  background-size: cover;
`;