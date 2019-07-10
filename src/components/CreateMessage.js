import React, { Component } from 'react';
import fb from '../firebase/init';

class CreateMessage extends Component {
    state = {
        message: '',
        errorText: null
    };

    onEnterMessage = (event) => {
        console.log(event.target.value);
        this.setState({
            message: event.target.value
        })
    }

    onSubmitMessage = () => {
        if (this.state.message.length > 0) {
            this.onSendMessageToFirebase(this.state.message);
        }
        else {
            this.setState({
                errorText: 'Please enter a message!'
            })
        }
    }

    onSendMessageToFirebase = (message) => {
        let that = this;
        if (message.length > 0) {
            fb.collection('messages').add({
                message: message,
                name: that.props.name,
                timestamp: Date.now()
            }).catch(err => {
                console.log(err);
            });
            this.setState({
                message: '',
                errorText: null
            })
        }
    }

    render() {
        return (
            <div className="container" style={{marginBottom: '30px'}}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter message ..."
                        value={this.state.message}
                        onChange={this.onEnterMessage} />
                    {
                        this.state.errorText ?
                            <p className="text-danger" >{this.state.errorText}</p>
                            : null
                    }
                </div>
                <button className="btn btn-primary" onClick={this.onSubmitMessage}>Submit</button>
            </div>

        );
    }
}

export default CreateMessage;