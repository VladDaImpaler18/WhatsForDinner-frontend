import React, { useState } from 'react'
import "./SearchResults.css"
//uses the results from SearchForm

//from the state, loop through and display each item individually

function SearchResults(props){

    return(
        <div class="container-root">
            
        </div>
    )
}

export default SearchResults

//maybe pass state to props
/*
const mapStateToProps = state => {
    return {
        searchResults: state.results
        loading: state.loading
    }
}
export default connect(mapStateToProps, {//action command})(SearchResults)
*/