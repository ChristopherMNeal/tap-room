import React from "react";
import TapList from "./TapList";
import TapDetails from "./TapDetails";
import NewTapForm from "./NewTapForm";
import EditTapForm from "./EditTapForm";

export class TapControl extends React.Component {
  constructor() {
    super();
    this.state = {
      formVisibleOnPage: false,
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
      editing: false,
    };
  }

  handleButtonClick = () => {
    if (this.state.selectedTap !== null || this.state.formVisibleOnPage) {
      this.setState(() => ({
        formVisibleOnPage: false,
        selectedTap: null,
        editing: false,
      }));
    } else {
      this.setState(() => ({
        formVisibleOnPage: true,
        selectedTap: null,
        editing: false,
      }));
    }
  };

  // This needs to go somewhere?
  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleAddingNewTapToList = (newTap) => {
    const newMainTapList = this.state.mainTapList.concat(newTap);
    this.setState({
      mainTapList: newMainTapList,
      selectedTap: newTap,
    });
  };

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.mainTapList.filter(
      (tap) => tap.id === id
    )[0];
    this.setState({ selectedTap: selectedTap });
  };

  handleDeletingTap = (id) => {
    const newMainTapList = this.state.mainTapList.filter(
      (tap) => tap.id !== id
    );
    this.setState({
      mainTapList: newMainTapList,
      selectedTap: null,
    });
  };

  handleTapEditingInList = (tapToEdit) => {
    const editiedMainTapList = this.state.mainTapList
      .filter((tap) => tap.id !== this.state.selectedTap.id)
      .concat(tapToEdit);
    this.setState({ editiedMainTapList, editing: false, selectedTap: null });
  };

  render() {
    const currentTapList = this.state.mainTapList;
    let currentlyVisibleState = null;
    let descriptionButtonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditTapForm
          tap={this.state.selectedTap}
          onEditTap={this.handleTapEditingInList}
        />
      );
      descriptionButtonText = "Don't edit.";
    } else if (this.state.selectedTap !== null) {
      currentlyVisibleState = (
        <TapDetails
          tap={this.state.selectedTap}
          onClickingDelete={this.handleDeletingTap}
          onClickingEdit={this.handleEditClick}
        />
      );
      descriptionButtonText = "Hide details";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewTapForm onNewTapCreation={this.handleAddingNewTapToList} />
      );
      descriptionButtonText = "Never mind.";
    } else {
      descriptionButtonText = "Add a New Tap!";
    }
    return (
      <React.Fragment>
        <TapList
          currentTapList={currentTapList}
          onTapSelection={this.handleChangingSelectedTap}
        />
        {currentlyVisibleState}
        <button onClick={this.handleButtonClick}>
          {descriptionButtonText}
        </button>
      </React.Fragment>
    );
  }
}

export default TapControl;
