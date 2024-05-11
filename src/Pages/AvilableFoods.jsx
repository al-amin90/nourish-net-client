import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AvilableFoods = () => {
    const [foods, setFoods] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`https://nourish-net-server-eight.vercel.app/foods`)
            setFoods(data);
        };


        getData()
    }, [])

    return (
        <div>
            {
                foods?.map(f => <p key={f._id}>{f.food_name}</p>)
            }
        </div>
    );
};

export default AvilableFoods;