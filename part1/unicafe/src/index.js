import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => setGood(good + 1)
  const neutralFeedback = () => setNeutral(neutral + 1)
  const badFeedback = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={goodFeedback} text='Good' />
      <Button handleClick={neutralFeedback} text='Neutral' />
      <Button handleClick={badFeedback} text='Bad' />
      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad} />
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {

  const total = good + neutral + bad

  if (total === 0) return <p>No feedback given</p>

  const avg = (good - bad) / total
  const pos = good / total * 100

  return (
    <table>
      <tbody>
        <Statistic label='Good' value={good} />
        <Statistic label='Neutral' value={neutral} />
        <Statistic label='Bad' value={bad} />
        <Statistic label='Total' value={total} />
        <Statistic label='Average' value={avg} />
        <Statistic label='Positive' value={pos} />
      </tbody>
    </table>
  )
}

const Statistic = ({ label, value }) => (
  <tr>
    <td>{label}</td>
    <td>{value}</td>
  </tr>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

