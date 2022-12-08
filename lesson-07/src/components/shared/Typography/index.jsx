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

export const Title = styled.h6`
	font-family: 'Jost';
	font-style: normal;
	font-weight: 700;
	color: #3a4374;
	opacity: 0.96;
	margin: 0;

	${({ level }) => {
		switch (level) {
			case '1':
				return `
          font-size: 24px;
          line-height: 35px;
          letter-spacing: -0.333333px;
        `;
			case '2':
				return `
          font-size: 20px;
          line-height: 29px;
          letter-spacing: -0.25px;
        `;
			case '4':
				return `
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.194444px;
        `;

			default:
				return `
          font-size: 18px;
          line-height: 26px;
          letter-spacing: -0.25px;
        `;
		}
	}}
`;

export const Typography = styled.span`
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
