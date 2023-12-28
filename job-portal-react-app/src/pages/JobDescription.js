import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/JobDescription.css"


function JobDescription() {
    let {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        // fetch details of particular job from API
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/job/${id}`);
                const job = await response.json();
                setData(job);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData().then();
    }, []);

    return (
        <>
            <Header/>
            <div className="container mt-5" style={{marginBottom: "5%"}}>
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">{data?.title}</h2>
                        <h6 className="card-subtitle mb-2 text-muted">{data?.team?.name} - {data?.jobType}</h6>
                        <div className="jobDetailsText">
                            {data?.description}
                        </div>
                        <div className="jobDetailsText">
                            Responsibilities:
                            <ul>
                                <li>Develop and maintain web applications</li>
                                <li>Collaborate with cross-functional teams to define, design, and ship new features
                                </li>
                                <li>Optimize applications for maximum speed and scalability</li>
                                <li>Stay up-to-date with the latest industry trends and technologies</li>
                            </ul>
                        </div>
                        <div className="jobDetailsText">
                            Requirements:
                            <ul>
                                <li>Proven experience as a Web Developer</li>
                                <li>Strong proficiency in JavaScript, HTML, CSS</li>
                                <li>Experience with front-end frameworks (e.g., React, Angular)</li>
                                <li>Knowledge of back-end technologies (e.g., Node.js, Python, Ruby on Rails)</li>
                            </ul>
                        </div>
                        <a href="/job/apply" className="btn btn-primary">Apply Now</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default JobDescription;
