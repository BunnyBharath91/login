import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <div className="bg-container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginForm} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
