import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from 'react-apollo';
import SongList from "./components/SongList";
import {App} from "./components/App";
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";
import './style/style.css';

const client = new ApolloClient({});
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList}/>
          </Route>
          <Route path="/addsong" component={SongCreate}/>
          <Route path="/song/:id" component={SongDetail}/>

      </Router>
    </ApolloProvider>
  )

};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
