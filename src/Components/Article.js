import React, {Component} from 'react'

class Article extends Component {
	render() {
		return (
			<a className="news__tmpl__link" href={this.props.article.url}>
				<img src={this.props.article.urlToImage} alt="No image found"/>
				<h3>{this.props.article.title}</h3>
				<p>{this.props.article.description}</p>
			</a>
		)
	}
}

export default Article