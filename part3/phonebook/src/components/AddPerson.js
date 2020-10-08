import React from 'react'

const AddPerson = ({newPerson, addPerson, nameChange, numberChange}) => {

  return (
    <div>
      <h2>Add a new person</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newPerson.name} onChange={nameChange} />
        </div>
        <div>
          Number: <input value={newPerson.number} onChange={numberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default AddPerson
