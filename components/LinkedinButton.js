import LinkedInIcon from './../public/images/linkedin-icon.svg'

export default function LinkedinButton() {

    function toLinkedInProfile() {
        window.open('https://www.linkedin.com/in/jesusbarrientos')
    }

    return (
        <button className='pf-component pf-button pf-linkedin-button' onClick={toLinkedInProfile}>
            <LinkedInIcon className="pf-icon linkedin-icon" /> <span>LinkedIn</span>
        </button>
    )
}
