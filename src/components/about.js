import React from "react";
import Para from "./para";
import { paragraph,AboutData } from "../data";

export default class About extends React.Component{
    render(){
        return(
            <>
            <div className="container-fluid py-5">
                <div className="container  mt-5">
                     <div className="row ">
                    <div className="about-img col-lg-6 rounded-lg">
                    </div>
                    <div className="col-about col-lg-6">
                        <Para data={{text:paragraph.p2}}/>
                        <ul className="lists ml-xs-0 d-flex list-unstyled w-50 justify-content-between mt-5">
                            {
                                AboutData.list.map(ele=>{
                                    return <li  style={{fontSize:"22px",letterSpacing:"4px"}}>{ele}</li>
                                })
                            }
                        </ul>
                        <div>
                        <p className="about-para">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco labor nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span className="sp1">seasonal</span> ingredients.</p>
                        <p className="about-para para2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        </div>
                    </div>
                </div>
                </div>
               
            </div>
            <hr className="hr1"></hr>
            </>
        )
    }
}