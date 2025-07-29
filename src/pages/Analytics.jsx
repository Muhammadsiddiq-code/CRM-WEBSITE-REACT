import React from 'react'
import "./Analytics.css";
import { CiSearch } from 'react-icons/ci';
import img1 from "../assets/images/flag-uk.svg fill.png"
import img2 from "../assets/images/Button.png";
import { FaArrowRight, FaRegBell } from 'react-icons/fa';
import { IoPeopleOutline } from 'react-icons/io5';
import Chart1 from '../ui/Chart1';

const Analytics = () => {
  return (
    <div>
      <header>
        <div className="card">
          <h1 className="card__title">
            <CiSearch />
          </h1>
        </div>
        <div className="card">
          <img src={img1} alt="" />
          <h1>
            <FaRegBell />
          </h1>
          <h1>
            <IoPeopleOutline />
          </h1>
          <img src={img2} alt="" />
        </div>
      </header>

      <div className="cards">
        <div className="card">
          <h1>Analytics</h1>
        </div>
        <div className="card">
          <button> + New Dashboard</button>
        </div>
      </div>











      <div className="boxs">
        <div className="box">
          <div className="char">
            <ul>
              <li>Impressions</li>
              <li>36,6K</li>
            </ul>

            <Chart1/>

          </div>

          <div className="chs">

          <p>See sources</p>  <p> <FaArrowRight /></p>
          </div>
        </div>




                <div className="box">
          <div className="char">
            <ul>
              <li>Impressions</li>
              <li>36,6K</li>
            </ul>

            <Chart1/>

          </div>

          <div className="chs">

          <p>See traffic </p> <p> <FaArrowRight /></p>
          </div>
        </div>



                <div className="box">
          <div className="char">
            <ul>
              <li>Impressions</li>
              <li>36,6K</li>
            </ul>

            <Chart1/>

          </div>

          <div className="chs">

          <button><p>See campaigns </p>  <p><FaArrowRight /></p></button>
          </div>
        </div>

      </div>







      <div className="traffic">
        <div className="card">
          <h1>Traffic Sources</h1>
          
        </div>
        <div className="card"></div>
      </div>




      
    </div>
  );
}

export default Analytics
