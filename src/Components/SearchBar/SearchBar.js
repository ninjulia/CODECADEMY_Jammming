import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: "",
		};
		this.search = this.search.bind(this);
		this.handleTermChange = this.handleTermChange.bind(this);
		//account for enter key
		this.onKeyUp = this.onKeyUp.bind(this);
	}

	search() {
		this.props.onSearch(this.state.term);
	}

	handleTermChange(e) {
		this.setState({ term: e.target.value });
	}

	// submit on ENTER keypress
	onKeyUp(e) {
		if (e.key === "Enter") {
			this.search();
		}
	}

	render() {
		return (
			<div className="SearchBar">
				<input
					placeholder="Enter A Song, Album, or Artist"
					onChange={this.handleTermChange}
					onKeyPress={this.onKeyUp}
				/>
				<button className="SearchButton" onClick={this.search}>
					SEARCH
				</button>
			</div>
		);
	}
}

export default SearchBar;
