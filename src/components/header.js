import React from "react";
import { paragraph } from "../data";
import Para from "./para";


export default class Header extends React.Component{
    render(){
        return(
            <>
            <div className="container-fluid">
                <div className="row">
                    <div className="colbcg col-lg-12">
                    <Para data={{text:paragraph.p1}}/>
                    </div>
                </div>
               
             
            </div>

            </>
        )
    }
}