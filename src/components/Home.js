import React, { Component } from 'react';
import axios from 'axios';

const sortingHat = 'https://www.potterapi.com/v1/sortingHat';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            house: ''
        }
        //binding function/method
        this.getHouse = this.getHouse.bind(this);

    }


    getHouse= () => {
        axios.get(sortingHat)

        .then(Response => {
            let result = Response.data;
        
            console.log(result);
        
        })
    }
    render() {
        return (
            <div>
                <button onClick = {this.getHouse}>Click me</button>
                <h1><strong>Your House is:</strong>{this.state.house}</h1>
            </div>
        )
    }
}



