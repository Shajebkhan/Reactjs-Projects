import React, { useState } from 'react'
import Navbar from './Navbar'
import AllData from './Data.jsx'


const Category = () => {
    const [data, setData] = useState(AllData);
    const [inputVal, setInputVal] = useState('');
    const selectItem = (e) => {
        console.log(e.target.value);
        setInputVal(e.target.value);
    }

    if (inputVal == "A to Z") {
        data.sort((a, b) => {
            let nameA = a.name;
            let nameB = b.name;

            if (nameA < nameB) {
                return -1;
            }
        })
    }

    if (inputVal == "Z to A") {
        data.sort((a, b) => {
            let nameA = a.name;
            let nameB = b.name;

            if (nameA > nameB) {
                return -1;
            }
        })
    }

    if (inputVal == "High to Low") {
        data.sort((a, b) => {
            return b.price - a.price;
        })
    }

    if (inputVal == "Low to High") {
        data.sort((a, b) => {
            return a.price - b.price;
        })
    }
    return (
        <div className='container'>
            <Navbar />
            <div className='category'>
                <div>
                    <label>Search Category</label>
                    <select onChange={selectItem} id='select'>
                        <option value="A to Z">A to Z</option>
                        <option value="Z to A">Z to A</option>
                        <option value="High to Low">High to Low</option>
                        <option value="Low to High">Low to High</option>
                    </select>
                </div>
            </div>
            <div className='product'>
                {
                    data.map((cur, index) => {
                        return (
                            <div className='card' key={index}>
                                <img src={cur.img} />
                                <div className='text'>
                                    <p>Model : {cur.name}</p>
                                    <p>Price : {cur.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category
