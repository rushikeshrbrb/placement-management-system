import React from 'react';

export default function Privacy() {
    return (
        <div>
            <center>
                <img height={300} width={450} src="https://uploads-ssl.webflow.com/63732cac1e22b77dd8bec3c2/64b8571c46319e6c1d4c8c3a_Privacy-policy.png" alt="Privacy Policy" />
            </center>
            <div className="container mt-5">
                <h1 className="text-center mb-4">Privacy Policy</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                What is a Privacy Policy?
                            </div>
                            <div className="card-body">
                                <p>A Privacy Policy is a statement or a legal document that states how a company or website collects, handles and processes data of its customers and visitors. It explicitly describes whether that information is kept confidential, or is shared with or sold to third parties.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                Terms & Conditions
                            </div>
                            <div className="card-body">
                                <p>Terms & Conditions, also known as Terms of Service or Terms of Use, govern the use of a website by visitors. Simply put, a Terms & Conditions acts like a contract between the website owner and the website visitors.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-info text-white">
                                Disclaimer
                            </div>
                            <div className="card-body">
                                <p>No warranty is provided regarding the accuracy or adequacy of these generators for every situation. If you are not sure about any legal questions, or have any questions or doubts about a Privacy Policy, </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    );
}
