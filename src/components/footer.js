import React from "react";

export default class Footer extends React.Component{
    render(){
        return(
            <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-footer col-lg-12 mt-5">
                        <p>Powered by <span className="f-sp">w3.css</span></p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}