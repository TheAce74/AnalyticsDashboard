import { NavLink } from "react-router-dom";
import logo from "../assets/boltIcon.svg";
import { useCallback, useRef, useState } from "react";
import { getItem, setItem } from "../utils/localStorage";
import PropTypes from "prop-types";
import { useClickAway } from "../hooks/useClickAway";
import { simulateClick } from "../utils/simClick";
import { useModal } from "../hooks/useModal";
import { useAlert } from "../hooks/useAlert";

SideBar.propTypes = {
  openMenu: PropTypes.bool,
  setOpenMenu: PropTypes.func,
};

function SideBar({ openMenu, setOpenMenu }) {
  const [dark, setDark] = useState(
    getItem("dark") !== null
      ? getItem("dark")
      : window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [expanded, setExpanded] = useState(false);
  const clickAwayRef = useRef(null);

  const setTheme = (bool) => {
    setItem("dark", bool);
    setDark(bool);
  };

  const clickAway = useCallback(() => {
    setOpenMenu(false);
  }, [setOpenMenu]);

  useClickAway(clickAwayRef, clickAway);

  const [openModal, setOpenModal] = useState(false);
  const { showAlert } = useAlert();

  const modalRef = useRef({
    title: null,
    message: null,
    buttonText1: null,
    buttonText2: null,
    callback: null,
  });

  const modal = useModal(openModal, setOpenModal, modalRef.current);

  const showModal = () => {
    modalRef.current = {
      title: "Sign Out",
      message: (
        <p
          style={{
            marginBlock: ".5em",
          }}
        >
          Are you sure you want to sign out?
        </p>
      ),
      buttonText1: "No",
      buttonText2: "Yes",
      callback: () => {
        showAlert("Sign out successful", { variant: "success" });
        setOpenModal(false);
      },
    };
    setOpenModal(true);
  };

  return (
    <aside
      className={expanded ? "sidebar expanded" : "sidebar"}
      data-theme={dark ? "dark" : "light"}
      data-mobile={openMenu ? "expanded" : "collapsed"}
      ref={clickAwayRef}
    >
      <section>
        <div className="collapsible logo-container">
          <img src={logo} alt="VoltStorm logo" />
          <p>VoltStorm</p>
        </div>
        <nav aria-label="primary navigation">
          <ul role="list">
            <li>
              <NavLink to="/" onClick={() => setOpenMenu(false)}>
                <div className="collapsible">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.24 10H13.34C11.15 10 10 11.15 10 13.33V15.23C10 17.41 11.15 18.56 13.33 18.56H15.23C17.41 18.56 18.56 17.41 18.56 15.23V13.33C18.57 11.15 17.42 10 15.24 10Z"
                      fill="#0D062D"
                    />
                    <path
                      opacity="0.4"
                      d="M26.6699 10H24.7699C22.5899 10 21.4399 11.15 21.4399 13.33V15.23C21.4399 17.41 22.5899 18.56 24.7699 18.56H26.6699C28.8499 18.56 29.9999 17.41 29.9999 15.23V13.33C29.9999 11.15 28.8499 10 26.6699 10Z"
                      fill="#0D062D"
                    />
                    <path
                      d="M26.6699 21.4301H24.7699C22.5899 21.4301 21.4399 22.5801 21.4399 24.7601V26.6601C21.4399 28.8401 22.5899 29.9901 24.7699 29.9901H26.6699C28.8499 29.9901 29.9999 28.8401 29.9999 26.6601V24.7601C29.9999 22.5801 28.8499 21.4301 26.6699 21.4301Z"
                      fill="#0D062D"
                    />
                    <path
                      opacity="0.4"
                      d="M15.24 21.4301H13.34C11.15 21.4301 10 22.5801 10 24.7601V26.6601C10 28.8501 11.15 30.0001 13.33 30.0001H15.23C17.41 30.0001 18.56 28.8501 18.56 26.6701V24.7701C18.57 22.5801 17.42 21.4301 15.24 21.4301Z"
                      fill="#0D062D"
                    />
                  </svg>
                  <p>Dashboard</p>
                </div>
              </NavLink>
              <span className="after"></span>
            </li>
            <li>
              <NavLink to="/sales" onClick={() => setOpenMenu(false)}>
                <div className="collapsible">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 20.98V23C10 28 12 30 17 30H23C28 30 30 28 30 23V17C30 12 28 10 23 10H17C12 10 10 12 10 17"
                      stroke="#B2ABAB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.17 20L18.7 19.3L15.5 22.5"
                      stroke="#B2ABAB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.5 17.5L22.99 19.01L22 20"
                      stroke="#B2ABAB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.5 17.5H24.5V19.5"
                      stroke="#B2ABAB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Sales</p>
                </div>
              </NavLink>
              <span className="after"></span>
            </li>
            <li>
              <NavLink to="/users" onClick={() => setOpenMenu(false)}>
                <div className="collapsible">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.6801 11.96C21.1601 12.67 21.4401 13.52 21.4401 14.44C21.4301 16.84 19.5401 18.79 17.1601 18.87C17.0601 18.86 16.9401 18.86 16.8301 18.87C14.4501 18.79 12.5601 16.84 12.5601 14.44C12.5601 11.99 14.5401 10 17.0001 10"
                      stroke="#B2ABAB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.4098 12C26.3498 12 27.9098 13.57 27.9098 15.5C27.9098 17.39 26.4098 18.93 24.5398 19C24.4598 18.99 24.3698 18.99 24.2798 19"
                      stroke="#B2ABAB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.1602 22.56C9.74021 24.18 9.74021 26.82 12.1602 28.43C14.9102 30.27 19.4202 30.27 22.1702 28.43C24.5902 26.81 24.5902 24.17 22.1702 22.56C19.4302 20.73 14.9202 20.73 12.1602 22.56Z"
                      stroke="#B2ABAB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.3398 28C27.0598 27.85 27.7398 27.56 28.2998 27.13C29.8598 25.96 29.8598 24.03 28.2998 22.86C27.7498 22.44 27.0798 22.16 26.3698 22"
                      stroke="#B2ABAB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Users</p>
                </div>
              </NavLink>
              <span className="after"></span>
            </li>
            <li>
              <NavLink to="/orders" onClick={() => setOpenMenu(false)}>
                <div className="collapsible">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1699 15.4401L19.9999 20.55L28.7699 15.47"
                      stroke="#B7B0B0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 29.61V20.54"
                      stroke="#B7B0B0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.3901 17.1701C10.3901 15.7901 11.3801 14.1101 12.5901 13.4401L17.9301 10.4701C19.0701 9.84006 20.9401 9.84006 22.0801 10.4701L27.4201 13.4401C28.6301 14.1101 29.6201 15.7901 29.6201 17.1701V22.8201C29.6201 24.2001 28.6301 25.8801 27.4201 26.5501L22.0801 29.5201C20.9401 30.1501 19.0701 30.1501 17.9301 29.5201L12.5901 26.5501C11.3801 25.8801 10.3901 24.2001 10.3901 22.8201V22.0001"
                      stroke="#B7B0B0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.9998 21.24V17.58L18.9297 14.07L17.8798 13.47L15.5098 12.1"
                      stroke="#B7B0B0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Orders</p>
                </div>
              </NavLink>
              <span className="after"></span>
            </li>
            <li>
              <NavLink to="/income" onClick={() => setOpenMenu(false)}>
                <div className="collapsible">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.6599 28.01L21.1399 29.53C20.5199 30.15 19.4999 30.15 18.8799 29.53L17.3599 28.01C17.0999 27.75 16.5899 27.54 16.2299 27.54H14.0799C13.1999 27.54 12.4799 26.8199 12.4799 25.9399V23.79C12.4799 23.43 12.2699 22.92 12.0099 22.66L10.4899 21.14C9.8699 20.52 9.8699 19.5 10.4899 18.88L12.0099 17.36C12.2699 17.1 12.4799 16.59 12.4799 16.23V14.08C12.4799 13.2 13.1999 12.48 14.0799 12.48"
                      stroke="#B2ABAB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.3398 11.99L18.8598 10.47C19.4798 9.85 20.4998 9.85 21.1198 10.47L22.6399 11.99C22.8999 12.25 23.4098 12.46 23.7698 12.46H25.9199C26.7999 12.46 27.5198 13.1801 27.5198 14.0601V16.21C27.5198 16.57 27.7298 17.08 27.9898 17.34L29.5099 18.86C30.1299 19.48 30.1299 20.5 29.5099 21.12L27.9898 22.64C27.7298 22.9 27.5198 23.4101 27.5198 23.7701V25.9201C27.5198 26.8001 26.7999 27.5201 25.9199 27.5201"
                      stroke="#B2ABAB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 23L23 17"
                      stroke="#B2ABAB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.4945 22.5H22.5035"
                      stroke="#B2ABAB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.4945 17.5H17.5035"
                      stroke="#B2ABAB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Income</p>
                </div>
              </NavLink>
              <span className="after"></span>
            </li>
            <li>
              <NavLink to="/refunds" onClick={() => setOpenMenu(false)}>
                <div className="collapsible">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 14C10.75 15.67 10 17.75 10 20C10 25.52 14.48 30 20 30C25.52 30 30 25.52 30 20C30 14.48 25.52 10 20 10C18.57 10 17.2 10.3 15.97 10.85"
                      stroke="#B2ABAB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.9946 24H20.0036"
                      stroke="#B2ABAB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 16V21"
                      stroke="#B2ABAB"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Refunds</p>
                </div>
              </NavLink>
              <span className="after"></span>
            </li>
          </ul>
        </nav>
        <div className="theme-switcher">
          <label
            htmlFor="light-theme"
            aria-label="switch to light theme"
            tabIndex={0}
            onKeyDown={simulateClick}
            onClick={() => setTheme(false)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1826_463)">
                <path
                  d="M9 13.2188C11.33 13.2188 13.2188 11.33 13.2188 9C13.2188 6.67005 11.33 4.78125 9 4.78125C6.67005 4.78125 4.78125 6.67005 4.78125 9C4.78125 11.33 6.67005 13.2188 9 13.2188Z"
                  fill="white"
                />
                <path
                  d="M9 3.09345C8.53363 3.09345 8.15625 2.71564 8.15625 2.2497V1.40625C8.15625 0.940309 8.53363 0.5625 9 0.5625C9.46637 0.5625 9.84375 0.940309 9.84375 1.40625V2.2497C9.84375 2.71564 9.46637 3.09345 9 3.09345Z"
                  fill="white"
                />
                <path
                  d="M13.7734 5.07056C13.5576 5.07056 13.3417 4.98816 13.1769 4.82336C12.8473 4.49387 12.8473 3.95964 13.1769 3.63015L13.7734 3.03369C14.103 2.7043 14.637 2.7042 14.9666 3.03379C15.2961 3.36328 15.2961 3.89751 14.9666 4.227L14.37 4.82346C14.2052 4.98816 13.9893 5.07056 13.7734 5.07056Z"
                  fill="white"
                />
                <path
                  d="M16.5937 9.84375H15.75C15.2836 9.84375 14.9062 9.46594 14.9062 9C14.9062 8.53406 15.2836 8.15625 15.75 8.15625H16.5937C17.0601 8.15625 17.4375 8.53406 17.4375 9C17.4375 9.46594 17.0601 9.84375 16.5937 9.84375Z"
                  fill="white"
                />
                <path
                  d="M14.37 15.2133C14.1541 15.2133 13.9382 15.131 13.7734 14.9662L13.1769 14.3698C12.8473 14.0403 12.8473 13.5061 13.1769 13.1766C13.5065 12.847 14.0404 12.8469 14.37 13.1765L14.9666 13.7729C15.2961 14.1024 15.2961 14.6366 14.9666 14.9661C14.8018 15.1309 14.5859 15.2133 14.37 15.2133Z"
                  fill="white"
                />
                <path
                  d="M9 17.4374C8.53363 17.4374 8.15625 17.0596 8.15625 16.5937V15.7502C8.15625 15.2843 8.53363 14.9065 9 14.9065C9.46637 14.9065 9.84375 15.2843 9.84375 15.7502V16.5937C9.84375 17.0596 9.46637 17.4374 9 17.4374Z"
                  fill="white"
                />
                <path
                  d="M3.63037 15.2134C3.41449 15.2134 3.19861 15.131 3.03381 14.9662C2.70422 14.6367 2.70422 14.1025 3.03381 13.773L3.63037 13.1765C3.95996 12.8471 4.4939 12.847 4.82349 13.1766C5.15308 13.5061 5.15308 14.0403 4.82349 14.3698L4.22693 14.9663C4.06213 15.131 3.84625 15.2134 3.63037 15.2134Z"
                  fill="white"
                />
                <path
                  d="M2.25 9.84375H1.40625C0.93988 9.84375 0.5625 9.46594 0.5625 9C0.5625 8.53406 0.93988 8.15625 1.40625 8.15625H2.25C2.71637 8.15625 3.09375 8.53406 3.09375 9C3.09375 9.46594 2.71637 9.84375 2.25 9.84375Z"
                  fill="white"
                />
                <path
                  d="M4.22693 5.07063C4.01105 5.07063 3.79517 4.98833 3.63037 4.82354L3.03381 4.22708C2.70422 3.89759 2.70422 3.36335 3.03381 3.03386C3.3634 2.70427 3.89734 2.70417 4.22693 3.03376L4.82349 3.63022C5.15308 3.95971 5.15308 4.49395 4.82349 4.82344C4.65869 4.98823 4.44281 5.07063 4.22693 5.07063Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1826_463">
                  <rect
                    width="16.875"
                    height="16.875"
                    fill="white"
                    transform="translate(0.5625 0.5625)"
                  />
                </clipPath>
              </defs>
            </svg>
          </label>
          <input type="radio" name="theme" id="light-theme" checked={!dark} />
          <label
            htmlFor="dark-theme"
            aria-label="switch to dark theme"
            tabIndex={0}
            onKeyDown={simulateClick}
            onClick={() => setTheme(true)}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 4.6875C15.2486 4.6875 15.4871 4.58873 15.6629 4.41291C15.8387 4.2371 15.9375 3.99864 15.9375 3.75V2.8125C15.9375 2.56386 15.8387 2.3254 15.6629 2.14959C15.4871 1.97377 15.2486 1.875 15 1.875C14.7514 1.875 14.5129 1.97377 14.3371 2.14959C14.1613 2.3254 14.0625 2.56386 14.0625 2.8125V3.75C14.0625 3.99864 14.1613 4.2371 14.3371 4.41291C14.5129 4.58873 14.7514 4.6875 15 4.6875Z"
                fill="#B2ABAB"
              />
              <path
                d="M15 25.3125C14.7514 25.3125 14.5129 25.4113 14.3371 25.5871C14.1613 25.7629 14.0625 26.0014 14.0625 26.25V27.1875C14.0625 27.4361 14.1613 27.6746 14.3371 27.8504C14.5129 28.0262 14.7514 28.125 15 28.125C15.2486 28.125 15.4871 28.0262 15.6629 27.8504C15.8387 27.6746 15.9375 27.4361 15.9375 27.1875V26.25C15.9375 26.0014 15.8387 25.7629 15.6629 25.5871C15.4871 25.4113 15.2486 25.3125 15 25.3125Z"
                fill="#B2ABAB"
              />
              <path
                d="M27.1875 14.0625H26.25C26.0014 14.0625 25.7629 14.1613 25.5871 14.3371C25.4113 14.5129 25.3125 14.7514 25.3125 15C25.3125 15.2486 25.4113 15.4871 25.5871 15.6629C25.7629 15.8387 26.0014 15.9375 26.25 15.9375H27.1875C27.4361 15.9375 27.6746 15.8387 27.8504 15.6629C28.0262 15.4871 28.125 15.2486 28.125 15C28.125 14.7514 28.0262 14.5129 27.8504 14.3371C27.6746 14.1613 27.4361 14.0625 27.1875 14.0625Z"
                fill="#B2ABAB"
              />
              <path
                d="M3.75 14.0625H2.8125C2.56386 14.0625 2.3254 14.1613 2.14959 14.3371C1.97377 14.5129 1.875 14.7514 1.875 15C1.875 15.2486 1.97377 15.4871 2.14959 15.6629C2.3254 15.8387 2.56386 15.9375 2.8125 15.9375H3.75C3.99864 15.9375 4.2371 15.8387 4.41291 15.6629C4.58873 15.4871 4.6875 15.2486 4.6875 15C4.6875 14.7514 4.58873 14.5129 4.41291 14.3371C4.2371 14.1613 3.99864 14.0625 3.75 14.0625Z"
                fill="#B2ABAB"
              />
              <path
                d="M22.9549 5.71883L22.2921 6.38164C22.2025 6.46813 22.1311 6.57157 22.082 6.68595C22.0328 6.80033 22.007 6.92335 22.0059 7.04783C22.0048 7.17231 22.0285 7.29576 22.0757 7.41098C22.1228 7.52619 22.1924 7.63087 22.2804 7.71889C22.3685 7.80691 22.4731 7.87653 22.5884 7.92366C22.7036 7.9708 22.827 7.99452 22.9515 7.99344C23.076 7.99236 23.199 7.9665 23.3134 7.91736C23.4278 7.86823 23.5312 7.79681 23.6177 7.70727L24.2814 7.04539C24.3685 6.95829 24.4376 6.85488 24.4848 6.74108C24.5319 6.62727 24.5562 6.5053 24.5562 6.38211C24.5562 6.25893 24.5319 6.13695 24.4848 6.02315C24.4376 5.90934 24.3685 5.80594 24.2814 5.71883C24.1943 5.63173 24.0909 5.56263 23.9771 5.51549C23.8633 5.46835 23.7413 5.44409 23.6182 5.44409C23.495 5.44409 23.373 5.46835 23.2592 5.51549C23.1454 5.56263 23.042 5.63173 22.9549 5.71883Z"
                fill="#B2ABAB"
              />
              <path
                d="M6.38185 22.292L5.7181 22.9548C5.631 23.0419 5.5619 23.1453 5.51476 23.2591C5.46762 23.3729 5.44336 23.4949 5.44336 23.6181C5.44336 23.7413 5.46762 23.8632 5.51476 23.977C5.5619 24.0909 5.631 24.1943 5.7181 24.2814C5.89401 24.4573 6.1326 24.5561 6.38138 24.5561C6.50456 24.5561 6.62654 24.5318 6.74035 24.4847C6.85415 24.4376 6.95756 24.3685 7.04466 24.2814L7.70747 23.6185C7.79458 23.5315 7.86368 23.4282 7.91085 23.3144C7.95801 23.2007 7.98231 23.0787 7.98235 22.9556C7.9824 22.8325 7.95819 22.7105 7.9111 22.5967C7.86402 22.483 7.79499 22.3796 7.70794 22.2925C7.6209 22.2054 7.51756 22.1362 7.40381 22.0891C7.29006 22.0419 7.16813 22.0176 7.04499 22.0176C6.7963 22.0175 6.55776 22.1162 6.38185 22.292Z"
                fill="#B2ABAB"
              />
              <path
                d="M23.6171 22.292C23.4403 22.1212 23.2035 22.0267 22.9577 22.0288C22.7119 22.031 22.4767 22.1296 22.3029 22.3034C22.1291 22.4772 22.0305 22.7124 22.0284 22.9582C22.0262 23.204 22.1207 23.4408 22.2915 23.6176L22.9543 24.2814C23.1302 24.4573 23.3688 24.5561 23.6176 24.5561C23.8664 24.5561 24.1049 24.4573 24.2809 24.2814C24.4568 24.1054 24.5556 23.8668 24.5556 23.6181C24.5556 23.3693 24.4568 23.1307 24.2809 22.9548L23.6171 22.292Z"
                fill="#B2ABAB"
              />
              <path
                d="M6.38185 7.70821C6.55866 7.87898 6.79548 7.97347 7.04129 7.97134C7.2871 7.9692 7.52223 7.87061 7.69605 7.69679C7.86987 7.52297 7.96847 7.28783 7.97061 7.04202C7.97274 6.79621 7.87825 6.5594 7.70747 6.38258L7.04466 5.71883C6.86875 5.54292 6.63016 5.44409 6.38138 5.44409C6.1326 5.44409 5.89401 5.54292 5.7181 5.71883C5.54219 5.89474 5.44336 6.13333 5.44336 6.38211C5.44336 6.63089 5.54219 6.86948 5.7181 7.04539L6.38185 7.70821Z"
                fill="#B2ABAB"
              />
              <path
                d="M23.1567 16.3903C23.0357 16.271 22.8846 16.1867 22.7195 16.1466C22.5543 16.1065 22.3814 16.112 22.2192 16.1625C21.5901 16.3568 20.9351 16.4542 20.2767 16.4513C18.4926 16.4495 16.7821 15.7401 15.5205 14.4787C14.2589 13.2173 13.5493 11.5069 13.5473 9.72285C13.545 9.06465 13.643 8.40995 13.8379 7.78128C13.8888 7.61887 13.8945 7.44566 13.8544 7.28025C13.8144 7.11483 13.73 6.96344 13.6104 6.84232C13.4909 6.7212 13.3406 6.63492 13.1757 6.59273C13.0108 6.55055 12.8375 6.55404 12.6745 6.60285C11.2513 7.03321 9.96401 7.82507 8.9381 8.9012C7.91218 9.97733 7.18269 11.301 6.82077 12.7431C6.45885 14.1851 6.47687 15.6964 6.87306 17.1294C7.26925 18.5624 8.03008 19.8683 9.08136 20.9197C10.1326 21.9711 11.4385 22.732 12.8715 23.1283C14.3045 23.5247 15.8157 23.5428 17.2578 23.181C18.6999 22.8192 20.0236 22.0898 21.0999 21.064C22.1761 20.0382 22.9681 18.751 23.3985 17.3278C23.4473 17.1644 23.4506 16.9907 23.408 16.8255C23.3654 16.6603 23.2785 16.5098 23.1567 16.3903Z"
                fill="#B2ABAB"
              />
            </svg>
          </label>
          <input type="radio" name="theme" id="dark-theme" checked={dark} />
          <span className="after"></span>
        </div>
      </section>
      <section>
        <ul role="list" aria-label="quick actions">
          <li aria-live="polite">
            <button onClick={() => setExpanded(!expanded)} className="expand">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 12H14.5"
                  stroke="#B2ABAB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 15L15.5 12L12.5 9"
                  stroke="#B2ABAB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
                  stroke="#B2ABAB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="visually-hidden" role="alert">
                {expanded ? "Collapse" : "Expand"} Navigation Menu
              </p>
            </button>
            <span className="after"></span>
          </li>
          <li>
            <NavLink to="/settings" onClick={() => setOpenMenu(false)}>
              <div className="collapsible">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 20C23 18.34 21.66 17 20 17C18.34 17 17 18.34 17 20C17 21.66 18.34 23 20 23C20.41 23 20.81 22.92 21.17 22.76"
                    stroke="#B2ABAB"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.8799 28.5799L15.9699 29.2099C16.7599 29.6799 17.7799 29.3999 18.2499 28.6099L18.3599 28.4199C19.2599 26.8499 20.7399 26.8499 21.6499 28.4199L21.7599 28.6099C22.2299 29.3999 23.2499 29.6799 24.0399 29.2099L25.7699 28.2199C26.6799 27.6999 26.9899 26.5299 26.4699 25.6299C25.5599 24.0599 26.2999 22.7799 28.1099 22.7799C29.1499 22.7799 30.0099 21.9299 30.0099 20.8799V19.1199C30.0099 18.0799 29.1599 17.2199 28.1099 17.2199C27.0999 17.2199 26.4199 16.8199 26.1799 16.1899C25.9899 15.6999 26.0699 15.0599 26.4699 14.3699C26.9899 13.4599 26.6799 12.2999 25.7699 11.7799L24.9599 11.3199"
                    stroke="#B2ABAB"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.64 11.5801C20.74 13.1501 19.26 13.1501 18.35 11.5801L18.24 11.3901C17.78 10.6001 16.76 10.3201 15.97 10.7901L14.24 11.7801C13.33 12.3001 13.02 13.4701 13.54 14.3801C14.45 15.9401 13.71 17.2201 11.9 17.2201C10.86 17.2201 10 18.0701 10 19.1201V20.8801C10 21.9201 10.85 22.7801 11.9 22.7801C13.71 22.7801 14.45 24.0601 13.54 25.6301"
                    stroke="#B2ABAB"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Settings</p>
              </div>
            </NavLink>
            <span className="after"></span>
          </li>
          <li>
            <button onClick={showModal}>
              <div className="collapsible">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.56 22.5599L12 19.9999L14.56 17.4399"
                    stroke="#B2ABAB"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.2398 20H12.0698"
                    stroke="#B2ABAB"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.2398 20H20.2798"
                    stroke="#B2ABAB"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.01 14.48C27.25 15.84 28 17.71 28 20C28 25 24.42 28 20 28"
                    stroke="#B2ABAB"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 12C21.05 12 22.05 12.17 22.97 12.49"
                    stroke="#B2ABAB"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Sign Out</p>
              </div>
            </button>
            <span className="after"></span>
          </li>
        </ul>
      </section>
      {modal}
    </aside>
  );
}

export default SideBar;
