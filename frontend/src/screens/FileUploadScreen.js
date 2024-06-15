import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

const FileUploadForm = () => {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            alert('Please select a file.');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('csv_file', file);

            const response = await axios.post('http://127.0.0.1:8000/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${userInfo.token}`
                },
            });

            console.log('File uploaded successfully:', response.data);
            navigate('/showmyfile');
        } catch (error) {
            console.error('Error uploading file:', error);
            // Handle error scenarios appropriately

        }
    };

    return (
        <div>
            <h2>Upload CSV File</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" accept=".csv" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default FileUploadForm;
