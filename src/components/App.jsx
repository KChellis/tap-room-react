
import React from 'react';
import KegList from './KegList';
import AddEditKegForm from './AddEditKegForm';
import BottomButtons from './BottomButtons';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      userMode:'user',
      showAddForm: false,
      selectedKegId: null,
      masterKegList: {
        '1': {
          name: 'Superfuzz',
          brewer: 'Elysian Brewing',
          type: 'Blood Orange Pale Ale',
          abv: 6.4,
          ibu: 45,
          prices: [5.00, 9.00, 18.00],
          color: 'light',
          pints: 124,
          level: 'full'
        },
        '2': {
          name: 'Citrus Mistress',
          brewer: 'Hop Valley Brewing',
          type: 'IPA',
          abv: 6.3,
          ibu: 80,
          prices: [5.00, 9.00, 18.00],
          color: 'light',
          pints: 124,
          level: 'full'
        },
        '3': {
          name: 'Black Butte Porter',
          brewer: 'Dechutes Brewing',
          type: 'Porter',
          abv: 5.2,
          ibu: 30,
          prices: [5.00, 9.00, 18.00],
          color: 'dark',
          pints: 124,
          level: 'full'
        },
        '4': {
          name: 'Cucumber Crush',
          brewer: '10 Barrel Brewing',
          type: 'Sour',
          abv: 5,
          ibu: 4,
          prices: [4.50, 8.50, 17.00],
          color: 'light',
          pints: 124,
          level: 'full'
        },
        '5': {
          name: 'Pabst Blue Ribbon',
          brewer: 'Pabst Brewing',
          type: 'Piss',
          abv: 4.7,
          ibu: 10,
          prices: [3.00, 6.00, 12.00],
          color: 'light',
          pints: 124,
          level: 'full'
        },
        '6': {
          name: 'Maid Marion',
          brewer: '2 Towns Ciderhouse',
          type: 'Marionberry Cider',
          abv: 6,
          ibu: 0,
          prices: [5.00, 9.00, 18.00],
          color: 'cider',
          pints: 124,
          level: 'full'
        },
        '7': {
          name: 'Willamette Valley Pinot Noir',
          brewer: 'Boedecker Cellars',
          type: 'Pinot Noir',
          abv: 14,
          ibu: 0,
          prices: [6.00, 11.00, 22.00],
          color: 'red wine',
          pints: 124,
          level: 'full'
        }
      }
    };
    this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this);
    this.handleToggleMode = this.handleToggleMode.bind(this);
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleSetSelectedKegId = this.handleSetSelectedKegId.bind(this);
  }

  handleAddingNewKeg(newKeg){
    newKeg.pints = 124;
    newKeg.level = 'full';
    let newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKeg.id]: newKeg});
    this.setState({masterKegList: newMasterKegList});
  }

  handleToggleMode(){
    if(this.state.userMode === 'user'){
      this.setState({userMode: 'admin'});
    } else {
      this.setState({userMode: 'user', showAddForm: false});
    }
  }

  handleToggleForm(){
    if(this.state.showAddForm){
      this.setState({showAddForm: false});
    } else {
      this.setState({showAddForm: true});
    }
  }

  handleSetSelectedKegId(kegId) {
    this.setState({selectedKegId: kegId});
  }

  render() {

    return (
      <div className='app'>
        <style jsx global>
          {`
            h1 {
              text-align: center;
              font-size: 50px;
            }
            body {
              background-color: #274d21;
              background-image: url("https://www.transparenttextures.com/patterns/bright-squares.png");
            }
            `}
        </style>
        <h1>Welcome to the Tap Room!</h1>
        <KegList userMode= {this.state.userMode} kegList={this.state.masterKegList}
        onSetSelectedKegId={this.handleSetSelectedKegId}
        onToggleForm={this.handleToggleForm}/>
        <BottomButtons onToggleMode={this.handleToggleMode} onToggleForm={this.handleToggleForm} userMode={this.state.userMode}/>
        <AddEditKegForm onNewKegCreation={this.handleAddingNewKeg} showAddForm={this.state.showAddForm} onToggleForm={this.handleToggleForm}
        selectedKeg={this.state.masterKegList[this.state.selectedKegId]}/>
      </div>
    );
  }
}

export default App;
