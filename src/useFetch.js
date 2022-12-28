import { useEffect, useState } from "react"

const useFetch = (url) => {    //Custom hooks must start with 'use'
    const [data, setData] = useState(null)

    const [isPending, setIsPending] = useState(true)

    const [error, setError] = useState(null)

    //Runs for every render
    useEffect(() => {
        const abortCont = new AbortController()
        fetch(url, {signal:abortCont.signal})    //Get request to localhost 8000
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch the data for that resource')
            }
           return res.json()
        })    
        .then(data => {
            console.log(data);
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('Fetch Aborted');
            } else {
                setIsPending(false)
                setError(err.message)
            }
            setError(err.message)
            setIsPending(false)
        })
        return () => abortCont.abort()   //Abort whatever fetch it's associated with
    }, [url])
    return {data, isPending, error}
}

export default useFetch