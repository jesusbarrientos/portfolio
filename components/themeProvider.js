import { useSelector } from 'react-redux'

export default function ThemeProvider(props) {
    const theme = useSelector((state) => state.theme.currentTheme)

	return (
        <div id="theme-provider" theme={theme}>
            {props.children}
        </div>
    )
}
