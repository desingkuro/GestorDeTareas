import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './navigation/Navigation';
import { Home } from './screens/Home';
import { TodoProvider } from './components/TodoContext';

export default function App() {
  return (
    <TodoProvider>
      <Home/>
    </TodoProvider>
  );
}

