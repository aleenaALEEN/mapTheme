import React from "react";

export default class Para extends React.Component{
    render(){
        return(
            <p>{this.props.data.text}</p>
        )
    }
}