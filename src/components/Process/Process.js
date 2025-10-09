import React from 'react'
import './Process.css'


function Process() {
  return (
    <>
      <div id='process' className='process section-padding'>
        <div className='container'>
          <div className='heading' >
            <h1 className='mb-5'>Our Workflow</h1>
          </div>
          <div className='process-card-sec'>
            <div className='row'>
              <div className='col-md-4 mt-5' >
                <div className='process-card  shadow'></div>
              </div>
              <div className='col-md-4 mt-5'>
                <div className='process-card shadow'></div>
              </div>
              <div className='col-md-4 mt-5'>
                <div className='process-card shadow'></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Process
