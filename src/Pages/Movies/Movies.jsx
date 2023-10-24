import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { languageContext } from '../../contexts/language';

export default function Movies(props) {
    const { language, setlanguage } = useContext(languageContext);
    const [value, setvalue] = useState(true);
    function changeLanguage() {
        setvalue(!value)
            value ? setlanguage("en") : setlanguage("ar");
    }
    // console.log(language);
    return (
        <>
            <div className='row'></div>
            <div style={{ width: "100%" }} className='bg-secondary p-1'>
                <div style={{ width: "100%" }} className='container-fluid bg-warning'>
                    <Link to="/movies" className=" mx-5">List</Link>
                    <Link to="/movies/update">Update</Link>
                </div>
                <h1 className='text-white mx-5 mt-4'>Movies <button className='bg-transparent border-0' onClick={() => changeLanguage()}>{language}</button></h1>
                <Outlet />
            </div>
        </>
    )
}
