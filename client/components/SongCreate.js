import React, { Component } from 'react';


import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import songsListquery from "../queries/fetchSongs";

import { Link,hashHistory } from 'react-router';


class SongCreate extends Component {
    constructor(props){
        super(props);
        this.state ={
            title:""
        }
        this.onSubmit = this.onSubmit.bind(this);

    }
    onSubmit(event){
        event.preventDefault();
        this.props.mutate({
            variables:{title:this.state.title},
            refetchQueries:[{query:songsListquery}]
        }).then(
            ()=>hashHistory.push("/")).catch(()=>{

        })
    }
    render() {
        return (
            <div>
     <Link to="/">Back</Link>
                <form onSubmit={this.onSubmit}>
                    <label>Song Title:</label>
                    <input value={this.state.title} onChange={event=>this.setState({title:event.target.value})}/>
                </form>
            </div>
        );
    }
}

const mutation = gql`
mutation AddSong($title:String){
    addSong(title:$title){
      title
    }
    }
`;

export default graphql(mutation)(SongCreate);