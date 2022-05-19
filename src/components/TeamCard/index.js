import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <li>
      <p>{id}</p>
      <p>{name}</p>
      <p>{teamImageUrl}</p>
    </li>
  )
}

export default TeamCard
