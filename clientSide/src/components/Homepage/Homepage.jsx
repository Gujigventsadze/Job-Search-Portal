import "./Homepage.css"
import Search from "../Search/Search"
import Jobbox from "../Jobbox/Jobbox"
import Newsletter from "../Newsletter/Newsletter"
import { useContext, useState } from "react"
import { Jobscontext } from "../../GlobalContext/Jobscontext"

const Homepage = () => {

    const { jobs } = useContext(Jobscontext)

    // State to hold the selected filters
    const [filters, setFilters] = useState({
        title: "",
        type: "",  // Updated to use 'type' instead of 'category'
        location: ""
    })

    // Function to handle the change of filter inputs
    const handleFilterChange = (e) => {
        const { name, value } = e.target
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }))
    }

    // Function to apply the filters to the job list
    const filteredJobs = jobs.filter((job) => {
        return (
            (filters.title === "" || job.title.toLowerCase().includes(filters.title.toLowerCase())) &&
            (filters.type === "" || job.type === filters.type) &&  // Updated to filter by 'type'
            (filters.location === "" || job.location.toLowerCase() === filters.location.toLowerCase())
        )
    })

    return (
        <>
        <Search filters={filters} onFilterChange={handleFilterChange} />
        <section id="jobs-section">
            <div className="jobs-container">
                <div className="jobs-title">
                    Top Job Picks For You
                </div>
                <div className="jobs-grid">
                    {
                        filteredJobs.map((item, index) => {
                            return(
                            <Jobbox
                            key = {index}
                            index = {index}
                            title={item.title}
                            name={item.name}
                            salary={item.salary}
                            location={item.location}
                            type={item.time}
                            />
                            )
                        })
                    }
                </div>
            </div>
        </section>
        <section id="newsletter">
            <div className="jobs-title">Subscribe To Our Newsletter</div>
            <Newsletter />
        </section>
        </>
    )
}

export default Homepage
