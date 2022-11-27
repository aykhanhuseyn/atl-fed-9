import { useLoaderData } from 'react-router-dom';
import { unsplash } from '../../api';

export const View = () => {
	const data = useLoaderData();

	console.log(data);

	return (
		<div>
			<h1>View</h1>
			{data && <img width='100%' src={data.urls.raw} alt='unsplash' />}
		</div>
	);
};

export const viewLoader = async ({ param }) => {
	const data = await unsplash.photos.getRandom();
	return data.response;
};
