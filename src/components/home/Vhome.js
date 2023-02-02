import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VHomePage = () => {
    const navigate = useNavigate()
    const [roomCode, setRoomCode] = useState('')
    const handleFormSubmit = (ev) => {
        ev.preventDefault()
        navigate(`/vroom/${roomCode}`)
    }
    return (
        <>
            <form className="form mt-5 w-75 mt-5">
                <div className="form-group w-50 mx-auto  ">
                    <h4 className="text-muted">Create Room Code</h4>
                    <input type="text" className="form-control" value={roomCode} onChange={e => setRoomCode(e.target.value)} required placeholder="Unique Room Code" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your CODE with anyone else.</small><br />
                    <button type="button" onClick={handleFormSubmit} className=" btn btn-secondary text-center d-flex  w-25 btn-block">Enter To Room</button>
                </div>
                <div className="">
                </div>
            </form>
        </>
    )
}

export default VHomePage