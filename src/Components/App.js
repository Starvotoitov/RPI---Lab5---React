import React, {Component} from 'react'
import Main from './Main'
import Footer from './Footer'
import SearchBar from './SearchBar'

class App extends Component {
	
	updateSources = (data) => {
		this.setState({ sourceArr: data['sources'] });
	}
	
	getSources = () => {
		let sourceUrl = "https://newsapi.org/v2/sources?country=ru&apiKey=3aa1c23915ca4bf5b663c199b0aaf191";
		let req = new Request(sourceUrl);
		return fetch(req);
	}	
	
	getNews = () => {
		let newsUrl = `https://newsapi.org/v2/top-headlines?${this.state.currentQ !== '' ? "q=" + this.state.currentQ + "&" : ''}${this.state.currentSource !== '' && this.state.currentSource !== null ? "sources=" + this.state.currentSource + "&" : "country=ru&"}pageSize=40&apiKey=3aa1c23915ca4bf5b663c199b0aaf191`;
		let req = new Request(newsUrl);
		return fetch(req);
	}
	
	updateNews = (data) => {
		this.setState({ newsArr: data['articles'], isFindData: (data.totalResults !== 0), totalNewsCount: data.totalResults});
	}
	
	handleFindMoreClick = () => {
		this.setState({ displayedNewsCount: this.state.displayedNewsCount+5 }); 
	}
	
	handleSourceClick = (e) => {
		this.setState({ displayedNewsCount: 5, currentSource: e.target.getAttribute('sourceid') });
		this.getNews()
		.then(response => { return response.json() })
		.then(data => this.updateNews(data))
	}
	
	constructor(props) {
		super(props);
		this.state = {
			displayedNewsCount: 5,
			totalNewsCount: 0,
			allLoaded: false,
			currentPage: 1,
			currentSource: '',
			currentQ: '',
			sourceArr: [],
			newsArr: [],
			isMaxCount: false,
			isFindData: true
		}	
	}
	
	componentDidMount() {
		this.getSources()
		.then(response => { return response.json() })
		.then(data => this.updateSources(data));

		this.getNews()
		.then(response => { return response.json() })
		.then(data => this.updateNews(data));
	}
	
	C = () => {
		this.setState({ currentQ: document.getElementById('search-edit').value });
		this.getNews()
		.then(response => { return response.json() })
		.then(data => this.updateNews(data));
	}
	
	KD = (e) => {
		if (e.keyCode === 13)
		{
			this.setState({ currentQ: document.getElementById('search-edit').value });
			this.getNews()
			.then(response => { return response.json() })
			.then(data => this.updateNews(data));			
		}
	}
	
	render(){
		return (
			<div>
				<SearchBar handleSearchKeyDown={this.KD} handleSearchClick={this.C}/>
				<Main info={this.state} handleClick={this.handleFindMoreClick} handleSourceClick={this.handleSourceClick}/>
				<Footer />
			</div>
		)
	}
}

export default App