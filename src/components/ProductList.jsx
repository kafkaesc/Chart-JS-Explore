import ProductCard from './ProductCard';

/*
products => array of product objects
*/
export default function ProductList({ products }) {
	return (
		<>
			{products.map((pr) => (
				<ProductCard key={pr.name + '-' + pr.released} product={pr} />
			))}
		</>
	);
}
