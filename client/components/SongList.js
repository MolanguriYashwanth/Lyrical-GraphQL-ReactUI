import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import songsListquery from "../queries/fetchSongs";

import gql from 'graphql-tag';
class SongList extends Component {
    onSongDelete(id){
        this.props.mutate({
            variables:{id:id},
        }).then(
            ()=>this.props.data.refetch()
           )
    }
  
    renderSongs() {
        return this.props.data.songs.map((song, index) => {
            return <li key={song.id} 
            className="collection-item">
            <Link to={`/song/${song.id}`}>
            {song.title}
            </Link>
            <i className="material-icons"
            onClick={()=>this.onSongDelete(song.id)}
            >delete</i>
            </li>
        })
    }

    render() {
        if (this.props.data.loading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <Link to="/addsong" className="btn-floating btn-large red right">
                    <i className="material-icons">add</i>
                </Link>
            </div>

        );
    }
}
const mutation = gql`
mutation deleteSong($id:ID){
    deleteSong(id:$id){
      id
    }
  }
`

export default graphql(mutation)(graphql(songsListquery)(SongList));