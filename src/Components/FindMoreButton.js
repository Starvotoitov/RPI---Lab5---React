import React from 'react'
import BaseButton from './BaseButton'

class FindMoreButton extends BaseButton {
	render() {
		return (
			<BaseButton className="load-more-button" title={this.props.title} handleClick={this.props.handleClick} />
		)
	}
}

export default FindMoreButton