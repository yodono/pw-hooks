import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Hooks from '../../views/contents/Hooks'
import UseState from '../../views/contents/UseState'
import NotFound from '../../views/contents//NotFound'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Hooks />
            </Route>
            <Route path="/UseState">
                <UseState />
            </Route>
            <Route path="">
                <NotFound />
            </Route>
        </Switch>
    </main>
)
export default Content
