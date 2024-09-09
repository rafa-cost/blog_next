import styled, { css } from 'styled-components';

export const Container = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    margin-bottom: ${theme.spacings.medium};

  `}
  img {
    object-fit: fill;
    width: 100%;
    height: 400px;
  }
`;
