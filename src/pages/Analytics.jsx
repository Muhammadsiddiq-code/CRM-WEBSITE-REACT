import React from 'react'
import "./Analytics.css";
import { CiSearch } from 'react-icons/ci';
import img1 from "../assets/images/flag-uk.svg fill.png"
import img2 from "../assets/images/Button.png";
import { FaArrowRight, FaRegBell } from 'react-icons/fa';
import { IoPeopleOutline } from 'react-icons/io5';
import Chart1 from '../ui/Chart1';
import TrafficUI from '../ui/TrafficUI';
import { CgDanger } from 'react-icons/cg';
import Table from "../components/materials/Table"
import { BsSend } from 'react-icons/bs';
import Chart2 from '../ui/Chart2';

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
              <li>Engagements</li>
              <li>19K</li>
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
              <li>Spent</li>
              <li>$41.2K</li>
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
          <TrafficUI/>
        </div>
        <div className="card">
          
              <Table />



        </div>
      </div>



      {/* Most Visited Pages */}
      


        
      <div className="const">
        <div className="h3">
          <h1>  Most Visited Pages ---------------------- <CgDanger /></h1>
        </div>

        <div className="char">



        <table className='table1'>
          <thead>
            <tr>

            <th>Page Name</th>
            <th>Visitors</th>
            <th>Unique page visits</th>
            <th>Bounce rate</th>
            </tr>
          </thead>
          <tr>
            <td> <BsSend />  /</td>

            <td>95,847</td>
            <td>8,584</td>
            <td>16%</td>
          </tr>

          <tr>
            <td> <BsSend /> /auth/login</td>
            <td>7,500</td>
            <td>648</td>
            <td>5%</td>
          </tr>

          <tr>
            <td> <BsSend />  /dashboard</td>
            <td>85,406</td>
            <td>568</td>
            <td>2%</td>
          </tr>

          <tr>
            <td><BsSend /> /blog/top-5-react-frameworks</td>
            <td>75,050</td>
            <td>12,322</td>
            <td>12%</td>
          </tr>

          <tr>
            <td><BsSend /> /blog/understand-programming-principles</td>
            <td>68,003</td>
            <td>11,645</td>
            <td>10%</td>
          </tr>

          <tr>
            <td><BsSend /> /blog/design-patterns</td> 
            <td>49,510</td>
            <td>10,259</td>
            <td>8%</td>
          </tr>

          <tbody>

          </tbody>
        </table>

        <table className='ss'>
          <Chart2/>
          </table>
                  </div>

      </div>



      
    </div>
  );
}

export default Analytics
