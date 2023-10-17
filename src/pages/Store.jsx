import { useState } from 'react';
import Button from '../elements/Button';
import H1 from '../elements/H1';
import ProductList from '../components/ProductList';
import useSortProducts from '../hooks/useSortProducts';

const storeProducts = [
	{
		name: 'Cottons Socks',
		price: 10,
		currency: '$',
		description: 'Easy to wash, keeps your feet warm, set of six.',
		released: 2006,
	},
	{
		name: 'Fancy Silk Scarf',
		price: 150,
		currency: '$',
		description: 'Pure silk, exotic patterns, a hit at any party',
		released: 1997,
	},
	{
		name: 'T-shirt',
		price: 30,
		currency: '$',
		description:
			'Various designs, pick one to match your favorite artist or movie',
		released: 2007,
	},
	{
		name: 'Baseball Cap',
		price: 20,
		currency: '$',
		description: 'Represent your favorite team, the Boston Red Sox, est. 1901',
		released: 1901,
	},
];

export default function Store() {
	const [products, setProducts] = useState(storeProducts);
	const { sort } = useSortProducts(products);

	function handleSort(attribute, order) {
		const newProducts = sort(attribute, order);
		setProducts([...newProducts]);
	}

	return (
		<>
			<H1>Storefront</H1>
			<div>
				<Button onClick={() => handleSort('name', 'ascend')}>Name, Asc</Button>
				<Button onClick={() => handleSort('name', 'descend')}>
					Name, Desc
				</Button>
				<Button onClick={() => handleSort('price', 'ascend')}>
					Price, Asc
				</Button>
				<Button onClick={() => handleSort('price', 'descend')}>
					Price, Desc
				</Button>
			</div>
			<ProductList products={products} />
		</>
	);
}
