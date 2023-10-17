import { useState } from 'react';

/* products: array of product objects */
export default function useSortProducts(products) {
	const [_products] = useState(products);

	/*
	attribute: string => indicates the object attribute to sort
							e.g.: name, price, description
	order: string => indicates the sort order,
							possibilities are ascending or descending
	*/
	function sort(attribute, order) {
		if (attribute === 'name' && order === 'ascend') {
			return _products.sort((a, b) => (a.name > b.name ? 1 : -1));
		} else if (attribute === 'name' && order === 'descend') {
			return _products.sort((a, b) => (a.name > b.name ? -1 : 1));
		} else if (attribute === 'price' && order === 'ascend') {
			return _products.sort((a, b) => a.price - b.price);
		} else if (attribute === 'price' && order === 'descend') {
			return _products.sort((a, b) => b.price - a.price);
		}
	}

	return { sort };
}
