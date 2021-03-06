import { useState } from "react";

import Data from "./Data.json";

const FilterableList = () => {
    const { trainers } = Data;
    const [search, setSearch] = useState("");

    // const filtered = [];

    // for (let trainer of trainers) {
    //     if (trainer.toLowerCase().startsWith(search.toLowerCase())) filtered.push(trainer);
    // }

    const renderedTrainers = trainers
                                .filter(trainer => trainer.toLowerCase().startsWith(search.toLowerCase()))
                                 .map(trainer => <p>{trainer}</p>);

    return ( 
        <div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            {/* <p>{filtered.join(", ")}</p> */}
            { renderedTrainers }
        </div>
     );
}

export default FilterableList;