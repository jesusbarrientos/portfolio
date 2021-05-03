import GitHubIcon from './../public/images/github-icon.svg'

export default function Navbar() {
	return (
		<div className="pf-component pf-navbar">
			<GitHubIcon className="github-icon" onClick={toGitHubProfile} />
		</div>
	)
}

function toGitHubProfile() {
	window.open('https://github.com/jesusbarrientos')
}
