import React, { Component, PropTypes  } from 'react';
import ReactDOM from 'react-dom';
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
// require("react-addons-perf");
// import update from 'react-addons-update';
// class Immutable extends Component{
//     constructor(props){
//         super(props);
//         console.log(props);
//         this.state={keys:props.keys};
//         this.tick=this.tick.bind(this);
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         console.log(this.state);
//         console.log(nextState);
//         if (nextState.keys === this.state.keys) {
//             return false;
//         }
//         console.log("yes");
//         return true;
//     }

//     tick(){
//         let newKeys = update(this.state.keys,{keys:{$push: [4]}});
//         this.setState({keys:newKeys});
//     }

//     // tick(){
//     //     // immutability
//     //     //Simple push
//     //     let newKeys = update(this.state.keys,{$push: [4]});
//     //     this.setState({keys:newKeys});

//     //     /*
//     //     Nested Collections    
//     //     // var collection = [1, 2, {a: [12, 17, 15]}];
//     //     // var newCollection = update(collection, {2: {a: {$splice: [[1, 1, 13, 14]]}}});
//     //     // => [1, 2, {a: [12, 13, 14, 15]}]
//     //     // This accesses collection's index 2, key a, 
//     //     // and does a splice of one item starting from index 1 (to remove 17) 
//     //     // while inserting 13 and 14.
//     //     */

//     //     /*
//     //     Updating a value based on its current one
//     //     var obj = {a: 5, b: 3};
//     //     var newObj = update(obj, {b: {$apply: function(x) {return x * 2;}}});
//     //     // => {a: 5, b: 6}
//     //     // This is equivalent, but gets verbose for deeply nested collections:
//     //     var newObj2 = update(obj, {b: {$set: obj.b * 2}});
//     //     */

//     //     /*
//     //     (Shallow) merge
//     //     var obj = {a: 5, b: 3};
//     //     var newObj = update(obj, {$merge: {b: 6, c: 7}}); // => {a: 5, b: 6, c: 7}     
//     //     */


//     // }

//     render(){
//         console.log(this.state.keys.keys);
//         let items=this.state.keys.keys.map((item)=>{
//             return (<p>{item}</p>);
//         });
//         return (
//         <div>
//             <button onClick={this.tick}>Click me</button>
//             {items}
//         </div> );
//     }
// }
// Immutable.propTypes={keys:React.PropTypes.any};
// Immutable.defaultProps={keys:{keys:[1,2,3]}};
// ReactDOM.render(<Immutable />,document.getElementById('example'));

//------------------------------------------------------------------------------------------------------------------------------------

/* If your React component's render function is "pure" 
(in other words, it renders the same result given the same props and state), 
 you can use this helper function for a performance boost in some cases.
 
 shallowCompare 组件要使用Immutability props
 */
// import shallowCompare from 'react-addons-shallow-compare';

// class SampleComponent extends Component{
//     constructor(props){
//         super(props);
//     }
//     shouldComponentUpdate(nextProps,nextState){
//         return shallowCompare(this,nextProps,nextState);
//     }
//     render(){
//         return (
//             <div className={this.props.className}>
//                 foo
//             </div>
//         )
//     }
// }
// SampleComponent.propTypes = {className:React.PropTypes.any};
// SampleComponent.defaultProps={className:"dmz"};
// ReactDOM.render(<SampleComponent />,document.getElementById('example'));

//------------------------------------------------------------------------------------------------------------------------------------

/**
 * mutability
 * object类型参数时
 * this.props equal nextProps ,同一个参数
 */
// class MutableC extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: props.value,name:props.name };
//         this.tick = this.tick.bind(this);
//     }
//     shouldComponentUpdate(nextProps, nextState) {
//         console.log("shouldComponentUpdate");
//         console.log(this.state.value);
//         console.log(nextState.value);
//         console.log(this.props.value);
//         console.log(nextProps.value);

//         // let re = this.state.value !== nextState.value;
//         let props = this.props.value.foo !==nextProps.value.foo;
//         let state = this.state.value.foo !==nextState.value.foo;


//         console.log("props:"+props);
//         console.log("state:"+state);
//         return props;
//     }
//     tick() {
//         let value = this.state.value;
//         value.foo += 'bar';
//         let name = this.state.name+' YM';
//         this.setState({ value: value,name:name });
//     }
//     render() {
//         return (
//             <div>
//                 <p>{this.state.value.foo}</p>
//                 <button onClick={this.tick}>Click Me.</button>
//             </div>
//         )
//     }
// }
// MutableC.propTypes = { value: React.PropTypes.object.isRequired };
// MutableC.defaultProps = { value: { foo: 'bar' }, name: "dmz" };
// ReactDOM.render(<MutableC />, document.getElementById('example'));

//------------------------------------------------------------------------------------------------------------------------------------

/**
 * pass props down at every level manually
 */
// var message = [{text:'A'},{text:'B'},{text:'C'},{text:'D'}];
// class Button extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <button style={{ background: this.props.color }}>
//                 {this.props.children}
//             </button>
//         )
//     }

// }
// Button.propTypes={color:React.PropTypes.string.isRequired};
// class Message extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div>
//                 {this.props.text}
//                 <Button color={this.props.color}>Delete</Button>
//             </div>
//         )

//     }

// }

// class MessageList extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         let color = "purple";
//         let items = this.props.message.map((message, i) => {
//             return (
//                 <Message key={message.text} text={message.text} color={color}/>
//             )
//         });

//         return (
//             <div>
//                 {items}
//             </div>
//         )
//     }
// }
// ReactDOM.render(<MessageList message={message}/>, document.getElementById('example'));

//------------------------------------------------------------------------------------------------------------------------------------

/**
 * pass props down at every level automatically
 */
// var message = [{ text: 'A' }, { text: 'B' }, { text: 'C' }, { text: 'D' }];
// class Button extends Component {
//     constructor(props,context) {
//         console.log("Button:");
//         console.log(context);
//         super(props);
//     }

//     render() {
//         return (
//             <button style={{ background: this.context.color }}>
//                 {this.props.children}
//             </button>
//         )
//     }

// }
// Button.contextTypes = { color: React.PropTypes.string.isRequired };
// class Message extends Component {
//     constructor(props,context) {
//         console.log("Message:");
//         console.log(context);
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 {this.props.text}
//                 <Button color={this.props.color}>Delete</Button>
//             </div>
//         )

//     }

// }
// class MessageList extends Component {
//     constructor(props,context) {
//         console.log("MessageList:");
//         console.log(context);
//         super(props);
//     }
//     //传递子组件上下文
//     getChildContext() {
//         return { color: "purple" };
//     }
//     render() {
//         let color = "red";
//         let items = this.props.message.map((message, i) => {
//             return (
//                 <Message key={message.text} text={message.text} color={color}/>
//             )
//         });

//         return (
//             <div>
//                 {items}
//             </div>
//         )
//     }
// }
// MessageList.childContextTypes = { color: React.PropTypes.string };
// ReactDOM.render(<MessageList message={message}/>, document.getElementById('example'));

//------------------------------------------------------------------------------------------------------------------------------------

/**
 * Referencing context in lifecycle methods 
 */
// void componentWillReceiveProps(
//   object nextProps, object nextContext
// )

// boolean shouldComponentUpdate(
//   object nextProps, object nextState, object nextContext
// )

// void componentWillUpdate(
//   object nextProps, object nextState, object nextContext
// )

// void componentDidUpdate(
//   object prevProps, object prevState, object prevContext
// )

//------------------------------------------------------------------------------------------------------------------------------------

/**
 * Referencing context in stateless functional components
 */
// function Button(props, context) {
//     return (
//         <button style={{ background: context.color }}>
//             {props.children}
//         </button>
//     )
// }
//or
// const Button = (props, context) => {
//         return (
//             <button style={{ background: context.color }}>
//                 {props.children}
//             </button>
//         )
// }
// Button.contextTypes = { color: React.PropTypes.string.isRequired };

// class Message extends Component {
//     getChildContext() {
//         return { color: "purple" };
//     }
//     render() {
//         return (
//             <Button>Delete</Button>
//         )
//     }
// }
// Message.childContextTypes = { color: React.PropTypes.string };

// ReactDOM.render(<Message/>, document.getElementById('example'));

//------------------------------------------------------------------------------------------------------------------------------------

/**
 * Updating context
 * The getChildContext function will be called when the state or props changes
 */
// const Button = (props, context) => {
//     return (
//         <button style={{ background: context.color }}>
//             {props.children}
//         </button>
//     )
// }
// Button.contextTypes = { color: React.PropTypes.string.isRequired };

// class Message extends Component {
//     constructor(props, context) {
//         super(props, context);
//         this.state = { color: props.color };
//     }
//     getChildContext() {
//         return { color: this.state.color };
//     }
//     componentDidMount() {
//         if (this.state.color !== 'blue') {
//             console.log(true);
//             this.setState({ color: 'blue' });
//         }
//     }
//     render() {
//         return (
//             <Button>
//                 Delete
//             </Button>
//         )
//     }
// }
// Message.childContextTypes = { color: React.PropTypes.string.isRequired };
// Message.defaultProps = { color: 'red' };
// ReactDOM.render(<Message/>, document.getElementById('example'));

//------------------------------------------------------------------------------------------------------------------------------------

/**
 * JSONFrom
 */
// import JSONFrom from './PromiseWithCancelable';
// class AuthorList extends Component {

//     constructor(props, context) {
//         super(props, context);

//         JSONFrom(props.url, props.method).then((json) => {
//             if (this._isMounted) {
//                 this.setState({ comment: json });
//             }
//         }, (error) => {
//             console.error('出错了', error);
//         });

//     }

//     componentDidMount() {
//         this._isMounted = true;
//     }
//     componentWillUnmount() {
//         this._isMounted = false;
//         console.log(ReactDOM.findDOMNode(this));
//     }

//     unMountLifeCycle() {
//         ReactDOM.unmountComponentAtNode(document.getElementById("example"));
//     }
//     render() {
//         var commentNodes = this.state == null ? "Server is busy." : this.state.comment.map(function(comment) {

//             return (
//                 <p>
//                     {comment.author}
//                 </p>
//             );
//         });

//         return (<div onClick={this.unMountLifeCycle.bind(this) } className="commentList">
//             {commentNodes}
//         </div>)
//     }

// }
// ReactDOM.render(<AuthorList url="http://192.168.23.111:9988/LoginFront/comments"/>, document.getElementById('example'));

//------------------------------------------------------------------------------------------------------------------------------------


/**
 * statics
 */
// class StaticComponent extends Component {
//     static customMethod(foo) {
//         return foo === 'bar';
//     }
//     render(){       
//     }
// }
// console.log(StaticComponent.customMethod('bar'));

// var MyComponent = React.createClass({
//     statics: {
//         customMethod: function(foo) {
//             return foo === 'bar';
//         }
//     },
//     render: function() {
//     }
// });
// console.log(MyComponent.customMethod('bar'));

//------------------------------------------------------------------------------------------------------------------------------------


/**
 * limitations
 * shouldComponentUpdate函数需要返回true,使this.context 生效
 */
// class Bottom extends Component {
//     constructor(props, context) {
//         super(props, context);
//     }
//     render() {
//         return (
//             <h1>
//                 {this.context.number}
//             </h1>
//         )
//     }
// }
// Bottom.contextTypes = { number: React.PropTypes.number.isRequired };

// class Middle extends Component {
//     constructor(props, context) {
//         super(props, context);
//     }
//     shouldComponentUpdate(nextProps, nextState, nextContext) {
//         return true;
//     }
//     render() {
//         return (
//             <Bottom/>
//         )
//     }
// }

// class Top extends Component{
//     constructor(props,context){
//         super(props,context);
//         this.state={number:props.initialNumber};   
//         this.callBack = this.callBack.bind(this);     
//     }
//     shouldComponentUpdate(nextProps,nextState,nextContext){
//         return true;
//     }
//     getChildContext(){
//         return {number:this.state.number};
//     }
//     callBack(){
//         console.log("Updated");
//     }
//     componentDidMount(){
//         this.interval = setInterval(()=>{
//             this.setState({number:this.state.number + 1})
//             // this.setState((previousState,currentProps)=>{
//             //     console.log(currentProps);
//             //     return {number:previousState.number+1};
//             // },this.callBack);
//         },500); 
//         // Checking _isMounted before calling setState()
//         this._isMounted=true;
//     }
//     componentWillUnmount(){
//         clearInterval(this.interval);
//         this._isMounted=false;
//     }
//     render(){
//         return (
//             <Middle/>
//         )
//     }
// }
// Top.childContextTypes = {number:React.PropTypes.number.isRequired};
// Top.defaultProps = {initialNumber:0};
// ReactDOM.render(<Top />, document.getElementById('example'));

//------------------------------------------------------------------------------------------------------------------------------------

/**componentWillMount()
 * 
 * If you call setState within this method, 
 * render() will see the updated state and will be executed only once despite the state change.
 * 
 * The componentDidMount() method of child components is invoked before that of parent components.
 */
// class ComponentLifeCycle extends Component {

//     constructor(props, context) {
//         super(props, context);
//         this.state = { name: 'dmz' };
//     }
//     shouldComponentUpdate() {
//         console.log("shouldComponentUpdate "+this.props.name);
//         return true;
//     }

//     componentWillMount() {
//         this.setState({ name: this.props.name });
//     }

//     componentWillReceiveProps(nextProps) {
//         console.log("this.props "+this.props.name);
//         console.log("next props "+nextProps.name);
//         // this.setState({ name: nextProps.name });
//     }

//     render() {
//         return (
//             <h1>
//                 {this.props.name}
//             </h1>
//         )
//     }
// }
// // ComponentLifeCycle.defaultProps={name:"Hello"};
// class LifeComponent extends Component {
//     constructor() {
//         super();
//         this.state = { name: 'dream' };
//         this.tick = this.tick.bind(this);
//     }
//     tick() {
//         this.setState({ name: 'DREAM' });
//     }
//     render() {
//         return (
//             <div onClick={this.tick}>
//                 <ComponentLifeCycle name={this.state.name} />
//             </div>
//         )

//     }
// }
// ReactDOM.render(<LifeComponent/>, document.getElementById('example'));

//------------------------------------------------------------------------------------------------------------------------------------

/**componentWillMount()
 * 
 * If you call setState within this method, 
 * render() will see the updated state and will be executed only once despite the state change.
 */

//------------------------------------------------------------------------------------------------------------------------------------

/**componentDidMount ()
 * 
 * Invoked once, only on the client (not on the server), immediately after the initial rendering occurs. 
 * At this point in the lifecycle, you can access any refs to your children (e.g., to access the underlying DOM representation). 
 * The componentDidMount() method of child components is invoked before that of parent components.
 * If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval, or send AJAX requests, 
 * perform those operations in this method.
 */

//------------------------------------------------------------------------------------------------------------------------------------

/**componentWillReceiveProps(object nextProps, object nextContext)
 * 
 * One common mistake is for code executed 
 * during this method
 * to assume that props have changed
 */
// class TestComponent extends React.Component {
//   componentWillReceiveProps(nextProps) {
//     console.log('componentWillReceiveProps', nextProps.data.bar);
//   }
//   render() {
//     return <div>Bar {this.props.data.bar}!</div>;
//   }
// }

// var container = document.getElementById('example');

// // var mydata = {bar: 'drinks'};
// // ReactDOM.render(<TestComponent data={mydata} />, container);
// // ReactDOM.render(<TestComponent data={mydata} />, container);
// // ReactDOM.render(<TestComponent data={mydata} />, container);

// var mydata = {bar: 'drinks'};
// ReactDOM.render(<TestComponent data={mydata} />, container);
// mydata.bar = 'food'
// ReactDOM.render(<TestComponent data={mydata} />, container);
// mydata.bar = 'noise'
// ReactDOM.render(<TestComponent data={mydata} />, container);

//------------------------------------------------------------------------------------------------------------------------------------

/**
 * shouldComponentUpdate(object nextProps, object nextState, object nextContext)
 * 
 * Invoked before rendering when new props or state are being received. 
 * This method is not called for the initial render or when forceUpdate is used.
 * Use this as an opportunity to return false 
 * when you're certain that the transition to 
 * the new props and state will not require a component update.
 */
//------------------------------------------------------------------------------------------------------------------------------------

/**
 * componentWillUpdate (object nextProps, object nextState, object nextContext)
 * 
 * Invoked immediately before rendering when new props or state are being received. 
 * This method is not called for the initial render.
 * Use this as an opportunity to perform preparation before an update occurs.
 * You cannot use this.setState() in this method. 
 * If you need to update state in response to a prop change, use componentWillReceiveProps instead.
 */
//------------------------------------------------------------------------------------------------------------------------------------

/**
 * componentDidUpdate(object prevProps, object prevState, object prevContext)
 * 
 * Invoked immediately after the component's updates are flushed to the DOM. 
 * This method is not called for the initial render.
 * Use this as an opportunity to operate on the DOM when the component has been updated
 */
//------------------------------------------------------------------------------------------------------------------------------------

/**
 * componentWillUnmount()
 * 
 * Invoked immediately before a component is unmounted from the DOM.
 * Perform any necessary cleanup in this method, 
 * such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount
 */

//------------------------------------------------------------------------------------------------------------------------------------

/**
 * Inline Style
 */
// let divStyle = {
//   color: 'blue',
// //   backgroundImage: 'url("C:\Users\dmz\Desktop\1814354-4bf62e54553a32b7.png")',
//   WebkitTransition: 'all', // note the capital 'W' here
//   msTransition: 'all' // 'ms' is the only lowercase vendor prefix
// };
// ReactDOM.render(<div style={divStyle}>DMZ</div>,document.getElementById('example'));

//------------------------------------------------------------------------------------------------------------------------------------

/**
 * This entry shows how to attach DOM events not provided by React (check here for more info). 
 * This is good for integrations with other libraries such as jQuery.
 */
// var Box = React.createClass({
//   getInitialState: function() {
//     return {windowWidth: window.innerWidth};
//   },

//   // handleResize: function(e) {
//   //   this.setState({windowWidth: window.innerWidth});
//   // },

//   // componentDidMount: function() {
//   //   window.addEventListener('resize', this.handleResize);
//   // },

//   // componentWillUnmount: function() {
//   //   window.removeEventListener('resize', this.handleResize);
//   // },

//   render: function() {
//     return <div>Current window width: {this.state.windowWidth}</div>;
//   }
// });

// class Box extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { width: window.innerWidth };
//     this.handleResize = this.handleResize.bind(this);
//   }
//   handleResize(e) {
//     this.setState({ width: window.innerWidth });
//   }
//   componentDidMount() {
//     window.addEventListener('resize', this.handleResize);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('resize', this.handleResize);
//   }
//   render() {
//     return (
//       <div>
//         Current window width: {this.state.width}
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Box />, document.getElementById('example'));

//------------------------------------------------------------------------------------------------------------------------------------

/**
 * map  forEach filter
 */
// class Fruits extends Component {
//   constructor(props) {
//     super(props);
//     this.list = props.list.map((item, i) => {
//       return (
//         <div  onDoubleClick={this.handleDoubleClick.bind(this) } onClick={this.handleClick.bind(this, i, props) } key={i}>
//           {item}
//         </div>
//       );
//     });

//     this.listFilter = props.list.filter((item, i) => {
//       return item!=='Apple';
//     });
//   }

//   handleDoubleClick() {
//     this.props.list.forEach((item) => {
//       console.log(item);
//     });
//   }

//   handleClick(i, props) {
//     console.log(props.list[i]);
//   }
//   render() {
//     return (
//       <div>
//         {this.list}
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Fruits list={['Apple', 'Banana', 'Cranberry']} />, document.getElementById('example'));

//------------------------------------------------------------------------------------------------------------------------------------
/**
 * simply expose a method on the child component for the parent to call
 * 
 * DO NOT ref to stateless function.
 */
// const Todo = (props) => {
//   const animate = () => {
//     console.log('Pretend %s is animating', props.title);
//   }
//   return (
//     <div onClick={props.onClick}>
//       {props.title}
//     </div>
//   )
// }
// class Todo extends Component{
//   constructor(props){
//     super(props);
//   }
//   animate(){
//     console.log('Pretend %s is animating', this.props.title);
//   }
//   render(){
//     return <div onClick={this.props.onClick}>{this.props.title}</div>
//   }
// }

// class Todos extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: props.initialItems };
//   }
//   handleClick(index) {
//     let items = this.state.items.filter((item,i)=>{
//       return index != i;
//     });
//     this.setState({items:items},()=>{
//       if (items.length === 1) {
//         this.refs.item0.animate();
//       }
//     });
//     console.log(this.state.items[index]);
//   }
// //  shouldComponentUpdate(){
// //    return false;
// //  }
//   render() {
//     return (
//       <div>
//         {
//           this.state.items.map((item, i) => {
//             return (
//               <Todo onClick={this.handleClick.bind(this, i) } key={i} title={item} ref={'item' + i}/>
//             )
//           })
//         }
//       </div>
//     )
//   }
// }
// ReactDOM.render(<Todos initialItems={['Apple', 'Banana', 'Cranberry']} />, document.getElementById('example'));
//------------------------------------------------------------------------------------------------------------------------------------


