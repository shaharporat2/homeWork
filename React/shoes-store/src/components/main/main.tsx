import React, { Component } from "react";
import "./main.css";
export class Main extends Component{
    public render() : JSX.Element{
        return(
            <div className="main">
                <p> Welcome to our shoes store</p>
                <p> Here you can by shoes....</p>

                {/* Video*/}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/A-12ohH1-oI"></iframe>
            </div>


            
        );
    }
}