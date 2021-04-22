import React from 'react';

const preloader = () => {
   
    return (
        <>
             <div className='preloader w-100 h-100 position-fixed'>
                    <div className="loader">
                        <img className="icon" src="assets/img/logo/preloader.png" alt=""/>
                    </div>
            </div>
        </>
    );
}

export default preloader;
