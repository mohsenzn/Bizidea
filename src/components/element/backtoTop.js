import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FaArrowUp } from "react-icons/fa";
const backtoTop = () => {

  

    return (
        <>
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FaArrowUp />
                </ScrollToTop>
            </div>
        </>
    );
}

export default backtoTop;
