import React, { Component, PropTypes } from 'react';

export default class TrackList extends Component {
  static get propTypes() {
    return {
       count: React.PropTypes.number.isRequired
    }

  static defaultProps = {
    tracks: []
  }

  render() {
    return (
      <div>
        {
          this.props.tracks.map((track, key) => {
            return <div key={key}>Track: {track.title}</div>;
          })
        }
      </div>
    )
  }
}