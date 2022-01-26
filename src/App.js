import { useEffect, useState, useRef } from 'react'
import SettingsModal from './SettingsModal'
import {
  MODE_POMODORO,
  MODE_SHORT,
  MODE_LONG,
  COLOR_ONE,
  FONT_KUMBH,
} from './constants'
import { secondsToTime } from './utils'

const App = () => {
  const initialSettings = {
    pomodoro: 3600,
    short: 900,
    long: 1800,
    selectedColor: COLOR_ONE,
    selectedFont: FONT_KUMBH
  }
  const [settings, updateSettings] = useState(initialSettings)
  const [mode, setMode] = useState(MODE_POMODORO)
  const [countDown, setCountDown] = useState({ time: {}, seconds: settings.pomodoro })
  const [showSettingsModal, toggleSettingsModal] = useState(false)
  const [isPaused, togglePaused] = useState(true)

  const timerRef = useRef()

  useEffect(() => {
    const timeLeft = secondsToTime(countDown.seconds)
    setCountDown({
      ...countDown,
      time: timeLeft
    })
    // eslint-disable-next-line
  }, [])

  const toggleCountdown = () => {
    if (isPaused) {
      timerRef.current = setInterval(startCountdown, 1000)
      togglePaused(false)
    } else {
      clearInterval(timerRef.current)
      togglePaused(true)
    }
  }

  const startCountdown = () => {
    setCountDown((prevCountDown) => {
      let seconds = prevCountDown.seconds - 1
      if (seconds === 0) {
        clearInterval(timerRef.current)
      }

      return {
        time: secondsToTime(seconds),
        seconds: seconds
      }
    })
  }

  const renderTimerClock = () => {
    const pct = (countDown.seconds / settings[mode]) * 100
    return (
      <div className="row my-5">
        <div className="col-md-6 mx-auto text-center">
          <div onClick={toggleCountdown} className="timer-circle mx-auto d-flex flex-column align-items-center justify-content-center" style={{ cursor: 'pointer' }}>
            <svg width="350" height="350">
              <g transform={`rotate(-90 ${"100 100"})`}>
                <CircleProgress color="rgba(22, 25, 50, 1)" />
                <CircleProgress color={settings.selectedColor} percentage={pct} />
              </g>
              <text
                x="50%"
                y="50%"
                dominantBaseline="central"
                textAnchor="middle"
                fontSize={"100px"}
                className="time-text">
                {formatTime(countDown.time?.m, countDown.time.s)}
              </text>
              <text
                x="50%"
                y="70%"
                dominantBaseline="central"
                textAnchor="middle"
                fontSize={"16px"}
                className="time-text-detail">
                {isPaused ? 'START' : 'PAUSE'}
              </text>
            </svg>
          </div>
        </div>
      </div>
    )
  }

  const formatTime = (minutes, seconds) => {
    if (!(minutes || seconds)) return '00:00'
    return `${minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}:${seconds.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}`
  }

  const handleModeChange = (mode) => {
    setMode(mode)
    setCountDown({ time: secondsToTime(settings[mode]), seconds: settings[mode] })
  }

  return (
    <div className="container-fluid" style={{ fontFamily: settings.selectedFont }}>
      <SettingsModal
        show={showSettingsModal}
        settings={settings}
        onUpdate={updateSettings}
        onHide={() => toggleSettingsModal(false)} />

      <div className="row text-center mt-5">
        <h1><img src={process.env.PUBLIC_URL + "/assets/logo.svg"} /></h1>
      </div>

      <div className="row mt-5">
        <div className="col-md-6 mx-auto text-center">
          <div className="btn-group btn-container p-2 rounded-pill">
            <button
              onClick={() => handleModeChange(MODE_POMODORO)}
              type="button"
              className="btn mode-toggle rounded-pill"
              style={{ background: mode === MODE_POMODORO ? settings.selectedColor : '' }}>
              pomodoro
            </button>
            <button
              onClick={() => handleModeChange(MODE_SHORT)}
              type="button"
              className="btn mode-toggle rounded-pill"
              style={{ background: mode === MODE_SHORT ? settings.selectedColor : '' }}>
              short break
            </button>
            <button
              onClick={() => handleModeChange(MODE_LONG)}
              type="button"
              className="btn mode-toggle rounded-pill"
              style={{ background: mode === MODE_LONG ? settings.selectedColor : '' }}>
              long break
            </button>
          </div>
        </div>
      </div>

      {renderTimerClock()}

      <div className="row mb-5">
        <div className="col-md-6 mx-auto text-center">
          <button onClick={() => toggleSettingsModal(true)} type="button" className="settings-btn btn bg-none">
            <i className="bi bi-gear-fill text-muted"></i>
          </button>
        </div>
      </div>

    </div>
  )
}

const CircleProgress = ({ color, percentage }) => {
  const r = 150
  const circ = 2 * Math.PI * r
  const strokePct = ((100 - percentage) * circ) / 100
  return (
    <circle
      r={r}
      cx={25}
      cy={175}
      fill="transparent"
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={"10px"}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  )
}

export default App