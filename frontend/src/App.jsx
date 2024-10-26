import { RouterProvider } from "react-router-dom";
import { router } from "./route/Router";
import { ThemeProvider } from '@mui/material/styles';
import { normalTheme, accessibleTheme } from './theme.jsx';
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from './store/themeSlice.js'
import AccessibleButton from './components/AccessibleButton';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme)

  return (
    <ThemeProvider theme={theme ? accessibleTheme : normalTheme}>
      <AccessibleButton isAccessibleMode={theme} toggleTheme={() => dispatch(changeTheme())} />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
