webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _SearchBar = __webpack_require__(180);

	var _SearchBar2 = _interopRequireDefault(_SearchBar);

	var _ProductTable = __webpack_require__(181);

	var _ProductTable2 = _interopRequireDefault(_ProductTable);

	var _Modeldata = __webpack_require__(184);

	var _Modeldata2 = _interopRequireDefault(_Modeldata);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FilterableProductTable = function (_React$Component) {
	    _inherits(FilterableProductTable, _React$Component);

	    function FilterableProductTable(pros) {
	        _classCallCheck(this, FilterableProductTable);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FilterableProductTable).call(this, pros));

	        _this.state = {
	            filterText: '',
	            inStockOnly: false
	        };
	        return _this;
	    }

	    _createClass(FilterableProductTable, [{
	        key: 'handleUserInput',
	        value: function handleUserInput(filterText, inStockOnly) {
	            this.setState({
	                filterText: filterText,
	                inStockOnly: inStockOnly
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_SearchBar2.default, { filterText: this.state.filterText,
	                    inStockOnly: this.state.inStockOnly,
	                    onUserInput: this.handleUserInput.bind(this) }),
	                _react2.default.createElement(_ProductTable2.default, { products: this.props.products,
	                    filterText: this.state.filterText,
	                    inStockOnly: this.state.inStockOnly })
	            );
	        }
	    }]);

	    return FilterableProductTable;
	}(_react2.default.Component);

	exports.default = FilterableProductTable;

	_reactDom2.default.render(_react2.default.createElement(FilterableProductTable, { products: _Modeldata2.default }), document.getElementById("product"));

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchBar = function (_React$Component) {
	    _inherits(SearchBar, _React$Component);

	    function SearchBar(props) {
	        _classCallCheck(this, SearchBar);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).call(this, props));
	    }

	    _createClass(SearchBar, [{
	        key: "handleChange",
	        value: function handleChange() {
	            this.props.onUserInput(this.filterTextInput.value, this.refs.inStockOnlyInput.checked);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                "form",
	                null,
	                _react2.default.createElement("input", { type: "text", placeholder: "Search...",
	                    ref: function ref(_ref) {
	                        return _this2.filterTextInput = _ref;
	                    },
	                    value: this.props.filterText,
	                    onChange: function onChange() {
	                        return _this2.handleChange();
	                    } }),
	                _react2.default.createElement(
	                    "p",
	                    null,
	                    _react2.default.createElement("input", { type: "checkbox"
	                        // ref={(ref) => this.inStockOnlyInput = ref}
	                        , ref: "inStockOnlyInput",
	                        checked: this.props.inStockOnly,
	                        onChange: this.handleChange.bind(this) }),
	                    ' ',
	                    "Only show products in stock"
	                )
	            );
	        }
	    }]);

	    return SearchBar;
	}(_react2.default.Component);

	exports.default = SearchBar;

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ProductCategoryRow = __webpack_require__(182);

	var _ProductCategoryRow2 = _interopRequireDefault(_ProductCategoryRow);

	var _ProductRow = __webpack_require__(183);

	var _ProductRow2 = _interopRequireDefault(_ProductRow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProductTable = function (_React$Component) {
	    _inherits(ProductTable, _React$Component);

	    function ProductTable(props) {
	        _classCallCheck(this, ProductTable);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ProductTable).call(this, props));
	    }

	    _createClass(ProductTable, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var rows = [];
	            var lastCategory = null;
	            this.props.products.forEach(function (product) {
	                if (product.name.indexOf(_this2.props.filterText) === -1 || !_this2.props.inStockOnly === product.stocked) {
	                    return;
	                }
	                if (lastCategory !== product.category) {
	                    rows.push(_react2.default.createElement(_ProductCategoryRow2.default, { category: product.category, key: product.category }));
	                }
	                rows.push(_react2.default.createElement(_ProductRow2.default, { product: product, key: product.name }));
	                lastCategory = product.category;
	            });
	            return _react2.default.createElement(
	                'table',
	                null,
	                _react2.default.createElement(
	                    'thead',
	                    null,
	                    _react2.default.createElement(
	                        'tr',
	                        null,
	                        _react2.default.createElement(
	                            'th',
	                            null,
	                            'Name'
	                        ),
	                        _react2.default.createElement(
	                            'th',
	                            null,
	                            'Price'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'tbody',
	                    null,
	                    rows
	                )
	            );
	        }
	    }]);

	    return ProductTable;
	}(_react2.default.Component);

	exports.default = ProductTable;

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProductCategoryRaw = function (_React$Component) {
	    _inherits(ProductCategoryRaw, _React$Component);

	    function ProductCategoryRaw(props) {
	        _classCallCheck(this, ProductCategoryRaw);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ProductCategoryRaw).call(this, props));
	    }

	    _createClass(ProductCategoryRaw, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "tr",
	                null,
	                _react2.default.createElement(
	                    "th",
	                    { colSpan: "2" },
	                    this.props.category
	                )
	            );
	        }
	    }]);

	    return ProductCategoryRaw;
	}(_react2.default.Component);

	exports.default = ProductCategoryRaw;

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProductRow = function (_React$Component) {
	    _inherits(ProductRow, _React$Component);

	    function ProductRow(props) {
	        _classCallCheck(this, ProductRow);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ProductRow).call(this, props));
	    }

	    _createClass(ProductRow, [{
	        key: 'render',
	        value: function render() {
	            var name = this.props.product.stocked ? this.props.product.name : _react2.default.createElement(
	                'span',
	                { style: { color: 'red' } },
	                this.props.product.name
	            );
	            return _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(
	                    'td',
	                    null,
	                    name
	                ),
	                _react2.default.createElement(
	                    'td',
	                    null,
	                    this.props.product.price
	                )
	            );
	        }
	    }]);

	    return ProductRow;
	}(_react2.default.Component);

	exports.default = ProductRow;

/***/ },

/***/ 184:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var product = [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" }, { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" }, { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }, { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" }, { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" }, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }];
	exports.default = product;

/***/ }

});