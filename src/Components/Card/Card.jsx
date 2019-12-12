import React, { Component } from 'react'

export class Card extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
                <img alt ={this.props.profile.id} src = {`https://robohash.org/${this.props.profile.id}AC.png?set=set1`}/>
                <h1>{this.props.profile.name}</h1>
                <p>{this.props.profile.email}</p>
            </div>
            </React.Fragment>
        )
    }
}

export default Card
