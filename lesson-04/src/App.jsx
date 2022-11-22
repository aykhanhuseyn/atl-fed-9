import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, Loading, NotFound } from './components';
import { HomePage, AboutPage, News, NewsList, SingleNews } from './pages';

const LazyAboutPage = lazy(() => import('./pages/About'));

function App() {
	return (
		<div>
			<h1>Hello Router!</h1>
			{/* links */}
			<Layout>
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route index element={<HomePage />} />
						<Route path='/about-crazy' element={<AboutPage />} />
						<Route
							path='/about-lazy'
							element={
								<Suspense fallback={<Loading />}>
									<LazyAboutPage />
								</Suspense>
							}
						/>
						<Route path='news/*' element={<News />}>
							{/* <Route path='news' element={<News>1</News>}> */}
							<Route path=':slag' element={<SingleNews />} />
							<Route index element={<NewsList />} />
						</Route>
						{/* <Route path='products'></Route> */}
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Suspense>
			</Layout>
		</div>
	);
}

export default App;
