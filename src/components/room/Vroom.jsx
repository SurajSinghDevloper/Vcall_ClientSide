import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const VRoomPage = () => {
    const { roomId } = useParams()

    const myMeeting = async (element) => {
        const appID = 1154075355;
        const sereverSecret = '7b7b6395d8d0f1991f0fc97b4944cf0f';
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            sereverSecret,
            roomId,
            Date.now().toString(),
            "Suraj"
        )
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference
            }
        })
    }
    return (
        <>
            <div className="room-page mx-auto w-75 mt-5">
                <div ref={myMeeting} className="container" />
                <div class="input-group input-group-sm mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
  </div>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>

            </div>
            <div className="container w-50">
                <div className="input-group mb-3">
                <input type="file" className="custom-file-input" id="inputGroup-sizing-default" aria-describedby="inputGroupFileAddon04" />
                </div>
                <div className="input-group">
                    <div className="custom-file mt-1">
                        <input type="file" className="custom-file-input" id="inputGroup-sizing-default" aria-describedby="inputGroupFileAddon04" />
                        <label className="custom-file-label" for="inputGroupFile04">Choose file</label>
                    </div>
                    <div className="input-group-append">
                        <button className="btn btn-primary " type="button" id="inputGroupFileAddon04">Up-Load</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VRoomPage