import styled from 'styled-components';

export const Container = styled.div`
	padding-bottom: 15px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const Content = styled.div`
	display: flex;
	flex-direction: row;

	img {
		border-radius: 4px;

		&.h300 {
			height: 300px;
		}
	}
`;

export const Infos = styled.section`
	width: 100%;
	margin-left: 15px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Favorite = styled.div`
	display: flex;
	justify-content: flex-end;

	button {
		padding: 10px 20px;

		background: ${({ theme }) => theme.colors.favorite};
		color: ${({ theme }) => theme.colors.secondary};

		border-radius: 4px;

		display: flex;

		> svg {
			margin-left: 10px;
		}

		transition: opacity 0.2s;

		&:hover {
			opacity: 0.6;
		}

		&:disabled {
			pointer-events: none;
			opacity: 0.6;
		}
	}
`;

export const Title = styled.h3`
	color: ${({ theme }) => theme.colors.secondary};
	margin-bottom: 5px;
`;

export const Date = styled.span`
	color: ${({ theme }) => theme.colors.quaternary};
	font-weight: 500;
`;

export const Overview = styled.p`
	color: ${({ theme }) => theme.colors.quaternary};
	margin-top: 10px;
	line-height: 24px;

	text-align: justify;
`;
