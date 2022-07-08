import React from 'react'

const PopUp = () => {
  return (
    <div>
        <div className="popup d-flex justify-content-center align-items-center" style={{width:"100%", height:"100vh"}}>

            <div className="popupmain d-flex justify-content-center align-items-center text-center" style={{backgroundColor:"red",height:"50vh",width:"40%"}}>

                <div className="buttons d-flex justify-content-center align-items-center">
                    <button className='buttons text-center'>submit</button>
                </div>

                <div className="buttons d-flex justify-content-center align-items-center">
                    <button className='buttons text-center'>submit</button>
                </div>

                <div className="buttons d-flex justify-content-center align-items-center">
                    <button className='buttons text-center'>submit</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default PopUp