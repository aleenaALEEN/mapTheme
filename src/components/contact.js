import React from "react";
import { paragraph } from "../data";
import Para from "./para";
// import {FaCalendarMinus} from "react-icons/fa";

export default class Contact extends React.Component{
    render(){
        return(
            <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-contact col-lg-12">
                            <Para data={{text:paragraph.p4}}/>
                            <div>
                                <p className="para-ctc">We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
                                <h4 className="h4-ctc">Catering Service, 42nd Living St, 43043 New York, NY</h4>
                                <p className="para2-ctc">You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
                            </div>
                            <input  type="text" placeholder="Name"></input>
                            <input className="inp2" type="text" placeholder="How many people"></input>
                            <input className="inp3" type="text" placeholder="11/3/2022 12:08 AM"></input>
                            <input className="inp4" type="text" placeholder="Message \ Special requirements"></input>
                            <button>SEND MESSAGE</button> 
                            {/* <div><FaCalendarMinus/></div>  */}
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}