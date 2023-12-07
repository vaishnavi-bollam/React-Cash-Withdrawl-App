// Write your code here
const DemoninationItem = props => {
  const {denominationsList, decreaseNumber} = props
  const {id, value} = denominationsList

  console.log(value)
  const onDecreaseNumber = () => {
    console.log(id)
    decreaseNumber(id)
  }
  return (
    <div>
      <li>
        <button onClick={onDecreaseNumber}>{value}</button>
      </li>
    </div>
  )
}

export default DemoninationItem
