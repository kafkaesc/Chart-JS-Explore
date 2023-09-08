import H1 from '../elements/H1';
import Navigation from '../components/Navigation';
import YogaBarChart from '../components/YogaBarChart';
import './Flex.css';

const chartData = [
	{ label: '#1', tailLabel: '(46.3%)', value: 46.3 },
	{ label: '#2', tailLabel: '(25.0%)', value: 25 },
	{ label: '#3', tailLabel: '(16.0%)', value: 16 },
	{ label: '#4', tailLabel: '(12.7%)', value: 12.7 },
	{ label: '#5', tailLabel: '(100.0%)', value: 100 },
];

export default function Flex() {
	return (
		<>
			<Navigation />
			<H1 className="text-3xl font-bold text-center">Flex Graph</H1>
			<div className="max-w-2xl mx-auto">
				<YogaBarChart chartData={chartData} />
				{/*<YogaBarChart chartData={chartData} direction="up" />*/}
			</div>
		</>
	);
}
