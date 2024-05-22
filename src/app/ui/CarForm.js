'use client';

import { useState } from "react";

export default function CarForm() {

    const [formData, setFormData] = useState({
        'make': '',
        'model': '',
        'year': '',
        'license plate': '',
        'vin': ''

    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((previousFormData) => ({...previousFormData, [name]: value}))
    };
        
    return (
        <form>
            <label>
                Make:{' '}
                <input type="text" name="make" value={formData.make} onChange={handleChange} />
            </label>
            <label>
                Model:{' '}
                <input type="text" name="model" value={formData.model} onChange={handleChange} />
            </label>
            <label>
                Year:{' '}
                <input type="text" name="year" value={formData.year} onChange={handleChange} />
            </label>
            <label>
                License Plate:{' '}
                <input type="text" name="license plate" value={formData["license plate"]} onChange={handleChange} />
            </label>
            <label>
                VIN:{' '}
                <input type="text" name="vin" value={formData.vin} onChange={handleChange} />
            </label>
        </form>
    );
}