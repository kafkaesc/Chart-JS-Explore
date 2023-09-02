import H1 from '../elements/H1';
import Navigation from '../components/Navigation';
import './Flex.css';

const tailWidth = 50;
const tickWidth = 25;

export default function Flex() {
	// Don't judge me for all these in line styles,
	// I am outlining some CSS classes.
	return (
		<>
			<Navigation />
			<H1 className="text-3xl font-bold text-center">Flex Graph</H1>
			<div className="flex-graph-page">
				<div className="fbg-row">
					<div style={{ flex: '0 0 ' + tickWidth + 'px' }}>#1</div>
					<p className="fbg-bar fbg-bar-bg-0">
						The box in question was, as I say, oblong. It was about six feet in
						length by two and a half in breadth;
					</p>
					<div style={{ flex: '0 0 ' + tailWidth + 'px' }}>(33.3%)</div>
				</div>
				<div className="fbg-row">
					<div style={{ flex: '0 0 ' + tickWidth + 'px' }}>#2</div>
					<p className="fbg-bar fbg-bar-bg-1">
						Call me Ishmael. Some years ago—never mind how long precisely—having
						little or no money in my purse
					</p>
					<div style={{ flex: '0 0 ' + tailWidth + 'px' }}>(25.0%)</div>
				</div>
				<div className="fbg-row">
					<div style={{ flex: '0 0 ' + tickWidth + 'px' }}>#3</div>
					<p className="fbg-bar fbg-bar-bg-2">
						As Gregor Samsa awoke one morning
					</p>
					<div style={{ flex: '0 0 ' + tailWidth + 'px' }}>(16.0%)</div>
				</div>
				<div className="fbg-row">
					<div style={{ flex: '0 0 ' + tickWidth + 'px' }}>#4</div>
					<p className="fbg-bar fbg-bar-bg-3">hello world</p>
					<div style={{ flex: '0 0 ' + tailWidth + 'px' }}>(12.7%)</div>
				</div>
			</div>
		</>
	);
}
