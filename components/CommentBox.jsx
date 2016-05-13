import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import $ from 'jquery';
class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }
    loadCommentsFromServer() {
        $.ajax({
            url: this.props.loadurl,
            dataType: 'json',
            cache: false,
            //利用箭头函数传参(继承this)，可以少去了bind this
            // success: function(data) {
            //     console.log(data);
            //     this.setState({ data: data }); //此处this为componentDidMount函数作用域
            // }.bind(this), //此处的this为组件作用域
            //ES6的箭头可以省略bind(this)
            success: (data) => {
                this.setState({ data: data });
            },
            error: (xhr, status, err) => {
                console.error(this.props.loadurl, status, err.toString());
            }
        });
    }

    handleCommentSubmit(comment) {

        var comments = this.state.data;
        comment.id = Date.now();
        var newComments = comments.concat([comment]);
        this.setState({ data: newComments });
        $.ajax({
            url: this.props.submiturl,
            headers: {'Content-Type':'application/json'},
            dataType: 'json',
            type: 'POST',
            async: false,
            contentType: 'application/json; charset=utf-8',
            data: '{"name":"dmz"}',
            success: (data) => {
                this.setState({ data: data });
            },
            error: (xhr, status, err) => {
                this.setState({ data: comments });
                console.error(this.props.submiturl, status, err.toString());
            }
        });
    }

    componentDidMount() {
        this.loadCommentsFromServer();

        setInterval(() => this.loadCommentsFromServer(), this.props.pollInterval);
        // setInterval(function(){
        //     this.loadCommentsFromServer()
        // }.bind(this),this.props.pollInterval);    
    }

    render() {
        return (<div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.state.data} />
            <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this) } />
        </div>)
    }
}

ReactDOM.render(<CommentBox submiturl="http://localhost:9988/LoginFront/submitcomments" loadurl="/LoginFront/comments" pollInterval={1000000}/>, document.getElementById('comment'));