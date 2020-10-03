import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn21124866Navigator from '../features/SignIn21124866/navigator';
import SignIn22124865Navigator from '../features/SignIn22124865/navigator';
import SignIn23124864Navigator from '../features/SignIn23124864/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn21124866: { screen: SignIn21124866Navigator },
SignIn22124865: { screen: SignIn22124865Navigator },
SignIn23124864: { screen: SignIn23124864Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
