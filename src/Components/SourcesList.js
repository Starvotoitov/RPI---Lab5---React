import React, {Component} from 'react'
import SourceButton from './SourceButton'

class SourcesList extends Component {
	render() {
		let sourcesList = this.props.info.sourceArr.map(item =>
			<SourceButton key={item.id} source={item} handleClick={this.props.handleSourceClick}/>
		)
		
		return (
			<div className="news-block__sources">
			<SourceButton key="ShowAll" source={{name: "Show all", id: ""}} handleClick={this.props.handleSourceClick}/>
			{sourcesList}
			</div>
		)
	}
}

export default SourcesList