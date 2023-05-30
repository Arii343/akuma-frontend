import styled from "styled-components";

const LayoutSytled = styled.div`
  background-color: ${(props) => props.theme.backgroundColor.primary};
  padding: ${(props) => props.theme.spacing.medium};
  min-height: 100vh;
`;

export default LayoutSytled;
