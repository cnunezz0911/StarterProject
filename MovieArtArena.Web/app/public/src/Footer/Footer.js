import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer className="page-footer font-small indigo pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-5">
                            <div className="mb-5 flex-center thirdparty">
                                <a className="fb-ic">
                                    <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x" alt="poster"> </i>
                                </a>
                                <a className="tw-ic">
                                    <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x" alt="poster"> </i>
                                </a>
                                <a className="gplus-ic">
                                    <i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x" alt="poster"> </i>
                                </a>
                                <a className="li-ic">
                                    <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x" alt="poster"> </i>
                                </a>
                                <a className="ins-ic">
                                    <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x" alt="poster"> </i>
                                </a>
                                <a className="pin-ic">
                                    <i className="fa fa-pinterest fa-lg white-text fa-2x" alt="poster"> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright py-3 text-center">
                    © 2018 Copyright:
                </div>
                <div>
                            <a href=""> Terms </a>
        <a href=""> AboutUs</a>
        <a href=""> Help</a>
                    </div>
            </footer>
        </div>
    );
}

export default Footer;