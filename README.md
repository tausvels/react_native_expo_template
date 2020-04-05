# react_native_expo_template
## Add Expo CLI
1. `npm install -g expo-cli`
2. Adding expo to WINDOWS Environment Variable:
Environment Variables -> Under System Variables -> Path -> edit -> New -> `C:\Users\[UserName]\AppData\Roaming\npm`
3. Open Powershell from start and enter -> `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted`
4. Check correctly done: `expo --version`
`npm install`
## Some Modifications
- node_modules -> @react-navigation -> routers -> lib -> module -> index.js
REPLACE CONTENT WITH: 
```
import * as CommonActions from './CommonActions';
export { CommonActions };
export { default as BaseRouter } from './BaseRouter';
export { default as StackRouter, StackActions} from './StackRouter';
export { default as TabRouter, TabActions } from './TabRouter';
export { default as DrawerRouter, DrawerActions } from './DrawerRouter';
export * from './types';
```
## Start The App
- `npm start` OR `expo start` OR `expo start --android` OR `expo start --ios` OR `expo start --web`

## Folder Structure
## Node Modules Used:
- @react-native-community/masked-view": "^0.1.7", 
- "@react-navigation/native": "^5.1.4",
- "@react-navigation/stack": "^5.2.9", --> [Documentation]('https://reactnavigation.org/docs/navigating')
- "expo": "~37.0.3",
- "react": "~16.9.0",
- "react-dom": "~16.9.0",
- `"react-native": "https://github.com/expo/react-native/archive/sdk-37.0.0.tar.gz"`,
- "react-native-gesture-handler": "^1.6.1",
- "react-native-reanimated": "^1.7.1",
- "react-native-safe-area-context": "^0.7.3",
- "react-native-screens": "^2.4.0",
- "react-native-web": "~0.11.7"

