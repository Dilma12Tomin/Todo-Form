import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const TodoForm = () => {
  var [inputval, setuserinputval] = useState('')
  var [formval, setformval] = useState([])
  const adduserinput = (e) => {
    console.log("e.target", e.target.value)
    setuserinputval(inputval = e.target.value)

  }
  const addtodolist = () => {
    setformval(
      formval => [...formval, inputval]
      // ... refers to spread operator. spread operatore is to save the value of  inputval to formval as array.If not using spread operator it will not save all the value as array
    )
  }
  return (
    <div>
      <div id="todoform">
        <br></br>
        <br></br>
        <Typography variant="h4">ToDo Form</Typography>
        <br></br>
        <br></br>
        <TextField variant="outlined" placeholder="Input" onChange={adduserinput} value={inputval}>Input</TextField>
        <br></br>
        <br></br>
        {/* When click on addtolist it will got to that function, in that function we are setting the value of the array variable 'formval' using the useState 'setformval' */}
        <Button variant='contained' color="primary" onClick={addtodolist}>Submit</Button>
        <br></br>
        <ul>

          {/* to display the value of formval as list after submitting the buton. so we need to use map function to take each value of array formval*/}
          {formval.map((value, index) => {
            return <div>
              <li key={index}>{value}
              </li>
            </div>
          })}

        </ul>
      </div>
    </div>
  )
}

export default TodoForm
