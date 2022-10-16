import React from 'react';

const Copyright = () => {
    return (
        <div className="copyright">
            <small>Designed & Build by <a href="mailto:saikathossen3@gmail.com" style={{color:'rgb(26 210 14)'}}>S. M. Saikat Hossain</a></small> <br />
            <small>{(new Date()).getFullYear()} &copy; copyright | Saikat</small> <br />
         </div>
    );
};

export default Copyright;