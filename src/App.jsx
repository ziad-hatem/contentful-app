import './App.css'
import Header from './Header'
import Projects from './Projects'
import { ToastContainer} from 'react-toastify';
function App() { 
  return (
    <>
      <Header />
      <Projects />
      <ToastContainer />
    </>
  )
}

export default App
