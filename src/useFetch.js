import { useEffect, useState } from "react"

const useFetch = (url) => {    //Custom hooks must start with 'use'
    const [data, setData] = useState(null)

    const [isPending, setIsPending] = useState(true)

    const [error, setError] = useState(null)

    //Runs for every render
    useEffect(() => {
        fetch(url)    //Get request to localhost 8000
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
            setError(err.message)
            setIsPending(false)
        })
    }, [url])
    return {data, isPending, error}
}

export default useFetch