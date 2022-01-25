import { Route, Switch } from "react-router-dom";
import { patientNestedRoutes } from "../../routes";


export function PatientMainContent(){
    return (
        <Switch>
        {patientNestedRoutes.map((route) => (
          <Route
            exact
            path={route.path}
            component={route.component}
            key={route.path}
          />
        ))}
      </Switch>
    )
}