import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { kebabCase } from 'lodash';

export const NewsList = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((raw) => raw.json())
			.then((data) => {
				setPosts(data);
			});
	}, []);

	return (
		<div>
			<h2>Post list</h2>

			<ul>
				{posts.map(({ id, title }) => {
					const url = '/news/' + kebabCase(title) + '-' + id;
					// aut amet sed
					// /news/aut-amet-sed-91
					return (
						<li key={id}>
							<Link to={url}>{title}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
