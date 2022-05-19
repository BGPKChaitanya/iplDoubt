import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const obtainedResponse = await fetch('https://apis.ccbp.in/ipl')
    let loadedData = await obtainedResponse.json()
    loadedData = loadedData.teams

    const updatedData = loadedData.map(eachDataItem => ({
      name: eachDataItem.name,
      id: eachDataItem.id,
      teamImageUrl: eachDataItem.team_image_url,
    }))
    this.setState({teamsList: updatedData})
  }

  render() {
    const {teamsList} = this.state

    return (
      <div className="bg-container">
        <div className="ipl-logo-container">
          <pre>{JSON.Stringify(teamsList)}</pre>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="iplHeading">IPL DashBoard</h1>
        </div>
        <ul>
          {teamsList.map(eachTeam => (
            <TeamCard eachTeam={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
