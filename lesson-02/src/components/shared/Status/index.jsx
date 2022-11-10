import './style.css';

export const Status = ({ statusName }) => {
	return <span className={`status ${statusName}`}>{statusName}</span>;
};
