import React, {Component} from 'react'
import ArticlesList from './ArticlesList'
import FindMoreButton from './FindMoreButton'

class ArticleBlock extends Component {
	render() {
		const noDataFound = !this.props.info.isFindData && <p className="news-block__no-articlies-message">Nothing found</p>
		const findMoreButton = (this.props.info.displayedNewsCount < 40 && this.props.info.isFindData && this.props.info.displayedNewsCount < this.props.info.totalNewsCount) && <FindMoreButton title="FindMore" handleClick={this.props.handleClick}/>
		return (
			<div className="news-block">
				<ArticlesList info={this.props.info}/>
				{findMoreButton}
				{noDataFound}
			</div>
		)
	}
}

export default ArticleBlock