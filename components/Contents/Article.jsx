import React, {Component} from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardTitle from 'material-ui/lib/card/card-title';
import CardMedia from 'material-ui/lib/card/card-media';
import RaisedButton from 'material-ui/lib/raised-button';
import CardText from 'material-ui/lib/card/card-text';
import Paper from 'material-ui/lib/paper';

const ArticleStyles = {
    article: {
        'padding-bottom': 30,
        'width': '60%',
        'margin-top': 50,
        'margin-left': '20%',
    },

    cardAction: {
        'textAlign': 'right',
        'margin-right': 20,
        'margin-bottom': 0
    },

    cardMedia: {
        'width': '100%',
        'height': 400
    }
}
export default class ArticleCard extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        let Media = this.props.article.photo === '' ? null : (<CardMedia style={ArticleStyles.cardMedia}
            overlay={<CardTitle title={this.props.article.title} subtitle={this.props.article.subtitle} />}
            >
            <img style={ArticleStyles.cardMedia} src={this.props.article.photo} />
        </CardMedia>)


        return (
            <Card initiallyExpanded={true}  style={ArticleStyles.article} zDepth={2}>
                <CardHeader onExpandChange={this.onHandleClick}
                    title={this.props.article.author}
                    subtitle={this.props.article.authorDes}
                    actAsExpander={true} avatar={this.props.article.avatar}
                    showExpandableButton={true}
                    />
                {Media}
                <CardText expandable={true} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa.Aliquam erat volutpat.Nulla facilisi.
                    Donec vulputate interdum sollicitudin.Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions expandable={true} style={ArticleStyles.cardAction} >
                    <RaisedButton primary={true} label="More"/>
                </CardActions>
            </Card>
        )
    }
}

