import React from 'react'
import BaseButton from './BaseButton'

class SourceButton extends BaseButton {
	render() {
		return (
			<button sourceid={this.props.source.id} className="tmpl__source__button" onClick={this.props.handleClick}>
				{this.props.source.name}
			</button>			
		)
	}
}

export default SourceButton