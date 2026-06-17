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
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" mt-4   bi bi-book-fill" viewBox="0 0 16 16">
                    <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                  </svg>
                </div>

                <div className="col-lg-8 py-2">
                  <h5>Total Book</h5>
                  <h3 className=''>1234</h3>
                  <span>12% upto this month</span>
                </div>

              </div>
            </div>
          </div>
          <div className="col-lg-3 p-2">
            <div className="card">
              <div className="row g-0">

                <div className="col-lg-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" mt-4   bi bi-book-fill" viewBox="0 0 16 16">
                    <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                  </svg>
                </div>

                <div className="col-lg-8 py-2">
                  <h5>Total Book</h5>
                  <h3 className=''>1234</h3>
                  <span>12% upto this month</span>
                </div>

              </div>
            </div>
          </div>
          <div className="col-lg-3 p-2">
            <div className="card">

              <div className="row g-0">

                <div className="col-lg-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" mt-4   bi bi-book-fill" viewBox="0 0 16 16">
                    <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                  </svg>
                </div>

                <div className="col-lg-8 py-2">
                  <h5>Total Book</h5>
                  <h3 className=''>1234</h3>
                  <span>12% upto this month</span>
                </div>

              </div>

            </div>
          </div>
          <div className="col-lg-3 p-2">
            <div className="card">
              <div className="row g-0">

                <div className="col-lg-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className=" mt-4   bi bi-book-fill" viewBox="0 0 16 16">
                    <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                  </svg>
                </div>

                <div className="col-lg-8 py-2">
                  <h5>Total Book</h5>
                  <h3 className=''>1234</h3>
                  <span>12% upto this month</span>
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