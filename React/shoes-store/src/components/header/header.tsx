import React from "react"
import { Component } from "react";
import "./header.css"

export class Header extends Component{

    public render(): JSX.Element{

        return(
            <div className="header">
                <h1> Best Shoes Website ever</h1>
            </div>
        );
    }

}