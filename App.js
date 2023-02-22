import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import GlobalBottomNav from "./src/components/GlobalBottomNav/GlobalBottomNav"

export default function App() {
  const randomNumberCount = 6;
  const randomNumbers = Array.from({ length: randomNumberCount }).map(
    () => 1 + Math.floor(10 * Math.random())
  );
  return (
    <PaperProvider>
        <GlobalBottomNav />
    </PaperProvider>
  );
}



