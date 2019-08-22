import React, { Component } from 'react';
// import ResultList from './ResultList';
import pork from "../../utilities/images/egg.jpg"

class FindAMeal extends Component {

    constructor() {
        super();
        this.state = {
            zipcode: "32806"
        };
    }
    componentDidMount() {
        // this.searchMeals();
        console.log(this.state)
    }

    // searchMeals = () =>{
    //     axios.get('..')
    // }

    render() {
        return (
            <div className="container">
                <div className="hero bg-gray">
                    <div className="hero-body">
                        <h1>Featured Meal: Sandwich with hard boiled eggs</h1>
                    </div>
                </div>
                <div className="container">
                    {/* <div className="empty-icon">
                        <i className="icon icon-people"></i>
                    </div> */}
                    {/* <p className="empty-title h5">There's no chef's in your area</p> */}
                    <div>
                        <img src={pork} width={600} alt="broken"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default FindAMeal