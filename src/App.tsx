import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ClubDetailsPage from './pages/ClubDetailsPage';
import ClubListPage from './pages/ClubListPage';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ClubListPage />
        </Route>
        <Route exact path="/detailsview/:id">
          <ClubDetailsPage />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
