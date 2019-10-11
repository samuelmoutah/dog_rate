import React from "react";
import axios from "axios";


class App extends React.Component {
  state = {
    isLoading: true,
    dogs: []
  };
  getDog = async () => {
    const { 
      data: { message } 
    } = await axios.get(
      "https://dog.ceo/api/breeds/image/random"
      );
    this.setState({
      dogs: message, 
      isLoading: false
    })
      //console.log(dog.data.message)
  };
  componentDidMount() {
    this.getDog();
  }
  render() {
    
    return <div>
      <img src={this.state.dogs} alt=""/>
    </div>;
    
  }
}
export default App;