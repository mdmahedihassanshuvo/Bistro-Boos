import React, { useEffect, useState } from 'react';

const useMenu = () => {

    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    // console.log(menu)

    useEffect(() => {
        fetch('https://bistro-boss-server-jade.vercel.app/menu')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setLoading(false)
            })
    }, [])

    return [menu, loading];
};

export default useMenu;