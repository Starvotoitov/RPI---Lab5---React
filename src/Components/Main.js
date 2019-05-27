import React, {Component} from 'react'
import ArticleBlock from './ArticleBlock'
import SourcesList from './SourcesList'

class Main extends Component {	
	render() {
		return (
			<div>
				<SourcesList info={this.props.info} handleSourceClick={this.props.handleSourceClick}/>
				<ArticleBlock info={this.props.info} handleClick={this.props.handleClick}/>
			</div>
		)
	}
}

export default Main