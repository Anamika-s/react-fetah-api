import React, { Component } from 'react'

export default class Comp1 extends Component {
    /**
     *
     */
    constructor() {
        super();


       
    }
    ReadContents=()=>
        {
        console.log("inside ReadContents")
        fetch("text.txt")
        .then((res)=>res.text())
       .then((response)=> console.log("aa" + response))
        }
    
  render() {
    
    return (
      <div>Comp1

        <button onClick={this.ReadContents}> Get Data </button>
      </div>
    )
  }
}
