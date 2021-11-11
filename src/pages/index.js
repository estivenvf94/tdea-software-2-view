// @vendors
import { Suspense } from 'react'
import {
    Route,
    Switch,
    BrowserRouter
} from 'react-router-dom'

// @pages
import Home from './home'
import CreatePost from './create-post'
import CreateAccount from './create-account'

// @layout
import Page from 'layouts/page'
import Navigation from 'layouts/navigation/navigation'

// @styles
import './styles.scss'

export default function Pages() {
    return (
        <Suspense fallback={<div>Cargando</div>}>
            <BrowserRouter>
                <Page>
                    <Navigation />
                    <div className='container-body'>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/create-post' component={CreatePost} />
                            <Route exact path='/create-account' component={CreateAccount} />
                        </Switch>
                    </div>
                </Page>
            </BrowserRouter>
        </Suspense>
    )
}