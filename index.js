/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './Screens/App';
import Sensor from './Screens/Sensor';
import {name as appName} from './app.json';
import Logo from './Screens/Logo';
import Register from './Screens/Register';
import newReg from './Screens/Result';
// import MyTabs from './Screens/toptab';
import Login from './Screens/Login';
import SenGraph from './Screens/SenGraph';
import FindWash from './Screens/FindWash';
// import { Drawer } from 'react-native-paper';
import Drawer1 from './Screens/Drawer';
import DrawerMenu from './Screens/Drawer1';
import TryDraw1 from './Screens/TryDraw1';
import TryDraw from './Screens/TryDraw';
import 'react-native-reanimated';
import AdminHome from './Screens/AdminHome';
import Washlist from './Screens/Washlist';
import Map from "./Screens/Map"

AppRegistry.registerComponent(appName, () => App)
