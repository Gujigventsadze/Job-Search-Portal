import "./Search.css"
import PropTypes from "prop-types"

const Search = ({ filters, onFilterChange }) => {
    return (
        <section id="search-section"> 
            <form className="search-container">
                <div className="search-inputs">
                <input 
                    name="title" 
                    placeholder="Job Title" 
                    className="search-title" 
                    value={filters.title} 
                    onChange={onFilterChange} 
                />
                <select 
                    name="type"  // Corrected name to "type"
                    className="search-category" 
                    value={filters.type} 
                    onChange={onFilterChange}
                >
                    <option value="">Field</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="finance">Finance</option>
                    <option value="marketing">Marketing</option>
                </select>
                <select 
                    name="location" 
                    className="search-city" 
                    value={filters.location} 
                    onChange={onFilterChange}
                >
                    <option value="">Location</option>
                    <option value="remote">Remote</option>
                    <option value="tbilisi">Tbilisi</option>
                    <option value="batumi">Batumi</option>
                    <option value="kutaisi">Kutaisi</option>
                    <option value="mtskheta">Mtskheta</option>
                    <option value="rustavi">Rustavi</option>
                </select>
                </div>
            </form>
        </section>
    )
}

export default Search
