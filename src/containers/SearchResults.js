import React, { useState } from 'react'

//uses the results from SearchForm

//from the state, loop through and display each item individually

function SearchResults(){

    return(
        <div>
            //from the state, loop through and display each item individually
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