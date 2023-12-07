// Write your code here
import {Component} from 'react'
import DemoninationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {number: 2000}

  decreaseNumber = uniqueId => {
    const {denominationsList} = this.props
    const {id, value} = denominationsList
    const {number} = this.state

    const resultNumber = denominationsList.filter(each => each.id === uniqueId)
    const decreasedNumberList = resultNumber[0].value
    this.setState({number: number - decreasedNumberList})
  }

  render() {
    const {denominationsList} = this.props
    const {number} = this.state
    return (
      <div>
        <h1>
          <span>S</span>Sarah Williams
        </h1>
        <p>Your Balance</p>
        <p>{number}</p>
        <p>In Rupees</p>
        <p>Withdraw</p>
        <p>CHOOSE SUM (IN RUPEES)</p>
        <ul>
          {denominationsList.map(eachNumber => (
            <DemoninationItem
              denominationsList={eachNumber}
              decreaseNumber={this.decreaseNumber}
              key={eachNumber.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
