import H1 from '../elements/H1';
import Navigation from '../components/Navigation';

const tailWidth = 50;
const tickWidth = 25;

export default function Flex() {
	// Don't judge me for all these in line styles,
	// I am outlining some CSS classes.
	return (
		<>
			<Navigation />
			<H1 className="text-3xl font-bold text-center">Flex Graph</H1>
			<div style={{ margin: '0 auto', maxWidth: 750 }}>
				<div style={{ display: 'flex', marginBottom: '2px' }}>
					<div style={{ flex: '0 0 ' + tickWidth + 'px' }}>#1</div>
					<p
						style={{
							backgroundColor: '#ef476f',
							flex: 'grow',
							paddingLeft: '4px',
							paddingRight: '4px',
						}}
					>
						The box in question was, as I say, oblong. It was about six feet in
						length by two and a half in breadth;
					</p>
					<div style={{ flex: '0 0 ' + tailWidth + 'px' }}>(33.3%)</div>
				</div>
				<div style={{ display: 'flex', marginBottom: '2px' }}>
					<div style={{ flex: '0 0 ' + tickWidth + 'px' }}>#2</div>
					<p
						style={{
							backgroundColor: '#06d6a0',
							flex: 'grow',
							paddingLeft: '4px',
							paddingRight: '4px',
						}}
					>
						Call me Ishmael. Some years ago—never mind how long precisely—having
						little or no money in my purse
					</p>
					<div style={{ flex: '0 0 ' + tailWidth + 'px' }}>(25.0%)</div>
				</div>
				<div style={{ display: 'flex', marginBottom: '2px' }}>
					<div style={{ flex: '0 0 ' + tickWidth + 'px' }}>#3</div>
					<p
						style={{
							backgroundColor: '#e85d04',
							flex: 'grow',
							paddingLeft: '4px',
							paddingRight: '4px',
						}}
					>
						As Gregor Samsa awoke one morning
					</p>
					<div style={{ flex: '0 0 ' + tailWidth + 'px' }}>(16.0%)</div>
				</div>
				<div style={{ display: 'flex', marginBottom: '2px' }}>
					<div style={{ flex: '0 0 ' + tickWidth + 'px' }}>#4</div>
					<p
						style={{
							backgroundColor: '#415a77',
							flex: 'grow',
							paddingLeft: '4px',
							paddingRight: '4px',
						}}
					>
						hello world
					</p>
					<div style={{ flex: '0 0 ' + tailWidth + 'px' }}>(12.7%)</div>
				</div>
			</div>
		</>
	);
}
