import React, { useState } from "react";

function About() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id="about">
            <h1>ABOUT US</h1>
            <div className="accordion">
                {["About Company", "Our Mission", "Our Vision", "Our Goal"].map(
                    (title, index) => (
                        <div key={index} className="accordion-item">
                            <div
                                className="accordion-header"
                                onClick={() => toggleAccordion(index)}
                            >
                                <p>{title}</p>
                                <p className="pls">
                                    {activeIndex === index ? "-" : "+"}
                                </p>
                            </div>
                            {activeIndex === index && (
                                <div className="accordion-content">
                                    <img src="https://ld-wp73.template-help.com/wordpress/prod_10684/v2/wp-content/uploads/2020/11/about-2-1.jpg" />
                                    <p>
                                        {`We work to ensure peoples comfort at their home, and to provide the best and the fastest help at fair prices. We stand for quality, safety and credibility, so you could be sure about our work.`}
                                    </p>
                                </div>
                            )}
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default About;
