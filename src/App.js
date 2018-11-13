//import react
import React, { Component } from 'react';
//import the css for the app
import './App.css';
//import the Header component
import Header from './components/header/Header';
import Grid from './components/grid/Grid';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';

import Data from './Data';

import react_logo from './img/logo.svg';

//define a new class for the App
//test
class App extends Component {

  article = [];

  constructor(props){

    super(props);

    this.state = {
      currentView : "login"
    };

    this.onSearch = this.onSearch.bind(this);
    this.handleThumbnailClicked = this.handleThumbnailClicked.bind(this);
    this.showHome = this.showHome.bind(this);

  }
  onSearch(term){

    console.log("search on term:" + term);
  }
  
  //we will pass this function to card component so we will handle which thumbnail was clicked
  handleThumbnailClicked(key){
    
    console.log("item with id:" + key + " was clicked");

    if(this.state.currentView !== "home")
      return;

    this.setState({currentView: "article"});
    let len = Data.items.length;
    
    for(let i = 0; i < len ; i++){

      if(Data.items[i].id === key){
        this.article.push(Data.items[i]);
      }
    }
  }

  showHome(){
    console.log("click title");
    this.article.pop();
    this.setState({currentView:"home"});
  }

  render() {
    
    let whatToRender;

    if(this.state.currentView === "home"){
      whatToRender = <Grid items={Data.items} colClass="col-m-3" onClick={this.handleThumbnailClicked} rowLength={2} />
    }
    else if(this.state.currentView === "article"){

      whatToRender = <Grid items={this.article} colClass="col-m-6" onClick={this.handleThumbnailClicked} rowLength={1} />;
    }
    else if(this.state.currentView === "login"){
      whatToRender = <Login loginButtonColor="#800000"/>;
    }
    else if(this.state.currentView === "logout"){
      whatToRender = null;
    }
    else if(this.state.currentView === "profile"){
      whatToRender = null;
    }
    else if(this.state.currentView === "signup"){
      whatToRender = <Signup />;
    }
    //after rendering the header, render the grid
    // pass the thumbnails and set the css responsive class
    return (
      <div>
        <Header title="My Own Blog" logo={react_logo} onSearchClick={this.onSearch} backgroundColor="#800000" onClickTitle={this.showHome} />
        {whatToRender}
      </div>
    );
  }
  
}

//finally do not forget to export the component
export default App;
