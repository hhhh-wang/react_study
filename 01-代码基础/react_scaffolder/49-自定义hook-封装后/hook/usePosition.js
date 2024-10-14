import { useEffect, useState } from "react";

function usePosition() {
    let [x, setX] = useState(110)
    let [y, setY] = useState(110)
    useEffect(() => {// componentDidMount
        function move(e) {
            console.log(e.clientX, e.clientY);
            setX(e.clientX)
            setY(e.clientY)
        }
        window.addEventListener('mousemove', move)
        return () => {// componentWillUnmount
            window.removeEventListener('mousemove', move)
        }
    }, [])
    return {
        x,y
    }
}

export default usePosition;