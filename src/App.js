import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import './App.css';

const Table = ({ children }) => {
  return (
    <table>
      {children}
    </table>
  )
}

const Row = ({ children }) => {
  return (
    <tr>
      <td>{children}</td>
    </tr>
  )
}

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <Table>
        <Row>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </Row>
        <Row>dsdsd</Row>
      </Table>
    </>
  )
}
const Users = ({title}) => <h1>{title}</h1>
const Login = ({location}) => {
  return <h1>Login from {location.state.from.pathname}</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <h1>Root</h1>} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute exact path="/users" component={Users} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;