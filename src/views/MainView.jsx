import { Fragment, useState } from "react";
import { SearchBar, SearchResults } from "../components";

import ButtonsJSON from "../assets/buttons.json"

export default () => {
    const [searchTerm, setSearchTerm] = useState("")

    return(
        <div className="flex flex-col items-center gap-5 p-3 pt-5 lg:p-10 max-w-6xl m-auto">
            <h1 className="text-3xl lg:text-5xl">GIF Button Search!</h1>
            <p className="text-xs">Built by <a href="http://kitcousins.onrender.com" target="_blank" className="underline">Kit</a>!</p>
            <SearchBar onChange={setSearchTerm} />
            <SearchResults
                searchTerm={searchTerm}
                buttons={ButtonsJSON}
            />
        </div>
    )
}