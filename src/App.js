import React from 'react';
import './App.css';
import Login from './views/Login';
import Chat from './views/Chat';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class App extends React.Component {

  state = {
    displayObject: null,
  };

  onClickEnterChat = (userName) => {
    console.log("Load chat app..");
    this.setState({
      displayObject: <Chat name={userName}/>,
    })
  }

  render() {
    return (
      <div className="App">
        <Container style={{ marginTop: "2rem" }}>
          <Row></Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>{this.state.displayObject ? this.state.displayObject : <Login onClickEnterChat={this.onClickEnterChat}/>}</Col>
            <Col sm={2}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
