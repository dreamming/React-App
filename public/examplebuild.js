webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsUpdate = __webpack_require__(177);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// ------------------------------------------------------------------------------------------------------------------------------------
	// class HelloWorld extends React.Component{
	//     constructor(props){
	//         super(props);
	//     }
	//     render(){
	//         return (
	//             <p>
	//                 Hello <input type="text" placeholder="Your name here..."/>!
	//                 It is {this.props.date.toTimeString()}
	//             </p>
	//         )
	//     }
	// }
	// setInterval(()=>{
	//     ReactDOM.render(<HelloWorld date={new Date()} />,document.getElementById("example"));
	// },500);

	// ------------------------------------------------------------------------------------------------------------------------------------
	// var myDivElement = <div>Wu Ha</div>
	// setInterval(()=>{
	//     ReactDOM.render(myDivElement,document.getElementById("example"));
	// },500);

	//------------------------------------------------------------------------------------------------------------------------------------
	// function FancyCheckBox(props) {

	//     let fancyClass = props.checked ? 'FancyChecked' : 'FancyUnchecked';
	//     return (
	//         <div className={fancyClass} {...props}>
	//             {props.children}
	//         </div>
	//     )
	// }
	// ReactDOM.render(
	//     <FancyCheckBox checked={true} onClick={console.log.bind(console) }>
	//         Hello world!
	//     </FancyCheckBox>,
	//     document.getElementById('example')
	// );
	//------------------------------------------------------------------------------------------------------------------------------------
	// function FancyCheckBox(props){
	//     let fancyClass = props.checked ? 'FancyChecked' : 'FancyUnchecked';
	//     let fancyTitle = props.checked ? 'X'+props.title:'O'+props.title;
	//     return (
	//         <label>
	//             <input
	//                 className={fancyClass}
	//                 type={props.type}
	//                 checked={props.checked}
	//                 {...props}
	//             />
	//             {fancyTitle}
	//         </label>
	//     )
	// }
	// ReactDOM.render(<FancyCheckBox type={"checkbox"} checked={true} title={"dmz"} onClick={console.log.bind(console)} />,document.getElementById("example"));
	//------------------------------------------------------------------------------------------------------------------------------------
	// class Form extends React.Component {
	//     constructor(props) {
	//         super(props);
	//         this.state = { value: '' };       
	//     }
	//     handleChange(e) {
	//         let value = e.target.value;
	//         console.log(value);
	//         this.setState({ value: value });
	//     }
	//     shouldComponentUpdate(nextProps, nextState) {
	//         if (nextState.value === this.state.value) {
	//             return false;
	//         }
	//         return true;
	//     }
	//     componentDidMount() {
	//         this.myTextInput.focus();
	//         // console.log(this.props.dmz);
	//     }
	//     // <!-- antipattern: DO NOT DO THIS! -->
	//     // <textarea name="description" onChange={this.handleChange.bind(this)}>This is the description.</textarea>
	//     // If you do decide to use children, they will behave like defaultValue.

	//     render() {
	//         return (
	//             <div>
	//                 <input type="text" ref={(ref) => this.myTextInput = ref} defaultValue="HelloWorld" value={this.state.value} onChange={this.handleChange.bind(this) } placeholder="Please enter..."/>

	//                 <textarea name="description" value={"name:\nage:"}  onChange={this.handleChange.bind(this) } />

	//                 <select value="B">
	//                     <option value="A">Apple</option>
	//                     <option value="B">Banana</option>
	//                     <option value="C">Cranberry</option>
	//                 </select>

	//                 <select  multiple={true} value={['B', 'C']}>
	//                     <option value="A">Apple</option>
	//                     <option value="B">Banana</option>
	//                     <option value="C">Cranberry</option>
	//                 </select>

	//             </div>
	//         )
	//     }
	// }
	// Form.propTypes = {
	//     children: PropTypes.any
	// };
	// ReactDOM.render(<Form />, document.getElementById("example"));

	// ------------------------------------------------------------------------------------------------------------------------------------
	// class CheckLink extends Component {

	//     componentWillMount() {
	//         console.log("componentWillMount");
	//     }
	//     componentDidMount() {
	//         console.log("componentDidMount");
	//     }

	//     constructor(props) {
	//         super(props);
	//         console.log(props);
	//     }
	//     render() {
	//         return (
	//             <a {...this.props}>{'√ '}{this.props.children}</a>
	//         )
	//     }
	// }
	// ReactDOM.render(<CheckLink href="http://www.baidu.com" >Click Here !</CheckLink>, document.getElementById("example"));
	//------------------------------------------------------------------------------------------------------------------------------------
	// class Counter extends Component {
	//     constructor(props) {
	//         super(props);
	//         this.state = { count: props.initialCount };
	//         this.tick = this.tick.bind(this);
	//     }

	//     tick() {
	//         this.setState({ count: this.state.count + 1 });
	//     }
	//     render() {
	//         return (
	//             <div onClick={this.tick}>
	//                 Clicks: {this.state.count}
	//             </div>
	//         )
	//     }
	// }
	// Counter.propTypes = { initialCount: React.PropTypes.number };
	// Counter.defaultProps = { initialCount: 0 };
	// ReactDOM.render(<Counter />, document.getElementById("example"));
	//------------------------------------------------------------------------------------------------------------------------------------

	//Stateless Function
	// function HelloMessage(props){
	//     return <div>Hello {props.name}</div>
	// }
	// const HelloMessage=(props)=>(<div>Hello {props.name}</div>);
	// HelloMessage.defaultProps={name:"YM"};
	// ReactDOM.render(<HelloMessage />,document.getElementById("example"));

	//------------------------------------------------------------------------------------------------------------------------------------
	// require('../assets/example.css');
	// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
	// class TodoList extends Component {
	//     constructor(props) {
	//         super(props);
	//         this.state = { items: props.items };
	//         this.handleAdd = this.handleAdd.bind(this);
	//     }

	//     handleAdd() {
	//         let newItems = this.state.items.concat([prompt('Enter some text')]);
	//         this.setState({ items: newItems });
	//     }

	//     handleRemove(i) {
	//         let newItems = this.state.items.slice();
	//         newItems.splice(i, 1);
	//         this.setState({ items: newItems });
	//     }
	//     render() {
	//         let items = this.state.items.map((item, i) => {
	//             // console.log(item);
	//             // console.log(i);
	//             return (
	//                 <div key={item} onClick={this.handleRemove.bind(this, i) }>
	//                     {item}
	//                 </div>
	//             )
	//         });
	//         return (
	//             <div>
	//                 <button onClick={this.handleAdd}>Add Item</button>

	//                 {
	//                 // <ReactCSSTransitionGroup transitionName="example" transitionAppearTimeout={500} transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
	//                 //     {items}
	//                 // </ReactCSSTransitionGroup>
	//                 }
	//                 {/*
	//                 <ReactCSSTransitionGroup transitionName={ {
	//                     enter:'enter',
	//                     enterActive:'enterActive',
	//                     leave:'leave',
	//                     leaveActive:'leaveActive',
	//                     appear:'appear',
	//                     appearActive:'appearActive'
	//                 }} transitionAppearTimeout={500} transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
	//                 {items}
	//                 </ReactCSSTransitionGroup>
	//                 */}
	//                 {
	//                 //ReactCSSTransitionGroup 默认span
	//                 //render a <ul> with CSS class animated-list
	//                 }
	//                 <ReactCSSTransitionGroup component="ul" className="animated-list" transitionName={ {
	//                     enter:'enter',
	//                     leave:'leave',
	//                     appear:'appear',
	//                 }} transitionAppearTimeout={500} transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
	//                 {items}
	//                 </ReactCSSTransitionGroup>

	//                 <ReactCSSTransitionGroup transitionName={ {
	//                     enter:'enter',
	//                     leave:'leave',
	//                     appear:'appear',
	//                 } } transitionAppearTimeout={500} transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
	//                 <img src={this.props.src} key={this.props.src} />
	//                 </ReactCSSTransitionGroup>

	//             </div>
	//         )
	//     }
	// }
	// TodoList.propTypes = { src:React.PropTypes.string.required };
	// TodoList.defaultProps={items: ['hello', 'world', 'click', 'me'] , src:"C:\Users\Public\Pictures\Sample Pictures\Chrysanthemum.jpg"};
	// ReactDOM.render(<TodoList />, document.getElementById('example'));
	//------------------------------------------------------------------------------------------------------------------------------------

	//className and style props are automatically merged
	// import cloneWithProps from 'react-addons-clone-with-props';
	// const _makeBlue=(element)=>{
	//     return cloneWithProps(element,{style: {color: 'blue'}});
	// }
	// class Blue extends Component{

	//     render(){
	//         let blueChildren = React.Children.map(this.props.children,_makeBlue);
	//         return <div>{blueChildren}</div>
	//     }
	// }
	// ReactDOM.render(
	//   <Blue>
	//     <p>This text is blue.</p>
	//     <p>This text is blue too.</p>
	//   </Blue>,
	//   document.getElementById('example')
	// );
	//------------------------------------------------------------------------------------------------------------------------------------
	//EMC5
	// var Swapper = React.createClass({
	//   propTypes: {
	//     // `leftChildren` and `rightChildren` can be a string, element, array, etc.
	//     leftChildren: React.PropTypes.node,
	//     rightChildren: React.PropTypes.node,

	//     swapped: React.PropTypes.bool
	//   },
	//   render: function() {
	//     var children;
	//     if (this.props.swapped) {
	//       children = [this.props.rightChildren, this.props.leftChildren];
	//     } else {
	//       children = [this.props.leftChildren, this.props.rightChildren];
	//     }
	//     return <div>{children}</div>;
	//   }
	// });
	//------------------------------------------------------------------------------------------------------------------------------------
	//EMC6
	// class Swapper extends Component{
	//     constructor(props){
	//         super(props);
	//     }
	//     render(){
	//         let children;
	//         if (this.props.swap) {
	//             children = [this.props.left,this.props.right];
	//         }else{
	//             children = [this.props.right,this.props.left];
	//         }
	//         return (
	//             <div>
	//                 {children}
	//             </div>
	//         );
	//     }
	// }
	// Swapper.propTypes = {left:React.PropTypes.string.required};
	// import createFragment from 'react-addons-create-fragment';
	// class SwapperWithKey extends Component{
	//     constructor(props){
	//         super(props);
	//     }
	//     render(){
	//         let children;
	//         if(this.props.swap){
	//             children = createFragment({
	//                 left:this.props.left,right:this.props.right
	//             });
	//         }else{
	//             children = createFragment({
	//                 right:this.props.right,left:this.props.left
	//             });
	//         }
	//     }
	// }
	// SwapperWithKey.propTypes={left:React.PropTypes.string.required};
	// ReactDOM.render(<Swapper swap={true} left={"dmz"} right={"ym"}/>,document.getElementById('example'));
	// In the future, createFragment may be replaced by an API such as
	// return (
	//   <div>
	//     <x:frag key="right">{this.props.rightChildren}</x:frag>,
	//     <x:frag key="left">{this.props.leftChildren}</x:frag>
	//   </div>
	// );
	//------------------------------------------------------------------------------------------------------------------------------------

	//Immutability
	// require("react/package.json"); // react is a peer dependency.
	__webpack_require__(179);

	var Immutable = function (_Component) {
	    _inherits(Immutable, _Component);

	    function Immutable(props) {
	        _classCallCheck(this, Immutable);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Immutable).call(this, props));

	        console.log(props);
	        _this.state = { keys: props.keys };
	        _this.tick = _this.tick.bind(_this);
	        return _this;
	    }

	    _createClass(Immutable, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            console.log(this.state);
	            console.log(nextState);
	            if (nextState.keys === this.state.keys) {
	                return false;
	            }
	            console.log("yes");
	            return true;
	        }
	    }, {
	        key: 'tick',
	        value: function tick() {
	            var newKeys = (0, _reactAddonsUpdate2.default)(this.state.keys, { keys: { $push: [4] } });
	            this.setState({ keys: newKeys });
	        }

	        // tick(){
	        //     // immutability
	        //     //Simple push
	        //     let newKeys = update(this.state.keys,{$push: [4]});
	        //     this.setState({keys:newKeys});

	        //     /*
	        //     Nested Collections   
	        //     // var collection = [1, 2, {a: [12, 17, 15]}];
	        //     // var newCollection = update(collection, {2: {a: {$splice: [[1, 1, 13, 14]]}}});
	        //     // => [1, 2, {a: [12, 13, 14, 15]}]
	        //     // This accesses collection's index 2, key a,
	        //     // and does a splice of one item starting from index 1 (to remove 17)
	        //     // while inserting 13 and 14.
	        //     */

	        //     /*
	        //     Updating a value based on its current one
	        //     var obj = {a: 5, b: 3};
	        //     var newObj = update(obj, {b: {$apply: function(x) {return x * 2;}}});
	        //     // => {a: 5, b: 6}
	        //     // This is equivalent, but gets verbose for deeply nested collections:
	        //     var newObj2 = update(obj, {b: {$set: obj.b * 2}});
	        //     */

	        //     /*
	        //     (Shallow) merge
	        //     var obj = {a: 5, b: 3};
	        //     var newObj = update(obj, {$merge: {b: 6, c: 7}}); // => {a: 5, b: 6, c: 7}    
	        //     */

	        // }

	    }, {
	        key: 'render',
	        value: function render() {
	            console.log(this.state.keys.keys);
	            var items = this.state.keys.keys.map(function (item) {
	                return _react2.default.createElement(
	                    'p',
	                    null,
	                    item
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'button',
	                    { onClick: this.tick },
	                    'Click me'
	                ),
	                items
	            );
	        }
	    }]);

	    return Immutable;
	}(_react.Component);

	Immutable.propTypes = { keys: _react2.default.PropTypes.any };
	Immutable.defaultProps = { keys: { keys: [1, 2, 3] } };
	_reactDom2.default.render(_react2.default.createElement(Immutable, null), document.getElementById('example'));
	//------------------------------------------------------------------------------------------------------------------------------------

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(178);

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */

	/* global hasOwnProperty:true */

	'use strict';

	var _assign = __webpack_require__(4);

	var keyOf = __webpack_require__(25);
	var invariant = __webpack_require__(7);
	var hasOwnProperty = {}.hasOwnProperty;

	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return _assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}

	var COMMAND_PUSH = keyOf({ $push: null });
	var COMMAND_UNSHIFT = keyOf({ $unshift: null });
	var COMMAND_SPLICE = keyOf({ $splice: null });
	var COMMAND_SET = keyOf({ $set: null });
	var COMMAND_MERGE = keyOf({ $merge: null });
	var COMMAND_APPLY = keyOf({ $apply: null });

	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];

	var ALL_COMMANDS_SET = {};

	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});

	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : invariant(false) : void 0;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, specValue) : invariant(false) : void 0;
	}

	function update(value, spec) {
	  !(typeof spec === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(false) : void 0;

	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(false) : void 0;

	    return spec[COMMAND_SET];
	  }

	  var nextValue = shallowCopy(value);

	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && typeof mergeObj === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(false) : void 0;
	    !(nextValue && typeof nextValue === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(false) : void 0;
	    _assign(nextValue, spec[COMMAND_MERGE]);
	  }

	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(false) : void 0;
	    !Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : void 0;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : void 0;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(false) : void 0;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }

	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }

	  return nextValue;
	}

	module.exports = update;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(154);

/***/ }

});