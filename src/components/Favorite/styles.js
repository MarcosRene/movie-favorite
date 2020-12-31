import styled from 'styled-components';

export const Container = styled.div`
	padding-bottom: 15px;

	transition: transform 0.2s;

	&:hover {
		transform: scale(1.1);
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;

	img {
		border-radius: 4px;
		height: 300px;
	}

	button {
		padding: 10px 20px;
		margin-top: 15px;

		background: ${({ theme }) => theme.colors.remove};
		color: ${({ theme }) => theme.colors.secondary};

		border-radius: 4px;

		display: flex;

		> svg {
			margin-left: auto;
		}

		transition: opacity 0.2s;

		&:hover {
			opacity: 0.6;
		}
	}
`;
