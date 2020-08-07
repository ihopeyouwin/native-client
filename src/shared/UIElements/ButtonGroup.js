import React, {useState} from 'react';
import {Text} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import * as RootNavigation from '../RootNavigation';


const BtnGroup = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateIndex = (index) => {
    setSelectedIndex(index)
    let route;
    switch (index) {
      case 0:
        route = 'Home'
        break;
      case 1:
        route = 'Wallets'
        break;
      case 2:
        route = 'Transactions'
        break;
      default:
        route = 'Home'
        break;
    }
    RootNavigation.navigate(route)
  }
  const component1 = () => <Text>Hello</Text>
  const component2 = () => <Text>World</Text>
  const component3 = () => <Text>ButtonGroup</Text>
  const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
  return (
    <ButtonGroup
      onPress={(index) => updateIndex(index,)}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{ height: 50 }}/>
  )

}

export default BtnGroup;
