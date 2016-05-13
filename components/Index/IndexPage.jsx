import React, { Component } from 'react';
import Head from './HeadComponent';
import Middle from './MiddleComponent';
import Foot from './FootComponent';
export default class IndexPage extends Component {

    constructor(props) {
        super(props);
        this.showArticles = this.showArticles.bind(this);
    }

    showArticles(tab) {

        return [
            { 'photo': '../../assets/Chrysanthemum.jpg', 'title': 'Lovely', 'subtitle': 'Miss You', 'author': 'dmz', 'authorDes': 'girl single', 'avatar': '../../assets/0.png' },
            { 'photo': '', 'author': 'dmz', 'authorDes': 'girl single', 'avatar': '../../assets/0.png' },
            { 'photo': '', 'author': 'dmz', 'authorDes': 'girl single', 'avatar': '../../assets/0.png' },
            { 'photo': '', 'author': 'dmz', 'authorDes': 'girl single', 'avatar': '../../assets/0.png' },
            { 'photo': '', 'author': 'dmz', 'authorDes': 'girl single', 'avatar': '../../assets/0.png' }
            ]
    }

    render() {
        return (
            <div>
                <Head name={"DMZ"}/>
                <Middle articles={this.showArticles}/>
                <Foot/>
            </div>
        )
    }
}
