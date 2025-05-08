import { useRoutes } from 'react-router'
import { routes } from './config'
import 'primereact/resources/themes/lara-light-cyan/theme.css'

const App = () => {
  const appRoutes = useRoutes(routes)
  return appRoutes
}

export default App
