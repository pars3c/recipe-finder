import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';

class RecipeList extends Component {
    render() {
        return (
            <div>
                <h2>Recipe Finder</h2>
                <SearchRecipes />
            </div>
        )
    }
}

export default App;