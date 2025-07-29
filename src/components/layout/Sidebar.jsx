import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

import topHeader from "../../assets/images/Link (1).png";
// import img1 from "../../assets/images/Nav → List → Item → Link → SVG.png"
// import img2 from "../../assets/images/Frame (5).png"
// import img3 from "../../assets/images/Nav → List → Item → Link → SVG (1).png"
// import img4 from "../../assets/images/SVG.png"
// import img5 from "../../assets/images/Nav → List → Item → Link → SVG.png";
import { FaAngleRight, FaBitcoin, FaBoxOpen, FaClipboardCheck, FaHome, FaServer, FaTruck, FaUserGraduate } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { TbDeviceAnalytics } from "react-icons/tb";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight, MdOutlineShoppingCart } from "react-icons/md";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FiMail, FiMessageSquare, FiShare2, FiUpload } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";

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
          <MdOutlineKeyboardArrowRight />
        </h1>
      </div>

      <div className="home">
        <div className="div">
          <h3>
            <FaHome />
          </h3>
          <p>Overview</p>
        </div>

        <Link to={"/analytics"} className="div">
          <h3>
            <SiGoogleanalytics />
          </h3>
          <p>Analytics</p>
        </Link>

        <Link to={"/ECommerce"} className="div">
          <h3>
            <TbDeviceAnalytics />
          </h3>
          <p>E-Commerce</p>
        </Link>

        <Link to={"/Crypto"} className="div">
          <h3>
            {" "}
            <FaBitcoin />
          </h3>
          <p>Crypto</p>
        </Link>

        <Link to={"/Account"} className="div">
          <h3>
            {" "}
            <RiAccountPinBoxFill />
          </h3>
          <p>Account</p>
        </Link>
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

      <div className="dt">
        <p>Dashboard</p>
        <p>Course</p>
      </div>

      <div className="side">
        <div className="top">
          <h3>
            <FaServer />
          </h3>
          <nav>
            <p>Job Listings</p>
          </nav>
        </div>
        <h2>
          <MdOutlineKeyboardArrowRight />
        </h2>
      </div>

      <div className="side">
        <div className="top">
          <h3>
            <FiShare2 />
          </h3>
          <nav>
            <p>Social Media</p>
          </nav>
        </div>
        <h2>
          <MdOutlineKeyboardArrowRight />
        </h2>
      </div>

      <div className="side">
        <div className="top">
          <h3>
            <HiOutlineDocumentText />
          </h3>
          <nav>
            <p>Blog</p>
          </nav>
        </div>
        <h2>
          <MdOutlineKeyboardArrowRight />
        </h2>
      </div>

      <div className="side">
        <div className="top">
          <h3>
            <FiUpload />
          </h3>
          <nav>
            <p>File Manager</p>
          </nav>
        </div>
      </div>

      <div className="side">
        <div className="top">
          <h3>
            <FaClipboardCheck />
          </h3>
          <nav>
            <p>Kanban</p>
          </nav>
        </div>
      </div>

      <div className="side">
        <div className="top">
          <h3>
            <FiMail />
          </h3>
          <nav>
            <p>Mail</p>
          </nav>
        </div>
      </div>

      <div className="side">
        <div className="top">
          <h3>
            <FiMessageSquare />
          </h3>
          <nav>
            <p>Chat</p>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
