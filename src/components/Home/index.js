import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

class Home extends Component {
  state = {
    searchInput: '',
    videoArray: [],
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    const {searchInput} = this.state
    const url = 'https://apis.ccbp.in/videos/all?search='
  }

  render() {
    return <h1>Hello Home</h1>
  }
}

export default Home
