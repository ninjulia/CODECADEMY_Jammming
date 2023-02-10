import React from "react";
import Track from "./Components/Track/Track";
import "./TrackList.css";

export class TrackList extends React.Component {
	render() {
		return (
			<div className="TrackList">
				<Track />
			</div>
		);
	}
}
