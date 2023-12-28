import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "../css/JobList.css"

const JobList = () => {
    const [jobData, setJobData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/job');
                const jobs = await response.json();
                setJobData(jobs);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData().then();
    }, []);


    return (
        <section className="white-section" id="jobs">
            <div className="container mt-5">
                <h1 className="big-heading">Job Listings</h1>
                <div className="row">
                    {jobData?.map((job) => (
                        <div key={job?.id} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <Link to={`/job/${job?.id}`}><h5 className="card-title">{job?.title}</h5></Link>
                                    <h6 className="card-subtitle mb-2 text-muted">{job?.jobType}, {job?.location.name}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">{job?.team.name}</h6>
                                    <a href="/job/apply" className="card-link">Apply Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobList;
