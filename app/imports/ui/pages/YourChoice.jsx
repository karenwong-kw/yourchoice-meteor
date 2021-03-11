import React from 'react';
import TopMenu from '../components/TopMenu';
import MiddleMenu from '../components/MiddleMenu';
import Footer from '../components/Footer';

export default class IslandSnow extends React.Component {
  render() {
    return (
      <div>
        <TopMenu/>
        <MiddleMenu/>
        <Footer/>
      </div>
    );
  }
}
