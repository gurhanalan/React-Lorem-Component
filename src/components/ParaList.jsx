import React from "react";

const ParaList = ({ para }) => {
    return (
        <section className="section-center result">
            {para.map((item) => {
                return <p>{item}</p>;
            })}
        </section>
    );
};

export default ParaList;
