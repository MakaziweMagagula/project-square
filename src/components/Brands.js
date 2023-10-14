import {useEffect, useState } from 'react'

const Brands = () => {
    const [brands, setBrands] = useState(null)
    useEffect(() => {
        const fetchBrands = async () => {
            const response = await fetch('/api/brands/getbrands')
            const json = await response.json()

            if(response.ok){
                setBrands(json)
            }
        }
        fetchBrands()
    },[])
    return(
        <div className='brands'>
            <h1>Brands</h1>
            {brands && brands.map((brand) => (
                <p key={brand._id}>{brand.brandName}</p>
            ))}
        </div>
    )
}

export default Brands