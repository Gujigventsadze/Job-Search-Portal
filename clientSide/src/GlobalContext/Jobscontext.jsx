import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Jobscontext = createContext()

export const JobsProvider = ({ children }) => {
    const [jobs, setJobs] = useState([])

    const addJob = (job) => {
        setJobs([...jobs, job])
    }
    return (
        <Jobscontext.Provider value={{jobs, addJob}}>
            {children}
        </Jobscontext.Provider>
    )
}


JobsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};