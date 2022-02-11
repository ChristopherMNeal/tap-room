import React from "react";
import TapList from "./TapList";
// import TapDetails from "./TapDetails";
// import NewTapForm from "./NewTapForm";
// import EditTapForm from "./EditTapForm";

export class TapControl extends React.Component {
  constructor() {
    super();
    this.state = {
      mainTapList: [
        {
          name: "Bud",
          brand: "InBev",
          price: 3,
          alcoholContent: 3,
          beersSold: 124,
          id: 1,
          key: 4,
        },
      ],
    };
  }
  render() {
    const currentTapList = this.state.mainTapList;
    return (
      <React.Fragment>
        <TapList currentTapList={currentTapList} />
      </React.Fragment>
    );
  }
}

export default TapControl;
