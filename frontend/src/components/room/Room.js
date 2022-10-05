import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Room = (props) => {
    const { roomId } = useParams();

    useEffect(() => { 
        console.log("Room mounted")

        return () => {
            console.log("Room unmounted")
        }
    }, [roomId])

    return(
        <div className="container">
            <h1>{roomId}</h1>
        </div>
    )
}

export default Room;