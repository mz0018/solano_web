import { useState } from 'react';
import axios from 'axios';

export const useInsertHook = () => {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)
        try {

            const res = await axios.post('http://localhost:8000/insert.php', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            setFormData({
                first_name: "",
                last_name: ""
            })

            console.log("Response data:", res.data)
        } catch (err) {
            console.error('Error: ', err)
        } finally {
            setLoading(false);
        }
    }

    return {
        handleChange,
        handleSubmit,
        formData,
        loading
    }
}
