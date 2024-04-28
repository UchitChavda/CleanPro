import {AppRegistry} from 'react-native';
import App from './Screens/App';
import {name as appName} from './app.json';
import 'react-native-reanimated';
import AdminHome from './Screens/AdminHome';

AppRegistry.registerComponent(appName, () => App)