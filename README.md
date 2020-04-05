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

