import H1 from '../elements/H1';
import H2 from '../elements/H2';
import Navigation from '../components/Navigation';
import YogaBarChart from '../components/YogaBarChart';
import './Flex.css';

const chartData = [
	{ label: '#1', tailLabel: '(46.3%)', value: 46.3 },
	{ label: '#2', tailLabel: '(25.0%)', value: 25 },
	{ label: '#3', tailLabel: '(16.0%)', value: 16 },
	{ label: '#4', tailLabel: '(12.7%)', value: 12.7 },
	{ label: '#5', tailLabel: '(100.0%)', value: 100 },
	{ label: '#6', tailLabel: '(10.0%)', value: 10.0 },
	{ label: '#5', tailLabel: '(50.0%)', value: 50.0 },
	{ label: '#8', tailLabel: '(20.0%)', value: 20.0 },
	{ label: '#9', tailLabel: '(60.0%)', value: 60.0 },
	{ label: '#10', tailLabel: '(30.0%)', value: 30.0 },
	{ label: '#11', tailLabel: '(70.0%)', value: 70.0 },
	{ label: '#12', tailLabel: '(40.0%)', value: 40.0 },
];

export default function Flex() {
	return (
		<>
			<Navigation />
			<H1 className="mb-2">Flex Graph</H1>
			<div className="max-w-2xl mx-auto">
				<div className="py-2 mb-4 border">
					<H2>Default / Rightward</H2>
					<YogaBarChart chartData={chartData} />
				</div>
				<div className="py-2 mb-4 border">
					<H2>Leftward</H2>
					<YogaBarChart chartData={chartData} direction="left" />
				</div>
				<div className="py-2 mb-4 border">
					<H2>Upward</H2>
					<YogaBarChart chartData={chartData} direction="up" />
				</div>
			</div>
		</>
	);
}
