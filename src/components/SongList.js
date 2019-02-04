import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  //helper method
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
//conventional name -mapStateToProps - configuring
const mapStateToProps = state => {
  //all datea from redux store
  //   console.log(state);
  //get songs array
  return { songs: state.songs };
};
export default connect(mapStateToProps)(SongList);
