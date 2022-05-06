import React, { useState } from 'react';
import SearchEmoji1 from './SearchEmoji1';

function AfficheEmoji(){
    const [search, setSearch] = useState('');

    return(
        <div>
            <SearchEmoji1 search={search} setSearch={setSearch}/>
        </div>
    )
}
export default AfficheEmoji;