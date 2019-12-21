import React, { Component } from "react";
import "./layout.css"
import { Header } from "../header/header";
import { Copyright } from "../copyright/copyright";
import { Main } from "../main/main";
export class Layout extends Component{

    public render() : JSX.Element{
        return (
            <div className="layout">
                <header><Header></Header></header>


                <main><Main></Main></main>


                <footer><Copyright> </Copyright></footer>
            </div>
        );
    }

}