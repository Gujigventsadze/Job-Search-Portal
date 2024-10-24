import "./Vacancy.css";
import Jobbox from "../Jobbox/Jobbox";
import { useContext } from "react";
import { Jobscontext } from "../../GlobalContext/Jobscontext";
import { useParams } from "react-router-dom";

const Vacancy = () => {
    const { jobs } = useContext(Jobscontext);
    const { index } = useParams();
    const jobIndex = parseInt(index);

    const job = jobs[jobIndex] || {};

    const similarJobs = jobs.slice(0, 6);

    return (
        <section id="vacancy">
            <div className="vacancy-container">
                <div className="vacancy-title">{job.title}</div>
                <div className="vacancy-company-name">{job.name}</div>
                <div className="salary-and-type">
                    <div className="vacancy-salary">${job.salary}</div>
                    <div className="vacancy-type">{job.type}</div>
                </div>
                <div className="vacancy-body">{job.body}</div>
                <button className="vacancy-apply">Apply</button>
            </div>
            <div className="similar-vacancies">
                <div className="similar-vacs">Similar Vacancies</div>
                <div className="sim-vac-grid">
                    {similarJobs.length > 0 ? (
                        similarJobs.map((item, index) => (
                            <Jobbox
                                key={index}
                                index={index}
                                title={item.title}
                                name={item.name}
                                salary={item.salary}
                                location={item.location}
                                time={item.time}
                            />
                        ))
                    ) : (
                        <p style={{ fontSize: "25px" }}>No similar vacancies available.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Vacancy;