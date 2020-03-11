import React, { Component } from 'react';

import { SearchResults } from './SearchResults';

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <input placeholder="Enter the name of free company,player..."></input>
      </div>
    );
  }
}
