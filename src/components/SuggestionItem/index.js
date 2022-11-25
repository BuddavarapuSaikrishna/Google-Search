// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionsDetails, UpdateSearchInput} = props
  const {suggestion} = suggestionsDetails

  const onClickSuggestion = () => {
    UpdateSearchInput(suggestion)
  }

  return (
    <li className="list-Container">
      <div className="search-Items">
        <p>{suggestion}</p>
        <img
          className="arrow-Icon"
          onClick={onClickSuggestion}
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </div>
    </li>
  )
}

export default SuggestionItem
