import React, { Component } from 'react';

class Login extends Component {
    
    constructor(props) {
        super(props);
        console.log(props);
    }

    state = {  
        name: '',
        errorText: null,
    };

    onSubmitName = (event) => {
        console.log(event.target.value);
        this.setState({name: event.target.value, errorText: ""});
        event.preventDefault();
    }

    onClickLogin = () => {
        if (this.state.name.length > 0) {
            this.props.onClickEnterChat(this.state.name);
        } else {
          this.setState({errorText: "Please enter a name!"})
        }
      }
  

    render() { 
        return (
            <div className="container">
            <div className="card login">
              <div className="card-body">
                <h2 className="card-title text-center">Login</h2>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Please enter your name ..." value={this.state.name} onChange={this.onSubmitName}/>
                    {
                        this.state.errorText ? 
                        <p className="text-danger">{ this.state.errorText }</p>
                        : null
                    }
                  </div>
                  <button className="btn btn-primary" onClick = {this.onClickLogin}>Enter Chat</button>
              </div>
            </div>
          </div>        
        );
    }
}
 
export default Login;