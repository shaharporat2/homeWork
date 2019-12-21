import React, { Component } from "react";
import "./copyright.css";

export class Copyright extends Component{
    public render() : JSX.Element{
        return(
            <div className="copyright">
                <p>
                    all rights reserved &copy;
                </p>
            </div>
        );
    }
}
