import React, { Component } from 'react';
import './App.css';

class Home extends Component {

    handleClickrepos(){
      console.log("githubrepos");
      this.props.history.push("/githubrepos");  
   }

   handleClickuser() {
    console.log("githubuser");
    this.props.history.push("/githubuser");
    }

    render() { 
        return (
            <div>
                <div className="container-fluid portion" align="center">
                    <h1>Github Search Bar</h1>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4"> <form className="searchbar">
                        <button  className="btn btn-primary" onClick={() => this.handleClickuser()}>Github user</button>
                        <button  className="btn btn-success" onClick={() => this.handleClickrepos()}>Github repos</button>
                        </form></div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
