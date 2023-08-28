import H1 from '../elements/H1';
import Navigation from '../components/Navigation';

export default function Home() {
	return (
		<>
			<Navigation />
			<H1 className="text-3xl font-bold text-center">Home</H1>
		</>
	);
}
