import GitHubIcon from './../public/images/github-icon.svg'

export default function GithubButton() {

    function toGitHubProfile() {
        window.open('https://github.com/jesusbarrientos/portfolio')
    }

    return (
        <button className='pf-component pf-button' onClick={toGitHubProfile}>
            <GitHubIcon className="pf-icon github-icon" /> <span>GitHub</span>
        </button>
    )
}
