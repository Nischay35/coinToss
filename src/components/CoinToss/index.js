import {Component} from 'react'
import './index.css'
class CoinToss extends Component {
  state = {heads: 0, tails: 0}
  onHead = () => {
    this.setState(prevState =>({heads: prevState.heads + 1}))
  }
  onTails = () => {
    this.setState(prevState => ({tails: prevState.tails + 1}))
  }
  getTossResult = tossResult => {
    const result = tossResult === 0 ? 'heads' : 'tails'
    const updateUrl =
      result === 'heads'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return updateUrl
  }
  render() {
    const {heads, tails} = this.state
    const total = heads + tails
    const tossResult = Math.floor(Math.random() * 2)
    const updateUrl = this.getTossResult(tossResult)
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="text">Heads (or) Tails</p>
          <img src={updateUrl} alt="toss result" className="toss-image" />
          {tossResult === 0 ? (
            <button className="button" onClick={this.onHead}>
              Toss Coin
            </button>
          ) : (
            <button className="button" onClick={this.onTails}>
              Toss Coin
            </button>
          )}
          <div className="stats">
            <p className="statistics">Total: {total}</p>
            <p className="statistics">Heads: {heads}</p>
            <p className="statistics">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
