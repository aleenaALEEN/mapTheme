import React from "react";
import { paragraph,MenuData } from "../data";
import Para from "./para";
export default class Menu extends React.Component{
    render(){
        return(
            <>
            <div className="container-fluid mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-menu col-lg-6 mt-5">
                            <Para data={{text:paragraph.p3}}/>
                            <ul className="menu-lists list-unstyled mt-5">
                                {
                                    MenuData.li.map(ele=>{
                                        return <li>{ele}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="bcg-menu col-lg-6 mt-5"></div>

                    </div>
                </div>
            </div>
            <hr className="hr2"></hr>
            </>
        )
    }
}