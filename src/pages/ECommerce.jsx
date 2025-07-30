import React from 'react'
import img1 from "../assets/images/flag-uk.svg fill.png"
import img2 from "../assets/images/Button.png";
import "./ECommerce.css"
import { CiSearch } from 'react-icons/ci';
import { FaRegBell } from 'react-icons/fa';
import { IoPeopleOutline } from 'react-icons/io5';
import { TfiReload } from 'react-icons/tfi';
import img3 from "../assets//images/iconly-glass-chart.svg.png"
import img4 from "../assets/images/iconly-glass-discount.svg.png"
import img5 from "../assets/images/iconly-glass-tick.svg.png"
import SalesPIE from '../ui/SalesPIE';
import TopSellings from "../components/materials/TopSellings"
import SalesMap from '../components/materials/SalesMap';
import { ThemeProvider } from '@emotion/react';
import Ecommerce from '../ui/Ecommerce1';
import { createTheme } from '@mui/material';

const ECommerce = () => {
  const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 'bold',
          backgroundColor: '#f5f5f5'
        },
      },
    },
  },
});
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
          <h1>E-Commerce</h1>
        </div>
        <div className="card">
          <button><TfiReload />  Sync Data   </button>
        </div>
      </div>





      <span>Today's Stats</span>
      <div className="ban">

      <div className="as">

      <div className="top">
        <div className="card">
          <div className="icon">
            <div className="img">
              <img src={img3} alt="" />
            </div>
            <div className="img">
              <p>Sales</p>
              <h1>$152k</h1>
            </div>
          </div>

                    <div className="icon">
            <div className="img">
              <img src={img4} alt="" />
            </div>
            <div className="img">
              <p>Cost</p>
              <h1>$99.7k</h1>
            </div>
          </div>

          
                    <div className="icon">
            <div className="img">
              <img src={img5} alt="" />
            </div>
            <div className="img">
              <p>Profit</p>
              <h1>$32.1k</h1>
            </div>
          </div>


        </div>
        </div>
        
        <div className="top">
                <SalesPIE/>

        </div>
      </div>

      <div className="as">
        <TopSellings/>
        </div>
              </div>


      <div className="ban">
        <div className="as">
          <SalesMap/>
        </div>
        <div className="as">
              <ThemeProvider theme={theme}>
      <Ecommerce />
    </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default ECommerce
