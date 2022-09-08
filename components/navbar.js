import Link from 'next/link'

import Name from './Name'
import ThemeButton from './ThemeButton'
import LinkedinButton from './LinkedinButton'
import GithubButton from './GithubButton'

export default function Navbar() {
    return (
		<div className="pf-component pf-navbar">
            <ThemeButton />

            {/* <ul>
                <li>
                    <Link href="/#top">
                        <a>Presentation</a>
                    </Link>
                </li>
                <li>
                    <Link href="/#introduction">
                        <a>Introduction</a>
                    </Link>
                </li>
            </ul> */}

            <section className='social-buttons'>
                <LinkedinButton />
                <GithubButton />
            </section>
		</div>
	)
}