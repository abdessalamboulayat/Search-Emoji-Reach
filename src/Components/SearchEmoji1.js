import React from "react";
import emojiList from '../Data/emojiList.json';
import '../styles/searchEmoji1.css';

function searchEmoji1({search, setSearch}){
    function handleChange(e){
        setSearch(e.target.value);
}

const find = emojiList.filter((emoji)=>
emoji.keywords.includes(search.toLowerCase())||emoji.title.includes(search.toLowerCase())||emoji.symbol.includes(search));

    return(
        <div className="search">
            <form>
                 <input  value={search} placeholder="Search" onChange={handleChange} className="searchInput"/>
             </form>
             <div >
                {   search===''?
                        emojiList.map((emoji)=>(
                            emoji.keywords.includes("eyes")?
                                <div key={emoji.title}>
                                    <div className="element">{emoji.title} {emoji.symbol}</div>
                                    <input type="button" value="Copier l'Emoji" onClick={(e)=>{
                                        navigator.clipboard.writeText(emoji.symbol);
                                        setTimeout(e.target.value="copié", 1000);
                                    }}  className="btn"/>
                                </div>:null
                        )):
                    find.length > 0?
                    find.map((ele)=>(
                        <div key={ele.title}>
                            <div className="element">{ele.title} {ele.symbol}</div>
                            <input type="button" value="Copier l'Emoji" onClick={(e)=>{
                                navigator.clipboard.writeText(ele.symbol);
                                setTimeout(e.target.value="copié", 1000);
                            }}  className="btn"/>
                        </div>
                    )):
                    <h1>No Emoji related to this word</h1>
                }
             </div>
        </div>
    )
}
export default searchEmoji1;