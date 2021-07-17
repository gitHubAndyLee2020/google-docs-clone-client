import './App.css'

import { useEffect } from 'react'

import Main from './components/Main'
import CreateDoc from './components/doc/CreateDoc'
import ViewUpdateDoc from './components/doc/ViewUpdateDoc'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 

import { getDocs } from './actions/docs'

function App() {
  const docs = useSelector(state => state.docs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDocs())
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/create_doc' exact component={CreateDoc} />
        {docs.map(doc => {
          return <Route path={`/${doc._id}`} exact component={() => <ViewUpdateDoc doc={doc}/>} />
        })}
      </Switch>
    </Router>
  )
}

export default App;
