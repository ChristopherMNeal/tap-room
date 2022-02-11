import React from "react";
import TapList from "./TapList";
import TapDetails from "./TapDetails";
// import NewTapForm from "./NewTapForm";
// import EditTapForm from "./EditTapForm";

export class TapControl extends React.Component {
  constructor() {
    super();
    this.state = {
      mainTapList: [
        {
          name: "Conclusions",
          brand: "Strohs Brewing",
          price: 3,
          alcoholContent: 4.3,
          beersSold: 0,
          description:
            "An usually whacked Strohs feels nagging remorse, but the Harpoon for a Coors makes a pact with an accidentally funny Avery IPA. When a rattlesnake over a malt goes to sleep, a Keystone light of a pool table hibernates. If a PBR around a bill cooks cheese grits for an infected Honey Brown, then another drunkenly frozen broken bottle self-flagellates. When a greedily snooty bill is tattered, a Bridgeport ESB from a Brewers Reserve slurly writes a love letter to another Budweiser about a Luna Sea ESB.",
          id: 1,
          key: 4,
        },
      ],
      selectedTap: null,
    };
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.mainTapList.filter(
      (tap) => tap.id === id
    )[0];
    this.setState({ selectedTap: selectedTap });
  };

  render() {
    const currentTapList = this.state.mainTapList;
    let currentlyVisibleState = null;
    if (this.state.selectedTap !== null) {
      currentlyVisibleState = <TapDetails tap={this.state.selectedTap} />;
    }
    return (
      <React.Fragment>
        <TapList
          currentTapList={currentTapList}
          onTapSelection={this.handleChangingSelectedTap}
        />
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default TapControl;
