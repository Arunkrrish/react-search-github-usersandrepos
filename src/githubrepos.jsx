import React, { Component } from 'react';
import './App.css';

class Githubrepos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            repos:'',
            reposlist: [],
            showresult:false,
        }
    }

   handlechange(e){
   this.setState({ repos:e.target.value });
   }

    handleClick(e) {
        e.preventDefault();
        // <img src={require('./assets/image/giphy.gif')} alt="userpic" />
        // the api request function
        const { repos } = this.state;
        fetch("https://api.github.com/search/repositories?q=topic:"+ repos)
            .then((res) => res.json())
            .then((data) => {
                console.log("data");
                // update state with API data
                this.setState({
                  reposlist: data,
                  showresult:true
                }).bind(this);
            })
            .catch((err) => console.log('oh no!'))
    }

    render() { 
        return (
            <div>
                <div className="container-fluid portion" align="center">
                    <h1>Github Repos Search</h1>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4"> <form className="searchbar" onSubmit={this.handleClick.bind(this)}>
                            <input value={this.state.repos}  type="text" onChange={(e) => this.handlechange(e)} placeholder="type repos..." />
                            <input type="submit" onSubmit={this.handleClick.bind(this)} className="primary" value="Search GitHub repos" />
                        </form></div>
                        <div className="col-md-4"></div>
                    </div><br/>
                    <div className="row">
                      {this.state.showresult ? this.state.reposlist.items.map((reposdata,i) => <div key={i} className="col-md-4 userportion">
                        <img src={reposdata.owner.avatar_url} alt="userpic" className="rounded" width="304" height="236"/><br/><br/>
                        {/* <a href={reposdata.clone_url} target="_blank">{reposdata.name}</a> */}
                        <a href={reposdata.svn_url} target="_blank">{reposdata.name}</a>
                        {/* <p>Size:{reposdata.size}</p> */}
                        <p>Count:{reposdata.watchers_count}</p>
                        <p>Username:<a href={reposdata.owner.html_url} target="_blank"> {reposdata.owner.login}</a></p>
                        </div>
                    ) : ""}
                    </div>
                </div>
            </div>
        );
    }
}

export default Githubrepos;
