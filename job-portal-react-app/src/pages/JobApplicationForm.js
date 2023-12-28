import React, {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const JobApplicationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        resume: '',
        coverLetter: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <Header/>
            <div className="container mt-5" style={{marginBottom: "2%", textAlign: "left"}}>
                <p className="fw-bold">SUBMIT YOUR APPLICATION</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="resume">Resume (URL)</label>
                        <input
                            type="url"
                            className="form-control"
                            id="resume"
                            name="resume"
                            value={formData.resume}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="coverLetter">Cover Letter</label>
                        <textarea
                            className="form-control"
                            id="coverLetter"
                            name="coverLetter"
                            rows="4"
                            value={formData.coverLetter}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit Application
                    </button>
                </form>
            </div>
            <Footer/>
        </>
    );
};

export default JobApplicationForm
