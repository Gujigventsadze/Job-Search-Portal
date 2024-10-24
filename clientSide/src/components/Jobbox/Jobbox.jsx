import "./Jobbox.css"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Jobbox = (props) => {
    return (
        <Link to={`/jobs/${props.index}`} className="jobbox-container">
            <div className="jobbox-title">{props.title}</div>
            <div className="jobbox-company-name">{props.name}&#9989;</div>
            <div className="jobbox-salary">${props.salary}</div>
            <div className="jobbox-bottom">
                <div className="jobbox-location">{props.location}</div>
                <div className="jobbox-employment-type"><i className="fa fa-clock-o"></i> {props.time}</div>
            </div>
        </Link>
    )
}

export default Jobbox


Jobbox.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    salary: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    location: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    index: PropTypes.number
}
