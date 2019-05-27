import React from 'react'
import BaseButton from './BaseButton'

class SearchButton extends BaseButton {
	render() {
		return (
			<BaseButton className="find-button" title={this.props.title} handleClick={this.props.handleSearchClick}/>
		)
	}
}

export default SearchButton