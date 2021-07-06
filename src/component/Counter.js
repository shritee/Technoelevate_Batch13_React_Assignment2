import React, { Component } from 'react'

export default class Counter extends Component {
    state={
        count:0
    }
    render() {
        return (
            <div>
                <input value={this.state.count} style={{
                    width:"115px",
                    height:"70px",
                    textAlign:"center",
                    fontWeight:"bolder",
                    fontSize:"30px"

                    
                }} ></input>
                <br/>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })

                }} style={{
                    backgroundColor:"red",
                    color:"white",
                    fontWeight:"bold",
                    width:"30px",
                    height:"30px"
                }}>+</button>
                <button onClick={()=>{
                    this.setState({
                        count:0
                    })

                }} style={{
                    backgroundColor:"#99ff66",
                    color:"white",
                    fontWeight:"bold",
                    width:"60px",
                    height:"30px"
                }}>Reset</button>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count-1
                    })

                }}style={{
                    backgroundColor:"#e6e600",
                    color:"white",
                    fontWeight:"bold",
                    width:"30px",
                    height:"30px"
                }}>-</button>
                
            </div>
        )
    }
}
