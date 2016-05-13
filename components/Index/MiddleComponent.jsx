import React, { Component } from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import ArticleList from '../Contents/ArticleList';
import Photo from '../Contents/Photo';
const MiddleStyles = {

    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },

    tabs: {
        'background-color': '#512DA8',
        'width': '100%',
        'height': 60,
        'magin-top': 100,
    },
    articlecontent: {
        'overflow': 'auto',
        'height': 500
    },
    photocontent:{
        'overflow': 'auto',
        'height': 1000        
    },
    tab: {
        'height': '100%'
    }

}

function handleActive(tab) {
    alert(`A tab with this route property ${tab.props.route} was activated.`);
}

export default class MiddleComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: this.props.articles(0),
            photos: ""
        }
        this.onTabActive = this.onTabActive.bind(this);
    }
    onTabActive(tab) {
        switch (tab.props.item) {
            case 0:
                this.setState({
                    articles: this.props.articles(0)
                })
                break;
            case 1:
                this.setState({
                    photos: this.props.articles(1)
                })
                break;
            case 2:
                alert(`A tab with this route property ${tab.props.route} was activated.`);
                break;
            default:
                return;
        }

    }
    render() {
        return (
            <Tabs tabItemContainerStyle={MiddleStyles.tabs} >

                <Tab onActive={this.onTabActive} item={0} label="HotArticles" style={MiddleStyles.tab}>
                    <div style={MiddleStyles.articlecontent}>
                        <ArticleList articles={this.state.articles}/>
                    </div>
                </Tab>

                <Tab onActive={this.onTabActive} item={1} label="HotPhotos" style={MiddleStyles.tab}>
                    <div>
                            <Photo/>
                    </div>
                </Tab>

                <Tab item={2}
                    label="HotVideos" style={MiddleStyles.tab}
                    route="/home"
                    onActive={this.onTabActive}
                    >

                </Tab>
            </Tabs>
        )
    }
}
