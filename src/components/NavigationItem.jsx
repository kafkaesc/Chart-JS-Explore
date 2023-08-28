import { Link } from 'react-router-dom';

export default function NavigationItem({ children, to }) {
	return (
		<li className="inline-block p-0">
			<Link to={to} className="inline-block px-3 py-3 hover:bg-gray-400">
				{children}
			</Link>
		</li>
	);
}
