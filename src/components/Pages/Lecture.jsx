import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

function Lecture() {

  const [fileData, setFileData] = useState()
  

  useEffect(()=>{
    const fetchData = async () => {
      //fetch from axios
      const { data } = await axios.get("http://localhost:8000/vroom/allpost")
      console.log(data)
      setFileData(data)
    }

    fetchData()
  },[])
  return (
    <>
      <h1>Commin soon please wait.....</h1>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="container">
        <div className="row">
          {
            fileData && fileData.map((item, index) => {
              return (
                <div className="col-md-4">
                  <div className="card mt-4">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <small className="card-text">{item.author}</small>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    </>
  )
}

export default Lecture