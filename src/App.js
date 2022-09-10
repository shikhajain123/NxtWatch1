import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import AppTheme from './context/Theme'

import Login from './components/Login'
import Home from './components/Home'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoCard from './components/VideoCard'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    activeTheme: 'light',
    savedVideos: [],
  }

  render() {
    return (
      <>
        <div className="app-container">
          <Switch>
            <Route exact path="/login" component={Login} />
            <>
              <Header />
              <div className="main-frame-container">
                <Navbar />
                <div className="content">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/trending" component={Trending} />
                    <Route exact path="/gaming" component={Gaming} />
                    <Route exact path="/saved-videos" component={SavedVideos} />
                    <Route exact path="/videos/:id" component={VideoCard} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </div>
            </>
          </Switch>
        </div>
      </>
    )
  }
}
export default App
