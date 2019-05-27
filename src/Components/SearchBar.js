import React, {Component} from 'react'
import SearchEdit from './SearchEdit'
import SearchButton from './SearchButton'

class SearchBar extends Component {
	render() {
		return (
			<header>
				<SearchEdit handleSearchKeyDown={this.props.handleSearchKeyDown} />
				<SearchButton title="Search" handleSearchClick={this.props.handleSearchClick}/>
			</header>
		)
	}
}

export default SearchBar