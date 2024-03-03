import { useEffect, useState } from "react"

const useAvailable = (props) => {
    const [status, setStatus] = useState(false)
    let avail = "Opened"
    useEffect(() => {
        if (props === true) {
            setStatus(true)
        }
        else {
            setStatus(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (status) avail = "Opened"
    else avail = "Closed"

    return avail
}

export default useAvailable