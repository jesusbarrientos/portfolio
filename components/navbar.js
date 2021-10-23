import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from './../redux/reducers/themeSlice'

import ThemeIcon from './../public/images/theme-icon.svg'
import GitHubIcon from './../public/images/github-icon.svg'

export default function Navbar() {
    const theme = useSelector((state) => state.theme.currentTheme)
    const dispatch = useDispatch()

    function changeTheme() {
        if (theme === 'light')
            dispatch(setTheme('dark'))
        else
            dispatch(setTheme('light'))
    }

    return (
		<div className="pf-component pf-navbar">
            <ThemeIcon className="pf-icon theme-icon" onClick={changeTheme} />
			<GitHubIcon className="pf-icon github-icon" onClick={toGitHubProfile} />
		</div>
	)
}

function toGitHubProfile() {
	window.open('https://github.com/jesusbarrientos/portfolio')
}
