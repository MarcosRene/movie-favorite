import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperContainer = styled.div`
	padding: 0 20px;
`;

const Content = styled.div`
	width: 1024px;
	margin: 0 auto;
`;

export default function Container({ children }) {
	return (
		<WrapperContainer>
			<Content>{children}</Content>
		</WrapperContainer>
	);
}

Container.propTypes = {
	children: PropTypes.objectOf.isRequired,
};
