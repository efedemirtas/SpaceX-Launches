import React from "react";
import ReactDOM from "react-dom";

import SpaceData from "./components/SpaceData";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      spaceData: []
    };
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v3/launches/")
      .then(res => res.json())
      .then(data => {
        this.setState({
          spaceData: data,
          isLoaded: true
        });
      })
      .catch(console.log);
  }

  toggleSpacedata = () => {
    this.setState({
      showSpaceData: !this.state.showSpaceData
    });
  };

  render() {
    if (!this.state.isLoaded) {
        return (
          <div className="Load">
            <h1>Loading...</h1>
          </div>
        );
      } else {
      let spacedata = this.state.spaceData.map(i => (
        <SpaceData data={i} id={i.flight_number} />
      ));
      return (
        <div className="App">
          <h1>SpaceX Launches</h1>
          {spacedata}
          <p>[Developed by Efe Demirtaş]</p>
        </div>
      );
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
