import React, { Component } from 'react'
import { Films} from '../shared/ListOfFilms'
import FlimPresentation from './FilmPresentation';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
           films: Films
        };
     }
  render() {
    return <FlimPresentation flims={this.state.films}/>
  }
}
export default Main