import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Abort from '../components/404'
import RoutesArray from '../routes/Routes';
import { Route, Routes, useLocation} from 'react-router-dom';
import Home from '../components/Home';
const MasterPage = () => {
  let location = useLocation();
  let Component = RoutesArray.filter(route => route.path == location.pathname);
  Component=Component.length!=0 ? Component[0].component  : null; 
  return (
   <>
    <Header/>
    <div className="app-wrapper">
           <div className="app-content pt-3 p-md-3 p-lg-4">
              <div className="container-xl">
                {
                  Component!=null ? <Component /> : <Abort/>
                }
              </div>
            </div>
    </div>

    <Footer/>
   </>
  )
}

export default MasterPage