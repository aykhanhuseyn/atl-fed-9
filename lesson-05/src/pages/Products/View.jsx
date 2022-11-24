import { useEffect, useState } from 'react';
import { unsplash } from '../../api';

export const View = () => {
	const [img, setImg] = useState();
	useEffect(() => {
		(async () => {
			const data = await unsplash.photos.getRandom();

			console.log(data.response.alt_description);
			setImg({ src: data.response.urls.full, alt: data.response.alt_description });
		})();
	}, []);

	return (
		<div>
			<h1>View</h1>
			{img && <img {...img} />}
		</div>
	);
};

// export const viewLoader = () => unsplash.search('shider-man');
// export const viewLoader = async ({ param }) => {
// 	const data = await unsplash.photos.getRandom();

// 	console.log({ data, param });
// 	return data;
// };
