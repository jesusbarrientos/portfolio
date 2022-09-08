import React, { Component } from 'react'

export default class Presentation extends Component {

    constructor(props) {
		super(props)
		this.secPresentation = React.createRef()
	}

    componentDidMount() {
		this.setPresentationHeight()
	}

    // functions
	setPresentationHeight() {
		const secPresentation = this.secPresentation.current
		const navbarElement = document.getElementsByClassName('pf-navbar')[0]
		const navbarHeight = navbarElement.clientHeight

		secPresentation.style.minHeight = window.innerHeight - navbarHeight + 'px'

        const mainElement = secPresentation.getElementsByClassName('pf-presentation__main')[0]
        mainElement.style.transform = 'translateY(' + -navbarHeight + 'px)'
	}

	render() {
		return (
            <section ref={this.secPresentation} id="presentation" className="pf-component pf-presentation">
                <main className="pf-presentation__main">
                    <h1 className="no-margin">Hi I'm Jesús.</h1>
                    <h1 className="no-margin underscore">
                        <i>Nice to meet you!</i>
                    </h1>
                    <div className="pb-xs fill-2"></div>
                </main>
            </section>
        )
    }
}
