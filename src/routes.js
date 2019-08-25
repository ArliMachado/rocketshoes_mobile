import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      headerMode: 'none',
      // defaultNavigationOptions: {
      //   headerStyle: {
      //     backgroundColor: '#000',

      //   },

      //   headerTintColor: '#FFF',
      // },
    }
  )
);

export default Routes;
