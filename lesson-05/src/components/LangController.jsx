import React from 'react';
import { Navigate, Outlet, useParams, useLocation } from 'react-router-dom';
import { langList } from '../constants';

export const LangController = () => {
	const { lang } = useParams();
	const { pathname, search } = useLocation();

	if (langList.includes(lang)) return <Outlet />;

	return <Navigate to={`/${langList[0]}${pathname}${search}`} />;
};

// kazimshop.com => /az
// kazimshop.com/az => /*

// kazimshop.com/es => /az/es => /az/404
// kazimshop.com/about => /az/about
// kazimshop.com/products/search?name=iPhone+14&color=red => '/' + 'az' + '/' + 'products/search' + '?name=iPhone+14&color=red'
