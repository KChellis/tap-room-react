
import React from 'react';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
import BottomButtons from './BottomButtons';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      userMode:'user',
      showAddForm: false,
      selectedKeg: null,
      masterKegList: [
        {
          name: 'Superfuzz',
          brewer: 'Elysian Brewing',
          type: 'Blood Orange Pale Ale',
          abv: 6.4,
          ibu: 45,
          prices: [5.00, 9.00, 18.00],
          color: 'light',
          pints: 124,
          level: 'full',
          id: 1
        },
        {
          name: 'Citrus Mistress',
          brewer: 'Hop Valley Brewing',
          type: 'IPA',
          abv: 6.3,
          ibu: 80,
          prices: [5.00, 9.00, 18.00],
          color: 'light',
          pints: 124,
          level: 'full',
          id: 2
        },
        {
          name: 'Black Butte Porter',
          brewer: 'Dechutes Brewing',
          type: 'Porter',
          abv: 5.2,
          ibu: 30,
          prices: [5.00, 9.00, 18.00],
          color: 'dark',
          pints: 124,
          level: 'full',
          id: 3
        },
        {
          name: 'Cucumber Crush',
          brewer: '10 Barrel Brewing',
          type: 'Sour',
          abv: 5,
          ibu: 4,
          prices: [4.50, 8.50, 17.00],
          color: 'light',
          pints: 124,
          level: 'full',
          id: 4
        },
        {
          name: 'Pabst Blue Ribbon',
          brewer: 'Pabst Brewing',
          type: 'Piss',
          abv: 4.7,
          ibu: 10,
          prices: [3.00, 6.00, 12.00],
          color: 'light',
          pints: 124,
          level: 'full',
          id: 5
        },
        {
          name: 'Maid Marion',
          brewer: '2 Towns Ciderhouse',
          type: 'Marionberry Cider',
          abv: 6,
          ibu: 0,
          prices: [5.00, 9.00, 18.00],
          color: 'cider',
          pints: 124,
          level: 'full',
          id: 6
        },
        {
          name: 'Willamette Valley Pinot Noir',
          brewer: 'Boedecker Cellars',
          type: 'Pinot Noir',
          abv: 14,
          ibu: 0,
          prices: [6.00, 11.00, 22.00],
          color: 'red wine',
          pints: 124,
          level: 'full',
          id: 7
        }
      ]
    };
    this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this);
    this.handleToggleMode = this.handleToggleMode.bind(this);
    this.handleToggleForm = this.handleToggleForm.bind(this);
  }

  handleAddingNewKeg(newKeg){
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  handleToggleMode(){
    if(this.state.userMode === 'user'){
      this.setState({userMode: 'admin'});
    } else {
      this.setState({userMode: 'user'});
    }
  }

  handleToggleForm(){
    if(this.state.showAddForm){
      this.setState({showAddForm: false});
    } else {
      this.setState({showAddForm: true});
    }

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
        <KegList userMode= {this.state.userMode} kegList={this.state.masterKegList}/>
        <BottomButtons onToggleMode={this.handleToggleMode} onToggleForm={this.handleToggleForm} userMode={this.state.userMode}/>
        <NewKegControl onNewKegCreation={this.handleAddingNewKeg}/>
      </div>
    );
  }
}

export default App;
