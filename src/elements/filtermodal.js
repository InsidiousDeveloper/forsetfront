import React, {useState, useRef} from 'react'
import '../styles/modalbox.scss'

const FilterModal = (minmax) => {

    const [maxVal, setMaxVal] = useState(minmax.filters.max)

    console.log(minmax)
    const handleChange = (vol) => {
        const value = Number(vol.target.value)
        setMaxVal(value)
    }

    if (!minmax) {
        return (
            <div className="modal">
                <div className="modal-content">

                </div>
            </div>
        )
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <h1>Adjust filter according to your needs</h1>
                <h1>{minmax.filters.min}</h1>
                <h1>{minmax.filters.max}</h1>
                <p>{maxVal}</p>
                <input type="range" min={minmax.filters.min} max={minmax.filters.max} value={maxVal} step="10000" onChange={event => handleChange(event)}/>
            </div>
        </div>
    )
}

export default React.memo(FilterModal)