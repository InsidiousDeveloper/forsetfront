import { useRoutes } from './router'
import { BrowserRouter as Router } from 'react-router-dom'
import { useAuthorization } from './hooks/authorization.hook'
import { AuthContext } from './context/authcontext'
import './styles/main.scss'
import './styles/media.scss'

function App() {

  const {token, login, logout, userId} = useAuthorization()
  // Проверка авторизации пользователя
  const isAuthenticated = !!token
  const router = useRoutes(isAuthenticated)

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
          {router}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
