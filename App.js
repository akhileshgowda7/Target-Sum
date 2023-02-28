import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import GlobalBottomNav from './src/components/GlobalBottomNav/GlobalBottomNav';

export default function App() {
  return (
    <PaperProvider>
      <GlobalBottomNav />
    </PaperProvider>
  );
}
