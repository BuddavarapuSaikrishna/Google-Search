// Write your code here

import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestion extends Component {
  state = {
    searchInput: '',
  }

  UpdateSearchInput = value => {
    this.setState({searchInput: value})
  }

  OnChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="Main-Container">
        <img
          className="google-logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="Search-Container">
          <div className="search-Design">
            <img
              className="search-Icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search Icon"
            />
            <input
              placeholder="Search Google"
              className="input-search"
              type="search"
              onChange={this.OnChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul>
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id}
                suggestionsDetails={eachSuggestion}
                UpdateSearchInput={this.UpdateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestion
