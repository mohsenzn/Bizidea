import React from 'react';

const index = () => {
    return (
        <>
            <section class="min-vh-100 pt-5 pb-5 pb-lg-0 pt-lg-0 vw-100 d-flex align-items-center bg-404 ovx-hidden" data-bg-img="assets/img/404-bg.png">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="not-found-content text-center">
                                <img src="assets/img/404.png" data-rjs="2" alt="" />
                                <p>You've been tricked into click on link that can't be found.
                        Please check the url or go to <a href="/">main page.</a></p>

                                <div class="not-found-form">
                                    <form action="#" class="d-flex flex-wrap align-items-center justify-content-center">
                                        <input type="text" class="theme-input-style" placeholder="What are you looking for..." />
                                        <button type="submit" class="ml-sm-3 btn"><span>SEARCH</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default index;
