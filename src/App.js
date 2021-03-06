import React from "react";
import "./App.css";
import UserItem from "./components/UserItem"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      name: "",
      email: "",
      users:[],
    };
    this.handleNameChange=this.handleNameChange.bind(this);
    this.handleEmailChange=this.handleEmailChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleNameChange(e){
    this.setState({name: e.target.value});
    
  }

  handleEmailChange(e){
    this.setState({email: e.target.value});
    
    
  }

  handleSubmit(e){
    e.preventDefault();
    let newUser={name: this.state.name, email: this.state.email};
    this.setState({ users: [...this.state.users, newUser]})
  }


  render() {
    return (
      <div className="App">
        {/* Form to add new user */}
        <div className='form-contain'>
          <form onSubmit={this.handleSubmit} className='input-contain' >
            <input className='type-field' type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/>
            <br />
            <input className='type-field' type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
            <br />
            <input className='Button' type="submit"  />
          </form>
        </div>

        {/* List of users */}
        <div className='list-contain'>
        {this.state.users.map((user, index) => 
        <UserItem key={index} name={user.name} email={user.email} />
          )} 	
        </div>
      </div>
    );
  }
}

export default App;
