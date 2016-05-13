import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
export default class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach((product) => {
            if(product.name.indexOf(this.props.filterText)===-1||(!this.props.inStockOnly===product.stocked)){
                return;
            }
            if (lastCategory !== product.category) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}