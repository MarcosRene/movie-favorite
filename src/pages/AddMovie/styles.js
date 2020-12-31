import styled from 'styled-components';

export const Content = styled.div`
	margin-top: 60px;

	form {
		input {
			width: 100%;

			padding: 15px;

			border: none;
			border-radius: 4px;

			color: ${({ theme }) => theme.colors.quaternary};

			&::placeholder {
				color: ${({ theme }) => theme.colors.quaternary};
			}
		}
	}
`;

export const MovieInfo = styled.ul`
	width: 100%;
	margin-top: 15px;
	list-style: none;

	li {
		margin: 15px 0;
	}
`;
