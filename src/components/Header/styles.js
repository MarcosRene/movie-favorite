import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  padding: 0 20px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  nav {
    padding: 10px;

    a {
      margin: 0 20px;
      color: ${({ theme }) => theme.colors.secondary};
      text-decoration: none;
      letter-spacing: 4px;

      transition: opacity 0.2s;

      &:hover {
        opacity: 0.6;
      }

      &.btn {
        padding: 10px;

        border: 0;
        border-radius: 4px;
        background: ${({ theme }) => theme.colors.favorite};
      }
    }
  }
`;
