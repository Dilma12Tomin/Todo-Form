import React, { useState } from 'react'
// for usefrom, instaed of file name(read) in line number 3 and 6 ,change that with useform.The value of book is getting from the bookapplication.
// The values sending from booksapplication will be saving here as book. we dont want to display anything from this file.so can remove the divs
//  Inside useform create a single usestate for all the fields

const useForm = (book) => {
  // create usestate
  var[val,setval]= useState(book);
  return [val,(event)=>{
    setval(
      {
      ...val,[event.target.name]:event.target.value
      }
    )
  }]
}

export default useForm
