import { useState } from 'react'
import { SettingsCTX } from './Context'

function SettingsProvider (props) {
    const [timeFormat, setTimeFormat] = useState(localStorage.getItem('timeFormat') == null ? '24' : JSON.parse(localStorage.getItem('timeFormat')))
    const [language, setLanguage] = useState(localStorage.getItem('language') == null ? 'EN' : JSON.parse(localStorage.getItem('language')))
    const [unit, setUnit] = useState(localStorage.getItem('unit') == null ? 'Metric' : JSON.parse(localStorage.getItem('unit')))

    const obj = {
        timeFormat: timeFormat,
        language: language,
        unit: unit,
        timeFormatSetter: (item) => {
            setTimeFormat(item)
            localStorage.setItem('timeFormat', JSON.stringify(item))
        },
        languageSetter: (item) => {
            setLanguage(item)
            localStorage.setItem('language', JSON.stringify(item))
        },
        unitSetter: (item) => {
            setUnit(item)
            localStorage.setItem('unit', JSON.stringify(item))
        }
    }

    return (
        <SettingsCTX.Provider value={obj}>
            {props.children}
        </SettingsCTX.Provider>
    )
}

export default SettingsProvider