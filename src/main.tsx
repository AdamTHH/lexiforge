import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  ChakraBaseProvider,
  extendTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'

const {Modal, Button} = chakraTheme.components

const theme = extendTheme({
  components: {
    Modal,
    Button
  },
  colors: {
    dark: "#151515",
    resetred: "#E23030",
    darkborder: "#252525"
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraBaseProvider theme={theme}>
    <App />
  </ChakraBaseProvider>
)
