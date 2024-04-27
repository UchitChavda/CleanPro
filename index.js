import {AppRegistry} from 'react-native';
import App from './Screens/App';;
import {name as appName} from './app.json';
import Logo from './Screens/Logo';
import Register from './Screens/Register';
import Login from './Screens/Login';
import SenGraph from './Screens/SenGraph';
import FindWash from './Screens/FindWash';
import 'react-native-reanimated';
import AdminHome from './Screens/AdminHome';
import Washlist from './Screens/Washlist';
import Map from "./Screens/Map"

AppRegistry.registerComponent(appName, () => App)