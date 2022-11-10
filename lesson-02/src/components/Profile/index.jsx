import './style.css';

const person = {
	name: 'aynur',
	surname: 'dadashova',
	email: 'leiadgzll@gmail.com',
	img: 'https://i.imgflip.com/7019bo.jpg',
};

export const Profile = () => {
	return (
		<div className='profile'>
			<img src={person.img} alt={`${person.name} ${person.surname}`} />
			<h1>{`${person.name} ${person.surname}`}</h1>
			<a href={`mailto:${person.email}`}>{person.email}</a>
		</div>
	);
};
