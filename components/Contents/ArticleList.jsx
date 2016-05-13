import React, {Component} from 'react';
import Article from './Article';

export default class ArticleList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let articles = this.props.articles.map(function (article) {
            return <Article article={article}/>
        })
        return (
            <div>
                {articles}
            </div>

        )
    }
}