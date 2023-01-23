import { useState, useEffect } from "react"

export default ({ onChange = (term) => {} }) => {

    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => onChange(searchTerm), [searchTerm])

    return(
        <input autoFocus placeholder="Enter search term" type="search" className="p-2 rounded border-2 border-green-500 placeholder:text-green-500 bg-transparent w-full text-center" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
    )
}