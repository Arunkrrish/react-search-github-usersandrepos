import React, { Component } from 'react';
import './App.css';

class Githubuser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userlist: [],
            showresult:false,
        }
    }

   handlechange(e){
   this.setState({ username:e.target.value });
   }

    handleClick(e) {
        e.preventDefault();
        // <img src={require('./assets/image/giphy.gif')} alt="userpic" />
        // the api request function
        const { username } = this.state;
        fetch("https://api.github.com/search/users?q="+ username)
            .then((res) => res.json())
            .then((data) => {
                console.log("data");
                // update state with API data
                this.setState({
                  userlist: data,
                  showresult:true
                }).bind(this);
            })
            .catch((err) => console.log('oh no!'))
    }

    render() { 
        return (
            <div>
                <div className="container-fluid portion" align="center">
                    <h1>Github Users Search</h1>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4"> <form className="searchbar" onSubmit={this.handleClick.bind(this)}>
                            <input value={this.state.username}  type="text" onChange={(e) => this.handlechange(e)} placeholder="type username..." />
                            <input type="submit" onSubmit={this.handleClick.bind(this)} className="primary" value="Search GitHub User" />
                        </form></div>
                        <div className="col-md-4"></div>
                    </div><br/>
                    <div className="row">
                      {this.state.showresult ? this.state.userlist.items.map((users,i) => <div key={i} className="col-md-4 userportion">
                        <img src={users.avatar_url} alt="userpic" className="rounded" width="304" height="236"/><br/><br/>
                        <a href={users.html_url} target="_blank">{users.login}</a>
                        </div>
                    ) : ""}
                    </div>
                </div>
            </div>
        );
    }
}

export default Githubuser;
