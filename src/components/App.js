import React from 'react';
import styled from 'styled-components';
import About from './About';
import Home from './Home'
import ItemDetails from './ItemDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


const Myli = styled.li`
  padding-left: 20px;
`

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home/>
  },
  {
    path: "/About",
    main: () => <About/>
  },
  {
    path: "/items/:itemId",
    main: () => <ItemDetails/>
  }
];

function Header() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <h1>Fruit Emporium</h1>
          <ul style={{ listStyleType: "none", padding: 0, display:'flex', flexDirection:'row', marginRight:'50px'}}>
            <Myli>
              <NavLink exact to="/" 
              activeStyle={{fontWeight: "bold",color: "red", textDecoration:'underline'}}
              style={{textDecoration:'none'}}>Home</NavLink>
            </Myli>
            <Myli>
              <NavLink to="/About" 
              activeStyle={{fontWeight: "bold",color: "red", textDecoration:'underline'}}
              style={{textDecoration:'none'}}>About</NavLink>
            </Myli>
            
          </ul>

          <Switch>
            {routes.map((route, index) => (
              
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}


const App = (props) => {
  return (
    <Header/>
    
  );
};

export default App;