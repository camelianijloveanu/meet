import React, { Component } from 'react';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined
      };

      handleItemClicked = (suggestion) => {
        this.setState({
          query: suggestion,
          showSuggestions: false
        });
      
        this.props.updateEvents(suggestion, 0);
      }
      
      handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        this.setState({
          query: value,
          suggestions,
        });
      };

  render() {
    return (
      <div className="CitySearch">
          <input
        type="text"
        className="city"
        value={this.state.query}
        placeholder="Search city"
        onChange={this.handleInputChanged}
        onFocus={() => { this.setState({ showSuggestions: true }) }}
      />
      <div className="selectNumber">Select number of events</div>
    <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
    {this.state.suggestions.map((suggestion) => (
        <li
        key={suggestion}
        onClick={() => this.handleItemClicked(suggestion)}
        >{suggestion}</li>
    ))}
    <li onClick={() => this.handleItemClicked("all")}>
      <b>See all cities</b>
    </li>
    </ul>
      </div>
    );
  }
}

export default CitySearch;