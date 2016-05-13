import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import product from './Modeldata';
export default class FilterableProductTable extends React.Component {
    constructor(pros) {
        super(pros);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }
    handleUserInput(filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    }
    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onUserInput={this.handleUserInput.bind(this)} />
                <ProductTable products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}/>
            </div>
        )
    }
}
ReactDOM.render(<FilterableProductTable products={product} />, document.getElementById("product"));