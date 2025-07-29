import React from "react";
import "./Sidebar.css";
import topHeader from "../../assets/images/Link (1).png";
// import img1 from "../../assets/images/Nav → List → Item → Link → SVG.png"
// import img2 from "../../assets/images/Frame (5).png"
// import img3 from "../../assets/images/Nav → List → Item → Link → SVG (1).png"
// import img4 from "../../assets/images/SVG.png"
// import img5 from "../../assets/images/Nav → List → Item → Link → SVG.png";
import { FaAngleRight, FaBitcoin, FaBoxOpen, FaHome, FaTruck, FaUserGraduate } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { TbDeviceAnalytics } from "react-icons/tb";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { GoMoveToBottom } from "react-icons/go";
import { CgCornerDownRight } from "react-icons/cg";
import { MdOutlineKeyboardArrowRight, MdOutlineShoppingCart } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="Main">
      <div className="topHeader">
        <div className="top">
          <img src={topHeader} alt="" />
          <nav>
            <h1>Devias</h1>
            <p>Production</p>
          </nav>
        </div>
        <h1>
          <GoMoveToBottom />
        </h1>
      </div>

      <div className="home">
        <div className="div">
          <h3>
            <FaHome />
          </h3>
          <p>Overview</p>
        </div>

        <div className="div">
          <h3>
            <SiGoogleanalytics />
          </h3>
          <p>Analytics</p>
        </div>

        <div className="div">
          <h3>
            <TbDeviceAnalytics />
          </h3>
          <p>E-Commerce</p>
        </div>

        <div className="div">
          <h3>
            {" "}
            <FaBitcoin />
          </h3>
          <p>Crypto</p>
        </div>

        <div className="div">
          <h3>
            {" "}
            <RiAccountPinBoxFill />
          </h3>
          <p>Account</p>
        </div>
      </div>

      <div className="h1">
        <h2>Concepts</h2>
      </div>

      <div className="icon">
        <div className="side">
          <div className="top">
            <h3>
              <RiAccountPinBoxFill />
            </h3>
            <nav>
              <p>Customers</p>
            </nav>
          </div>
          <h2>
            <MdOutlineKeyboardArrowRight />
          </h2>
        </div>

        <div className="side">
          <div className="top">
            <h3>
              <FaBoxOpen />
            </h3>
            <nav>
              <p>Products</p>
            </nav>
          </div>
          <h2>
            <MdOutlineKeyboardArrowRight />
          </h2>
        </div>

        <div className="side">
          <div className="top">
            <h3>
              <MdOutlineShoppingCart />{" "}
            </h3>
            <nav>
              <p>Orders</p>
            </nav>
          </div>
          <h2>
            <MdOutlineKeyboardArrowRight />
          </h2>
        </div>

        <div className="side">
          <div className="top">
            <h3>
              <IoShieldCheckmarkSharp />
            </h3>
            <nav>
              <p>Invoices</p>
            </nav>
          </div>
          <h2>
            <MdOutlineKeyboardArrowRight />
          </h2>
        </div>

        <div className="side">
          <div className="top">
            <h3>
              <FaTruck />
            </h3>
            <nav>
              <p>Logistics</p>
            </nav>
          </div>
          <h2>
            <MdOutlineKeyboardArrowRight />
          </h2>
        </div>

        <div className="side">
          <div className="top">
            <h3>
              <FaUserGraduate />
            </h3>
            <nav>
              <p>Academy</p>
            </nav>
          </div>
          <h2>
            <MdOutlineKeyboardArrowRight />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
