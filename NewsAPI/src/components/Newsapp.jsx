import React, { useState, useEffect } from 'react'
import Card from './Card'
const Newsapp = () => {

    const [search, setSearch] = useState("india");
    const [news, setNews] = useState(null);

    const API_KEY = 'f26e2228e6104eb8ab22206cde73f859'

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
        const data = await response.json()
        //console.log(data.articles);
        setNews(data.articles)
    }

    useEffect(() => {
        getData()

    }, [])


    const handleSearch = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    const userInput = (e) => {
        setSearch(e.target.value);
    }
    return (
        <div>
            <nav>
                <div>
                    <h1> Latest News</h1>
                </div>
                <ul>
                    <a >All news</a>
                    <a >Trending</a>
                </ul>
                <div className='searchBar'>
                    <input onChange={handleSearch} type="text" placeholder="Search news" value={search} />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>
            <div>
                <p className='head'>if you want latest than stay connect </p>
            </div>
            <div className='categoryBtn'>
                <button onClick={userInput} value="sports">Sport</button>
                <button onClick={userInput} value="entertainment">Entertainment</button>
                <button onClick={userInput} value="politics">Politics</button>
                <button onClick={userInput} value="health">Health</button>
                <button onClick={userInput} value=" technology">Technology</button>
                <button onClick={userInput} value=" fitness">Fitness</button>
            </div>

            <div>
                {news ? <Card data={news} /> : null}
            </div>
        </div>
    )
}

export default Newsapp
