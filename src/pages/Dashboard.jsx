import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar';
import { Link, Route, Routes } from 'react-router-dom';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import Navbar from '../components/Navbar';
import ReactApexChart from 'react-apexcharts';

const Dashboard = () => {

  // for bar charts
  const series = [
    {
      name: "Sales",
      data: [30, 40, 45, 50, 49, 60, 70]
    }
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: 5
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    colors: ["#008FFB"]
  };


  // Fore Pie Charts
  const seriesPie = [44, 55, 13, 33];

  const optionsPie = {
    chart: {
      type: "pie"
    },
    labels: ["Java", "RactJS", "Python", "Data Structure"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };



  // timer counter
  const [count, setCount] = useState(60);
  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    } else {
      alert('Time Up!');
    }
  }, [count])


  return (
    <>

      {/* <Navbar /> */}

      <div className="container-fluid " style={{ height: '100vh', backgroundColor: "transparent" }}>

        <div className="row g-0 px-3">
          <h4 className='text-primary py-3'>Dashboard Overview</h4>
          <div className="col-lg-3 p-2">
            <div className="card">
              <div className="row g-0">

                <div className="col-lg-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="mt-4 bi bi-people-fill" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                  </svg>
                </div>

                <div className="col-lg-8 py-2">
                  <h5>Total Users</h5>
                  <h3 className=''>1584</h3>
                  {/* <span>12% upto this month</span> */}
                </div>

              </div>
            </div>
          </div>
          <div className="col-lg-3 p-2">
            <div className="card">
              <div className="row g-0">

                <div className="col-lg-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className=" mt-4 bi bi-person-check-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                </div>

                <div className="col-lg-8 py-2">
                  <h5>Active Users</h5>
                  <h3 className=''>1123</h3>
                  {/* <span>12% upto this month</span> */}
                </div>

              </div>
            </div>
          </div>
          <div className="col-lg-3 p-2">
            <div className="card">

              <div className="row g-0">

                <div className="col-lg-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className=" mt-4   bi bi-book-fill" viewBox="0 0 16 16">
                    <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.403-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                  </svg>
                </div>

                <div className="col-lg-8 py-2">
                  <h5>Total Book</h5>
                  <h3 className=''>2400</h3>
                  {/* <span>12% upto this month</span> */}
                </div>

              </div>

            </div>
          </div>
          <div className="col-lg-3 p-2">
            <div className="card">
              <div className="row g-0">

                <div className="col-lg-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className=" mt-4 bi bi-book-half" viewBox="0 0 16 16">
                    <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                  </svg>
                </div>

                <div className="col-lg-8 py-2">
                  <h5>Issued Books</h5>
                  <h3 className=''>905</h3>
                  {/* <span>12% upto this month</span> */}
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* react charts   npm install react-apexcharts */}

        <div className="row p-3 ">

          <div className="col-lg-6">
            <div className="card">
              <h4 className='ms-3 py-2'>Weekly Sales</h4>
              <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={350}
              />
            </div>
          </div>

          <div className="col-lg-6 ">
            <div className="card">
              <h4 className='ms-2 py-2'>Book by Category</h4>
              <ReactApexChart
                options={optionsPie}
                series={seriesPie}
                type="pie"
                height={350}
              />
            </div>
          </div>

        </div>

        {/* timer counter  */}
        <div className="row g-0 py-4">
          <div className="col-lg-12 mt-5 text-center">
            <h1 className='text-warning py-5'> {count} Seconds left </h1>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard;