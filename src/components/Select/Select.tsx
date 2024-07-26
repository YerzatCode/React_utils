import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef, useState } from "react"
import "./select.css"

function Select() {
  const optionsArray = ["Option 1", "Option 2", "Option 3", "Option 4"]
  const [open, setOpen] = useState(false)
  const leagueInput = useRef()

  function selectValue(e) {
    leagueInput.current.value = e.target.outerText
    setOpen(false)
  }

  function openOption() {
    setOpen(true)
  }

  return (
    <>
      <div className="select_option">
        <input
          type="text"
          onClick={openOption}
          onBlur={() => setOpen(false)}
          ref={leagueInput}
          placeholder="Select option"
          readOnly
          id="league"
        />
        <span className={open ? "icon active" : "icon"}>
          <FontAwesomeIcon icon={"fa-angle-down"} />
        </span>
        <div className={open ? "options active" : "options"}>
          {optionsArray.map((option, index) => {
            return (
              <li className="option" key={index} onClick={selectValue}>
                {option}
              </li>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Select
