import styled from 'styled-components';

// export const Content = styled.div`
// 	width: 1024px;
// 	margin: 0 auto;
// 	padding: 0 20px;
// `;

export const Grid = styled.ul`
	margin-top: 60px;

	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 20px;
	list-style: none;
`;
