import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './pages/About';
import App from './App';
import Dynamic from './pages/Dynamic';
import Yoga from './pages/Yoga';
import Error from './Error';
import Home from './pages/Home';
import Test from './pages/Test';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/About', element: <About /> },
			{ path: '/Dynamic', element: <Dynamic /> },
			{ path: '/Yoga', element: <Yoga /> },
			{ path: '/Home', element: <Home /> },
			{ path: '/Test', element: <Test /> },
		],
	},
]);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
