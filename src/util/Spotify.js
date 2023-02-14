const clientId = `${process.env.REACT_APP_API_KEY}`;
const redirectUri = "https://candid-wisp-e78ad8.netlify.app/";
//const redirectUri = "http://localhost:8888/";
let accessToken;

const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

const Spotify = {
	getExpiry() {
		if (expiresInMatch) {
			const expiresIn = Number(expiresInMatch[1] * 1000);
			return expiresIn;
		} else {
			return;
		}
	},
	//authenticate user
	getAccessToken() {
		if (accessToken) {
			return accessToken;
		}

		// check for access token match
		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);

		if (accessTokenMatch && expiresInMatch) {
			accessToken = accessTokenMatch[1];
			const expiresIn = Number(expiresInMatch[1]);

			//clear url parameters and grab new access token if expired
			window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
			window.history.pushState("Access Token", null, "/");
			return accessToken;
		} else {
			const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
			window.location = accessUrl;
		}
	},

	//allow user to search Spotify database, return 20 results as per API
	search(term) {
		const accessToken = Spotify.getAccessToken();

		return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		})
			.then(
				(response) => {
					if (response.ok) {
						return response.json();
					}
					throw new Error("Search Request Failed");
				},
				(networkError) => console.log("Search Request Failed")
			)
			.then((jsonResponse) => {
				//if JSON does not contain tracks, return empty array
				if (!jsonResponse.tracks) {
					return [];
				}
				return jsonResponse.tracks.items.map((track) => ({
					id: track.id,
					name: track.name,
					artist: track.artists[0].name,
					album: track.album.name,
					uri: track.uri,
				}));
			});
	},

	//allow user to save playlist to their account
	savePlaylist(name, trackUris) {
		//if playlist name OR tracks not updated, stop the process
		if (!name || !trackUris.length > 0) {
			return;
		}

		const accessToken = Spotify.getAccessToken();
		const headers = { Authorization: `Bearer ${accessToken}` };
		let userId;

		//get user id from Spotify API
		return fetch("https://api.spotify.com/v1/me", { headers: headers })
			.then((response) => {
				return response.json();
			})
			.then((jsonResponse) => {
				userId = jsonResponse.id;

				//create playlist in user's account and return id
				return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
					headers: headers,
					method: "POST",
					body: JSON.stringify({ name: name }),
				})
					.then((response) => {
						return response.json();
					})
					.then((jsonResponse) => {
						const playlistId = jsonResponse.id;

						//add tracks to new playlist
						return fetch(
							`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
							{
								headers: headers,
								method: "POST",
								body: JSON.stringify({ uris: trackUris }),
							}
						);
					});
			});
	},
};

export default Spotify;
