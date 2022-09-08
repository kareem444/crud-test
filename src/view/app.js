import React from 'react'
import { Routes, Route } from "react-router-dom";
import { CREATE_PAGE_ROUTE, EDIT_PAGE_ROUTE, VIEW_PAGE_ROUTE } from '../utils/constants';
import NavBarComponent from './components/nav_bar_component'
import CreatePage from './pages/create'
import ViewPage from './pages/view'
import EditPage from './pages/edit';

export default function App() {
    return (
        <>
            <NavBarComponent />
            <Routes>
                <Route path={VIEW_PAGE_ROUTE} element={<ViewPage />} />
                <Route path={CREATE_PAGE_ROUTE} element={<CreatePage />} />
                <Route path={EDIT_PAGE_ROUTE} element={<EditPage />} />
            </Routes>
        </>
    )
}
