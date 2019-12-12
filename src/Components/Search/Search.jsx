// import React, { Component } from 'react'

// export class Search extends Component {
//     render() { // the items that are in the {} are destructed from  props
//         const {placeholder,handleChange}=this.props
//         return (
//               <input className= 'searchBox' type ='search' placeholder ={placeholder} onChange ={handleChange}/>  

//         )
//     }
// }

// export default Search
// THIS CAN ALSO BE WRITTEN AS FUNCTION BASED BELOW, IT IS BEST TO USE FUNCTION BASED COMPONENTS, WHEN STATE ISN'T REQUIRED

import React from 'react'

export default function Search({placeholder,handleChange}) {
    return (
        <input className= 'searchBox' type ='search' placeholder ={placeholder} onChange ={handleChange}/>
    )
}
