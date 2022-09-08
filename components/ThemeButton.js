import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../redux/reducers/themeSlice'
import ThemeIcon from './../public/images/theme-icon.svg'

export default function ThemeButton() {
    const theme = useSelector((state) => state.theme.currentTheme)
    const dispatch = useDispatch()

    function changeTheme() {
        if (theme === 'light')
            dispatch(setTheme('dark'))
        else
            dispatch(setTheme('light'))
    }

    return (
        <button className='pf-component pf-button pf-theme-button' onClick={changeTheme}>
            <ThemeIcon className="pf-icon theme-icon" />
            <span>Mode {theme === 'light' ? 'Dark' : 'Light'}</span>
        </button>
    )
}
