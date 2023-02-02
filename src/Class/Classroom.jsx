import React, { useEffect, useCallback, useState } from 'react'
import ReactPlayer from 'react-player'
import { useSocket } from '../Providers/Socket'
import { usePeer } from '../Providers/Peer';
const Classroom = () => {
  const socket = useSocket();
  const { peer, createOffer, createAnswer, setRemoteAns, sendStream, remoteStream } = usePeer();
  const [myStream, setMyStream] = useState(null);
  const [remoteEmailId, setRemoteEmailId] = useState(null)

  const handleNewUserJoined = useCallback(async (data) => {
    const { emailId } = data
    console.log("New user joined", emailId)
    const offer = await createOffer();
    socket.emit('call-user', { emailId, offer })
    setRemoteEmailId(emailId)
  },
    [createOffer, socket]
  );

  const handleIncomingCall = useCallback(async (data) => {
    const { from, offer } = data
    console.log("Incoming Call From ", from, offer);
    const ans = await createAnswer(offer)
    socket.emit('call-accepted', { emailId: from, ans })
    setRemoteEmailId(from)
  }, [createAnswer, socket])

  const handleCallAccepted = useCallback(async (data) => {
    const { ans } = data
    console.log('Call Got Accepted', ans)
    await setRemoteAns(ans)

  }, [setRemoteAns])

  const getUserMediaStream = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    setMyStream(stream)
  }, [])

  const handleNegosiation = useCallback(() => {
    const localOffer = peer.localDescription;
    socket.emit('call-user', { emailId: remoteEmailId, offer: localOffer })
  }, [peer.localDescription, remoteEmailId, socket])

  useEffect(() => {
    socket.on('user-joined', handleNewUserJoined)
    socket.on('incoming-call', handleIncomingCall)
    socket.on('call-accepted', handleCallAccepted)
    return () => {
      socket.off('user-joined', handleIncomingCall)
      socket.off('incoming-call', handleIncomingCall)
      socket.off('call-accepted', handleCallAccepted)
    }
  }, [handleCallAccepted, handleIncomingCall, handleNewUserJoined, socket])

  useEffect(() => {
    peer.addEventListener('negotiationneeded', handleNegosiation)
    return () => {
      peer.removeEventListener('negotiationneeded', handleNegosiation)
    }
  }, [])

  useEffect(() => {
    getUserMediaStream();
  }, [getUserMediaStream])

  return (
    <>
      <div className='room-page-container'>
        <h1>Room Page</h1>
        <h4>You are connected to {remoteEmailId}</h4>
        <button onClick={e => sendStream(myStream)} >Send My Video</button>
        <ReactPlayer url={myStream} playing muted />
        <ReactPlayer url={remoteStream} playing />
      </div>
    </>
  )
}
export default Classroom