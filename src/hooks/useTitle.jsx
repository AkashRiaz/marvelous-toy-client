import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Marvelous-Toy-${title}`
    },[title])
}

export default useTitle;