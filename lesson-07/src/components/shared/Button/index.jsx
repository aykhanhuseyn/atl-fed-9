import styled from 'styled-components';

const buttonTypes = {
	primary: {
		bg: '#AD1FEA',
		color: '#F2F4FE',
		hover: '#C75AF6',
	},
	secondary: {
		bg: '#4661E6',
		color: '#F2F4FE',
		hover: '#7C91F9',
	},
	default: {
		bg: '#3A4374;',
		color: '#F2F4FE',
		hover: '#656EA3',
	},
	danger: {
		bg: '#D73737',
		color: '#F2F4FE',
		hover: '#E98888',
	},
	text: {
		bg: 'transparent',
		color: '#647196',
		hover: 'transparent',
	},
};

export const Button = styled.button`
	border-radius: 4px;
	border: unset;
	background: unset;
	cursor: pointer;
	padding: 4px 8px;
	font-family: 'Jost';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	background-color: ${({ kind }) =>
		buttonTypes[kind]?.bg ?? buttonTypes.default.bg};
	color: ${({ kind }) => buttonTypes[kind]?.color ?? buttonTypes.default.color};
	:hover {
		background-color: ${({ kind }) =>
			buttonTypes[kind]?.hover ?? buttonTypes.default.hover};
	}
`;
