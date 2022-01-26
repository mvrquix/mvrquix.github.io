import { useState } from 'react'
import {
    COLOR_ONE,
    COLOR_TWO,
    COLOR_THREE,
    FONT_KUMBH,
    FONT_ROBOTO,
    FONT_SPACE
} from './constants'
import { Modal } from 'react-bootstrap'

const SettingsModal = ({ show, settings, onUpdate, onHide }) => {
    const [params, setParams] = useState({})

    const handleApplyClick = () => {
        onUpdate({
            pomodoro: params.pomodoro ?? settings.pomodoro,
            short: params.short ?? settings.short,
            long: params.long ?? settings.long,
            selectedColor: params.selectedColor ?? settings.selectedColor,
            selectedFont: params.selectedFont ?? settings.selectedFont
        })
        onHide()
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setParams({
            ...params,
            [name]: value
        })
    }

    const handleValueChange = (name, value) => {
        setParams({
            ...params,
            [name]: value
        })
    }

    const isValueSelected = (name, value) => {
        return (params[name] && params[name] === value) ?? settings[name] === value
    }

    return (
        <Modal show={show} onHide={onHide} style={{ color: '#161932' }}>
            <Modal.Header closeButton>
                <h3>Settings</h3>
            </Modal.Header>
            <Modal.Body>
                <h6>TIME (MINUTES)</h6>
                <div className="row">
                    <div className="col-md-4">
                        <label className="timer-setting-label">pomodoro</label>
                        <select
                            onChange={handleInputChange}
                            name="pomodoro"
                            className="form-select"
                            value={params.pomodoro ?? settings.pomodoro}>
                            <option value="900">15</option>
                            <option value="1800">30</option>
                            <option value="2700">45</option>
                            <option value="3600">60</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="timer-setting-label">short break</label>
                        <select
                            onChange={handleInputChange}
                            name="short"
                            className="form-select"
                            value={params.short ?? settings.short}>
                            <option value="900">15</option>
                            <option value="1800">30</option>
                            <option value="2700">45</option>
                            <option value="3600">60</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="timer-setting-label">long break</label>
                        <select
                            onChange={handleInputChange}
                            name="long"
                            className="form-select"
                            value={params.long ?? settings.long}>
                            <option value="900">15</option>
                            <option value="1800">30</option>
                            <option value="2700">45</option>
                            <option value="3600">60</option>
                        </select>
                    </div>
                </div>
                <hr />
                <div className="row  align-items-center">
                    <div className="col-md-6 d-flex justify-content-start">
                        <h6>FONT</h6>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <div>
                            <button
                                onClick={() => handleValueChange('selectedFont', FONT_KUMBH)}
                                type="button"
                                className={`btn timer-setting-btn ${isValueSelected('selectedFont', FONT_KUMBH) ? 'btn-dark' : 'btn-light'}`}
                                style={{ fontFamily: FONT_KUMBH }}>
                                Aa
                            </button>
                            <button
                                onClick={() => handleValueChange('selectedFont', FONT_ROBOTO)}
                                type="button"
                                className={`btn timer-setting-btn mx-2 ${isValueSelected('selectedFont', FONT_ROBOTO) ? 'btn-dark' : 'btn-light'}`}
                                style={{ fontFamily: FONT_ROBOTO }}>
                                Aa
                            </button>
                            <button
                                onClick={() => handleValueChange('selectedFont', FONT_SPACE)}
                                type="button"
                                className={`btn timer-setting-btn ${isValueSelected('selectedFont', FONT_SPACE) ? 'btn-dark' : 'btn-light'}`}
                                style={{ fontFamily: FONT_SPACE }}>
                                Aa
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-start">
                        <h6>COLOR</h6>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <div>
                            <button
                                onClick={() => handleValueChange('selectedColor', COLOR_ONE)}
                                type="button"
                                className="btn timer-setting-btn"
                                style={{ background: COLOR_ONE }}>
                                {isValueSelected('selectedColor', COLOR_ONE) && (<i className="bi bi-check-lg"></i>)}
                            </button>
                            <button
                                onClick={() => handleValueChange('selectedColor', COLOR_TWO)}
                                type="button"
                                className="btn timer-setting-btn mx-2"
                                style={{ background: COLOR_TWO }}>
                                {isValueSelected('selectedColor', COLOR_TWO) && (<i className="bi bi-check-lg"></i>)}
                            </button>
                            <button
                                onClick={() => handleValueChange('selectedColor', COLOR_THREE)}
                                type="button"
                                className="btn timer-setting-btn"
                                style={{ background: COLOR_THREE }}>
                                {isValueSelected('selectedColor', COLOR_THREE) && (<i className="bi bi-check-lg"></i>)}
                            </button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="border-0">
                <button
                    onClick={handleApplyClick}
                    type="button"
                    className="btn rounded-pill text-white mx-auto px-5"
                    style={{ background: '#F87070', marginBottom: '-30px' }}>
                    Apply
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default SettingsModal