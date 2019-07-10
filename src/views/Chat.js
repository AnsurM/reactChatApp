import React, { Component } from 'react';
import CreateMessage from '../components/CreateMessage';
import fb from '../firebase/init';
import moment from 'moment';

class Chat extends Component {

    constructor(props) 
    {
        super(props);
    }

    state = {
        messages: [],
        viewMessages: null
    };

    getDataFromFirebase = () => {
        let ref = fb.collection('messages').orderBy('timestamp');
        let that = this;
        let newMessages = [];

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type == 'added') {
                    let doc = change.doc;
                    newMessages.push({
                        id: doc.id,
                        name: doc.data().name,
                        message: doc.data().message,
                        timestamp: moment(doc.data().timestamp).format('LTS')
                    });
                }
            });
            console.log("Got messages! : ", newMessages)
            that.setState({messages: newMessages})
        });
    }

    componentDidMount() {
        this.getDataFromFirebase();
    }

    render() {
        let vM = this.state.messages.length > 0 ? this.state.messages : '';
        let vVM = [];
        for (let i = 0; i < vM.length; i++) {
            const element = vM[i];
            vVM.push(
                <div key={element.id}>
                <span className="text-info">{ element.name }: </span>
                <span>{ element.message }</span>
                <span pullRight className="text-secondary time">{ element.timestamp }</span>
                </div >    
            );
        }

        return (
            <div className="chat container">
                <h2 className="text-primary text-center">Real-Time Chat</h2>
                <h5 className="text-secondary text-center">Powered by React.js & Firebase</h5>
                <div className="card">
                    <div className="card-body">
                        {this.state.messages.length === 0 ?
                            <p className="nomessages text-secondary">
                                [No messages yet!]
                            </p>
                            : null
                        }
                        <div className="messages">
                            {vVM}
                        </div>
                    </div>
                </div>
                <div className="card-action">
                    <CreateMessage name={this.props.name}/>
                </div>
            </div>
        );
    }
}

export default Chat;