import React, {Component} from 'react'
import Article from './Article'

class ArticlesList extends Component {
	render() {
		let articleElements = this.props.info.newsArr.slice(0, this.props.info.displayedNewsCount).map(item =>
			<Article article={item}/>
		)	
		return (
			<div className="news-block__news-list">
				{articleElements}	
			</div>
		)
	}
}

export default ArticlesList