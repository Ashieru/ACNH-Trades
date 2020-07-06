import React from "react";
import HomePage from './HomePage.js';
import ItemCollection from './ItemCollection.js'
import RecipeCollection from './RecipeCollection.js'
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
                        <Route exact path="/item-collection" component={ItemCollection} />
                        <Route exact path="/recipe-collection" component={RecipeCollection} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default withRouter(Container);