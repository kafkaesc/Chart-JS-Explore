import NavigationItem from './NavigationItem';

const pages = [
	{ path: '/Home', text: 'Home' },
	{ path: '/About', text: 'About' },
	{ path: '/Dynamic', text: 'Dynamic' },
	{ path: '/Test', text: 'Test' },
];

export default function Navigation() {
	return (
		<ul className="w-full text-center bg-gray-200">
			{pages.map((page) => {
				return (
					<NavigationItem key={`nav-${page.text.toLowerCase()}`} to={page.path}>
						{page.text}
					</NavigationItem>
				);
			})}
		</ul>
	);
}
