import React, {Component} from 'react'

class BaseButton extends Component {
	render() {
		return (
		<button className={this.props.className} onClick={this.props.handleClick}>
			{this.props.title}
		</button>
		)
	}
}

export default BaseButton