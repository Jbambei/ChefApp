import React from 'react';

function RecipeResults(props) {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-title h5">{props.name}</div>
            </div>
            <div className="card-body">
                {props.description}
                {props.allergens}
            </div>
            <div className="card-footer">
                <button className="btn btn-primary">Edit this Recipe</button>
            </div>
        </div>
    )
}

export default RecipeResults