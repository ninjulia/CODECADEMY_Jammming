import React from "react";

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [],
			playlistName: "My Playlist",
			playlistTracks: [],
			counter: 0,
		};
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
		this.updatePlaylistName = this.updatePlaylistName.bind(this);
		this.savePlaylist = this.savePlaylist.bind(this);
		this.search = this.search.bind(this);
	}

	addTrack(track) {
		let tracks = this.state.playlistTracks;
		//if matches id in list
		if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
			return;
		}
		//if not in list, add it
		tracks.push(track);
		this.setState({ playlistTracks: tracks });

		//remove from searchResults
		let searches = this.state.searchResults;
		const removeSelected = searches.filter((list) => {
			return list !== track;
		});
		this.setState({ searchResults: removeSelected });
	}

	removeTrack(track) {
		let tracks = this.state.playlistTracks;
		tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);
		this.setState({ playlistTracks: tracks });

		//add back to search results
		let searches = this.state.searchResults;
		searches.push(track);
		this.setState({ searchResults: searches });
	}

	updatePlaylistName(name) {
		this.setState({ playlistName: name });
	}

	savePlaylist() {
		const trackUris = this.state.playlistTracks.map((track) => track.uri);

		Spotify.savePlaylist(this.state.playlistName, trackUris).then(() =>
			this.setState({
				playlistName: "New Playlist",
				playlistTracks: [],
			})
		);
	}

	search(term) {
		if (!term) {
			return;
		}
		Spotify.search(term).then((searchResults) => {
			this.setState({ searchResults: searchResults });
		});
	}

	render() {
		return (
			<div>
				<h1>
					Ja<span className="highlight">mmm</span>ing
				</h1>
				<div className="App">
					<SearchBar onSearch={this.search} />
					<div className="App-playlist">
						<SearchResults
							searchResults={this.state.searchResults}
							onAdd={this.addTrack}
						/>
						<Playlist
							playlistName={this.state.playlistName}
							playlistTracks={this.state.playlistTracks}
							onRemove={this.removeTrack}
							onNameChange={this.updatePlaylistName}
							onSave={this.savePlaylist}
						/>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		//check if user is logged into Spotify before allowing any interaction
		window.addEventListener("load", () => {
			Spotify.getAccessToken();
		});

		const interval = setInterval(Spotify.getAccessToken, Spotify.getExpiry());
		this.setState({ interval });
	}

	componentWillUnmount() {
		clearInterval(this.state.interval);
	}
}

export default App;
