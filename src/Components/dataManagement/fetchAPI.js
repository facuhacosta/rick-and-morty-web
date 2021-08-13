import { useEffect , useState } from 'react'


export default function GetData(filter , page) {

    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults ] = useState([]);

    useEffect(() => {
        setResults([]);
    }, [])

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://rickandmortyapi.com/api/${filter}/?` + new URLSearchParams({ page: page }).toString())
            .then(res => res.json())
            .then(data => {
                setResults(prevResults => [...prevResults, ...data.results])                
                if (data.info.next == null) setHasMore(false);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setIsLoading(false);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);
    
    return { hasMore , results , isLoading};
}
