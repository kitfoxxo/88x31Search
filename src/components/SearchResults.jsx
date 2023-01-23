import { useEffect, useState } from "react"

export default ({ searchTerm = "", buttons }) => {

    const [results, setResults] = useState(undefined)

    useEffect(() => {
        setResults(undefined)
        searchTerm !== "" ?
        setResults(buttons.filter((button) => button.name.startsWith(searchTerm))) :
        setResults(buttons)
    }, [searchTerm])

    return results ?
        <div
            className="flex justify-center gap-3 flex-wrap"
        >
            {
                results.length > 0 ?
                results.map(({ name, url }) => (
                    <a key={url} href={url} download>
                        <img alt={name} src={url} width="88px" height="31px" />
                    </a>
                )) :
                <p>{`No buttons found for the term ${searchTerm}`}</p>
            }
        </div> :
        <h2>Loading...</h2>
}