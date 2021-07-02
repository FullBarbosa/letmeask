
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import {AuthContextProvider} from '../src/contexts/AuthContext'

import './services/firebase';
import './styles/global.scss';

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';



export default function App() {

  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
        <Route path="/rooms/:id" component={Room}/>

        <Route path="/admin/rooms/:id" component={AdminRoom}/>

      </Switch>
    </AuthContextProvider>
    </BrowserRouter>
  )
}
 