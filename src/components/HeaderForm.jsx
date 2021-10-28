import React from "react";

const HeaderForm = ({ handleChange, handleSubmit, num }) => {
    return (
        <section className="section">
            <h2>TIRED OF BORING LOREM IPSUM?</h2>
            <form className="section-center">
                <label htmlFor="paraNum">Paragraphs:</label>
                <input
                    type="number"
                    name="paraNum"
                    id="paraNum"
                    min="0"
                    value={num}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="btn"
                    onClick={(e) => {
                        handleSubmit(e);
                    }}
                >
                    Generate
                </button>
            </form>
        </section>
    );
};

export default HeaderForm;
