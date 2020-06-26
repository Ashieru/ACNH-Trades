import React from "react";
import HomePage from './HomePage.js';
import ItemCollectionPage from './ItemCollection.js'
import {withRouter} from 'react-router';
import { Route, Switch} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function Container({location}){
    return(
        <div>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames="fade"
                >
                    <Switch location={location}>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/item-collection" component={ItemCollectionPage} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default withRouter(Container);