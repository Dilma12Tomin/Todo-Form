import { Button, CircularProgress, circularProgressClasses, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

const APIFetch = () => {
    // below commented line is example of an array of object
    // var [trainer, settrainer] = useState([{ name: "Dilma", age: 25 }, { name: "Tomin", age: 29 }])

    var [trainer, settrainer] = useState([]);
    var [loading, setloading] = useState(false)

// using button click show data while loading the page
    useEffect(() => {
        setloading(loading=true)
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                settrainer(
                   trainer=response.data

                )
    setloading(loading=false)  
            })
    }, [])


    // using button click show data
    // const loaddata=() => {
       
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //         .then((response) => {
    //             settrainer(
    //                 trainer = response.data

    //             )
               
    //         })
    // }


    return (
        <div>
            {/* <Button variant="contained" color='success' onClick={loaddata} fullWidth>Load data</Button> */}
            {
               loading?<CircularProgress color="primary"></CircularProgress>:
            
            
                /* <Typography variant='h4'>{trainer[0].name}</Typography> */

                //  if we use the below method(12-14), it will show as DilmaTomin.
                //   trainer.map((value,index)=>{
                //     return value.name
                //   })

                // If we want to show this as a table use the below codes

                <Table>
                    <TableHead>
                        <TableRow>
                            {/* <TableCell style={{ fontWeight: 900, color: "blue" }}> Name </TableCell>
                            <TableCell style={{ fontWeight: 900, color: "blue" }}> age </TableCell> */}
                            <TableCell style={{ fontWeight: 900, color: "blue" }}> Name </TableCell>
                            <TableCell style={{ fontWeight: 900, color: "blue" }}> Email </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            trainer.map((value, index) => {
                                return <TableRow key={index}>
                                    <TableCell> {value.name} </TableCell>
                                    <TableCell> {value.email}</TableCell>
                                </TableRow>
                            })
                        }

                    </TableBody>
                </Table>
            }
            
        </div>
    )
}

export default APIFetch
