import React, {Component} from 'react'
export default class Navigation extends Component {
    render() {
        return (
            <div class="topnav">
                <nav>
                    <a class="active" href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </nav>
            </div>
        )
    }
}