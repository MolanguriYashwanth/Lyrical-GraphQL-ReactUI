import React, { Component } from 'react';
import fetchSongQuery from "../queries/fetchSong";
import { graphql } from 'react-apollo';
import { Link,hashHistory } from 'react-router';

class SongDetail extends Component {
    render() {
        if (this.props.data.loading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                 <Link to="/">Back</Link>

                <h3>{this.props.data.song.title}</h3>
            </div>
        );
    }
}

export default graphql(fetchSongQuery,{
    options:(props)=>{
        return {
            variables:{
                id:props.params.id
            }
        }
    }
})(SongDetail);