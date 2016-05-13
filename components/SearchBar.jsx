import React from 'react';
export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange() {
        this.props.onUserInput(
            this.filterTextInput.value, this.refs.inStockOnlyInput.checked
        );
    }

    render() {
        return (
            <form>
                <input type ="text" placeholder="Search..."
                    ref={(ref) => this.filterTextInput = ref}
                    value={this.props.filterText}
                    onChange={()=>this.handleChange()} />
                <p>
                    <input type="checkbox"
                        // ref={(ref) => this.inStockOnlyInput = ref}
                        ref="inStockOnlyInput"
                        checked={this.props.inStockOnly}
                        onChange={this.handleChange.bind(this) } />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        )
    }
}