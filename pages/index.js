import React, { Component } from 'react'
import Introduction from '../components/introduction'
import Presentation from '../components/presentation'
import DefaultLayout from '../layouts/default'
export default class Home extends Component {
	constructor(props) {
		super(props)
		this.secPresentation = React.createRef()
		this.secIntroduction = React.createRef()
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
	}

	render() {
		return (
			<DefaultLayout>
				<div className="pf-page pf-page-home">
					<section ref={this.secPresentation} className="section-presentation">
						<Presentation />
					</section>

					<section ref={this.secIntroduction} className="section-introduction">
						<Introduction />
					</section>
				</div>
			</DefaultLayout>
		)
	}
}
