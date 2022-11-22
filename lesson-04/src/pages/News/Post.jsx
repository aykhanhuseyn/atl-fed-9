import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const SingleNews = () => {
	const [post, setPost] = useState({});
	const { slag } = useParams();
	// qui-est-esse-2
	const id = slag.split('-').at(-1);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((raw) => raw.json())
			.then((data) => {
				setPost(data);
			});
	}, []);

	return (
		<div>
			<h3>SingleNews</h3>
			<h2>
				{post.id} - {post.title}
			</h2>
			<h2>{post.body}</h2>
		</div>
	);
};
