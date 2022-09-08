import React from 'react'
import { Link } from "react-router-dom";
import { CREATE_PAGE_ROUTE, VIEW_PAGE_ROUTE } from '../../utils/constants';
import { useLocation } from "react-router-dom"

export default function NavBarComponent() {
  const location = useLocation()
  const route_path = location.pathname;
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={VIEW_PAGE_ROUTE}>Crud-Test</Link>
        <div className=" navbar-collapse">
          <div className="navbar-nav">
            <Link className={`nav-link ${route_path === VIEW_PAGE_ROUTE && "active"}`} to={VIEW_PAGE_ROUTE}>View</Link>
            <Link className={`nav-link ${route_path === CREATE_PAGE_ROUTE && "active"}`} to={CREATE_PAGE_ROUTE}>Add</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
