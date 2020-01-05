import React from "react";


class SpaceData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  handleClick = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const data = this.props.data;
    if (!this.state.visible) {
      return (
        <button onClick={this.handleClick}>
          Show
        </button>
      );
    } else {
      const local_date = data.launch_date_local;
      return (
        <div>
          <button onClick={this.handleClick}>
            Hide 
          </button>
          <h1 >Flight Number{data.flight_number}</h1>
          <p>Rocket Name: {data.rocket.rocket_name}</p>
          <p>Launched from {data.launch_site.site_name_long}</p>
          <h3>
            <b>Local launch time:</b> {local_date}
          </h3>
          {data.upcoming ? <h5>Upcoming</h5> :
          <h5>{data.launch_success || data.is_tentative ? <span className='success'>Success</span> : <span className='failed'>Failed</span>}</h5>}
        </div>
      );
    }
  }
}

export default SpaceData;
