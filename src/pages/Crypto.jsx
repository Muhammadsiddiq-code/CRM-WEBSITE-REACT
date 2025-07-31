import React from 'react'
import img1 from "../assets/images/flag-uk.svg fill.png"
import img2 from "../assets/images/Button.png";
import { CiSearch } from 'react-icons/ci';
import { FaRegBell } from 'react-icons/fa';
import { IoPeopleOutline } from 'react-icons/io5';
import { BsEnvelopePlusFill } from 'react-icons/bs';
import Ecommerce2 from "../ui/Ecommerce2"

const Crypto = () => {
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
          <h1>Crypto</h1>
        </div>
        <div className="card">
          <button><BsEnvelopePlusFill /> Add Wallet   </button>
        </div>
      </div>
      <Ecommerce2/>

    </div>
  );
}

export default Crypto
