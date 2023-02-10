import React from "react";
import "./Track.css";

export class Track extends React.Component {
  renderAction() {
    let buttonText;
    if(isRemoval){
      buttonText = '-'
    } else {
      buttonText = '+'
    }
  }

	render() {
		return (
        <div className="Track">
          <div className="Track-information">
            <h3><!-- track name will go here --></h3>
            <p><!-- track artist will go here--> | <!-- track album will go here --></p>
          </div>
          <button className="Track-action">{ buttonText }</button>
        </div>
		);
	}
}