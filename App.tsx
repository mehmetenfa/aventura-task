import {View} from 'react-native';
import MainScreen from './src/screens/MainScreen'
import {SafeAreaProvider} from "react-native-safe-area-context";
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        secondary: 'yellow',
    },
};
export default function App() {
  return (
      <SafeAreaProvider style={{ flex: 1, alignItems: 'center'}}>
          <PaperProvider theme={theme}>
              <MainScreen />
          </PaperProvider>
      </SafeAreaProvider>
  );
}
