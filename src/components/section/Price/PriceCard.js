import React from 'react';
import { FaCheck } from "react-icons/fa";
const PriceCard = () => {
    return (
        <>
                <div className="tab-pane fadeInUp animated show " >
                        <div className="row">
                            <div className="col-lg-6">
                                
                                <div className="tab-pane-text">
                                    <h3>What’s included in this package</h3>
                                    <ul className="list-unstyled list-check">
                                        <li><FaCheck className="bg-1"/> Market sizing and share
                                            analysis</li>
                                        <li><FaCheck className="bg-1"/> Product value proposition
                                            analysis</li>
                                        <li><FaCheck className="bg-1"/> Identify strategic
                                            partnership</li>
                                        <li><FaCheck className="bg-1"/> Implementation milestone
                                            review</li>
                                        <li><FaCheck className="bg-1"/> Innovation opportunities</li>
                                        <li><FaCheck className="bg-1"/> Distribution channel
                                            opportunities</li>
                                    </ul>
                                </div>
                                
                            </div>
                            <div className="col-lg-6">
                               
                                <div className="tab-pane-text mt-50 mt-lg-0">
                                    <h3>Business approach -</h3>
                                    <p>Our experts follow the business strategy to grow up your business and engage more
                                        customers to your door.</p>
                                    <ul className="list-unstyled list-check">
                                        <li><FaCheck className="bg-1"/> Getting to know your business
                                            vision and the key strategic drivers.</li>
                                        <li><FaCheck className="bg-1"/> Detailed research of the
                                            business environment, target market, and marketing as well as growth
                                            opportunities.</li>
                                    </ul>
                                    <a href="/" className="btn"><span>purchase</span></a>
                                </div>
                                
                            </div>
                        </div>
                    </div> 
        </>
    );
}

export default PriceCard;
