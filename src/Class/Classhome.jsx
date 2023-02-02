import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSocket } from '../Providers/Socket'
const Classhome = () => {
    const Socket = useSocket();
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [roomId, setRoomId] = useState("")


    const handleRoomJoined = useCallback(({ roomId }) => {
        console.log("Room joined => ", roomId);
        navigate(`/classroom/${roomId}`);
    }, [navigate]);
    useEffect(() => {
        Socket.on("Joined-Room", handleRoomJoined);
        return () => {
            Socket.off("Joined-Room", handleRoomJoined)
        }
    }, [handleRoomJoined, Socket]);

    const handleJoinRoom = () => {
        Socket.emit('join-room', { emailId: email, roomId });
        navigate(`/classroom/${roomId}`);
    };



    return (
        <>
            <div className="homepage-container">
                <div className='input-container'>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Enter your email here' />
                    <input value={roomId} onChange={e => setRoomId(e.target.value)} type="text" placeholder='Enter Room Code' />
                    <button onClick={handleJoinRoom}>Enter Room</button>
                </div>
            </div>
            {/* //////////////////////////////////////////////////////////////////////// */}
            {/* <form  className="form mt-5 w-75 mt-5">
                <div className="form-group w-50 mx-auto  ">
                    <h4 className="text-muted">Create Room Code</h4>
                    <input type="email" className="form-control mb-2" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Enter Email" />
                    <input type="text" className="form-control" value={roomId} onChange={e => setRoomId(e.target.value)} required placeholder="Unique Room Code" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your CODE with anyone else.</small><br/>
                    <button type="button" onClick={handleJoinedRoom} className=" btn btn-secondary text-center d-flex  w-25 btn-block">Enter To Room</button>
                </div>
                <div className="">
                </div>
            </form> */}
            {/* ///////////////////////////////////////////////////////////////////////////////////// */}
        </>
    )
}

export default Classhome