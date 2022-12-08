import styled from 'styled-components';

const viewTypes = {
	primary:
		'radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)',
	default: '#ffffff',
	gray: '#373F68',
};

export const View = styled.div`
	padding: 24px;
	border-radius: 10px;
	background: ${({ type }) => viewTypes[type] ?? viewTypes.default};
`;
