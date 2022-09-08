import DefaultLayout from '../layouts/default'
import Introduction from '../sections/Introduction'
import Presentation from '../sections/Presentation'

export default function Home() {
    return (
        <DefaultLayout>
            <container className="pf-page pf-page-home">
                <Presentation />
                <Introduction />
            </container>
        </DefaultLayout>
    )
}
