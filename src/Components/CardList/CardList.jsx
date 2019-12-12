import React, { Component } from 'react'
import './CardList.css'
import Card from '../Card/Card'

export class CardList extends Component {
    render() {
        return (
            <div className = 'cardlist'>
                {this.props.monsters.map(profile=>{return(<Card profile={profile} key ={profile.id}/>)})}
            </div>
        )
    }
} 

export default CardList
