import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=> {
        document.title = `${title} - danger news`;
    }, [title])
}

export default useTitle;