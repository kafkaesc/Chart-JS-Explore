/*
product: {
	name: string,
	price: number,
	currency: string,
	description: string,
	released: number (year released)
}
*/
export default function ProductCard({ product }) {
	return (
		<div className="inline-block w-1/3 align-top">
			<div className="p-1 m-1 border">
				<p>{product.name}</p>
				<p>{product.description}</p>
				<p>
					{product.currency}
					{product.price}
				</p>
				<p>{product.released}</p>
			</div>
		</div>
	);
}
