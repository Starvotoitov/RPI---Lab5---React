import React, {Component} from 'react'

class SearchEdit extends Component {
	render() {
		return (
			<input id="search-edit" className="find-text" type="text" onKeyDown={this.props.handleSearchKeyDown}/>
		)
	}
}	

export default SearchEdit