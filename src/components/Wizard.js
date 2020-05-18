import React, { Component } from 'react';
import axios from 'axios';

console.log("wizard comp");
// console.log(process.env.REACT_APP_KEY);

const key = process.env.REACT_APP_KEY;

// console.log(`https://www.potterapi.com/v1/characters?key=${key}`);

//referencing back to wine api

const workingLink = `https://www.potterapi.com/v1/characters?key=${key}`

export default class Wizard extends Component {
    constructor(props){
        super(props)

        //this is supposed to take input of user when searching name and/or house and render back all info of that witch/wizard OR when typing in house to return all names of witches/wizards who belong to said house
        this.state = {
            input: '',
            infoBack: []
        }



    }

 
    
 componentDidMount() {

        axios.get(workingLink)
    
        .then((result) => {
            const allData = result.data;

            console.log(allData);
    
            this.setState({
                info: allData
            });
            
        })

        .catch((err) => {

            console.log('Error has been computed', err)
    
        });


    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handlingSubmit}>
                    <label>
                        Please enter name of witch or wizard. You may also type in the house to see all who belong to it.

                        <input type = "text" value={this.state.infoBack} onChange = {this.userInput} />

                    </label>
                    
                    <input type="submit" value="Submit" />
                </form>



                {/* {this.state.info.map(details =>
                <div key= { details.id }>

                <h2>{details.name}</h2>
                
                <h2>{details.house}</h2>
                

                </div> 
                
                )} */}
            </div>
        )
    }
}