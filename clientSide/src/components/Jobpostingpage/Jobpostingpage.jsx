import { useContext, useState } from "react"
import "./Jobpostingpage.css"
import { Jobscontext } from "../../GlobalContext/Jobscontext"

const Jobpostingpage = () => {

    const [title, setTitle] = useState("")
    const [name, setName] = useState("")
    const [salary, setSalary] = useState("")
    const [body, setBody] = useState("")
    const [location, setLocation] = useState("")
    const [type, setType] = useState("")
    const [time, setTime] = useState("")
    const [showStatus, setShowStatus] = useState(false)


    const handleStatus = () => {
        setShowStatus(true)
        setTimeout(() => {
            setShowStatus(false)
        }, 2000)
    }

    const { addJob } = useContext(Jobscontext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newJob = {
            "name": name,
            "title": title,
            "salary": salary,
            "time": time,
            "type": type,
            "location": location,
            "body": body
        }
        addJob(newJob)
        setTitle("")
        setBody("")
        setName("")
        setSalary("")
        handleStatus()
    }



    return (
        <section id="jobposting-section">
            <form className="jobinfo-container" onSubmit={handleSubmit}>
                <div className="jobinfo-title">Job Info</div>
                <input value={title} maxLength={30} name="title" placeholder="Title" required onChange={(e) => setTitle(e.target.value)} />
                <input value={name} maxLength={30} name="company-name" placeholder="Company" required onChange={(e) => setName(e.target.value)} />
                <input value={salary} name="salary" type="number" placeholder="Salary" required onChange={(e) => setSalary(e.target.value)} />
                <textarea value={body} className="jobinfo-description" name="body" placeholder="Description" required onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <div className="salary-type">
                    <select value={location} name="location" className="location" required onChange={(e) => setLocation(e.target.value)}>
                        <option value="" disabled selected>Location</option>
                        <option value="Remote">Remote</option>
                        <option value="tbilisi">Tbilisi</option>
                        <option value="batumi">Batumi</option>
                        <option value="kutaisi">Kutaisi</option>
                        <option value="mtskheta">Mtskheta</option>
                        <option value="rustavi">Rustavi</option>
                    </select>
                    <select value={time} name="employment-time" required onChange={(e) => setTime(e.target.value)}>
                        <option value="" disabled selected>Type</option>
                        <option value="full-time">Full-Time</option>
                        <option value="part-time">Part-Time</option>
                        <option value="internship">Internship</option>
                    </select>
                    <select value={type} name="category-type" required onChange={(e) => setType(e.target.value)}>
                        <option value="" disabled selected>Field</option>
                        <option value="technology">Technology</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="education">Education</option>
                        <option value="finance">Finance</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div>
                <button className="jobpost-btn" type="submit">Post</button>
                {(showStatus && <div className="added-successfully">
                    Job added succsessfully
                </div>)}
            </form>
        </section>
    )
}

export default Jobpostingpage