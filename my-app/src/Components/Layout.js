import { Link } from 'react-router-dom';
import './Layout.css';
const Layout = () => {
  return (
  
<div id='na'>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link className='navbar-brand' to="/" id='lib'>LIBRARY</Link>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="conduct">Conduct</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="buy">Buy</Link>
        </li>
        <li className="nav-item dropdown">
          <Link to="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" >Dropdown</Link>

          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>


  )
};

export default Layout;