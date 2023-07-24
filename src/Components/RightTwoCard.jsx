import React, { Component } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import "../style/RightTwoCard.scss";
import images from "../images/activity 1.png";
import chevrondown from "../images/chevron-down 1.png";

gsap.registerPlugin(ScrollTrigger);

class RightTwoCard extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.state = {
      isVisible: false,
    };
    this.observer = null; // Make observer a class property
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.setState({ isVisible: true });
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the chart is visible
    );

    if (this.chartRef.current) {
      this.observer.observe(this.chartRef.current);
    }
  }

  componentWillUnmount() {
    if (this.chartRef.current && this.observer) {
      this.observer.unobserve(this.chartRef.current);
    }
  }

  render() {
    const data = {
      datasets: [
        {
          data: [37, 24, 22],
          backgroundColor: ["#48CAAC", "#FFCE56", "red"],
          hoverBackgroundColor: ["#48CAAC", "#FFCE56", "red"],
        },
      ],
    };

    const options = {
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 5000,
        easing: "easeOutQuart",
      },
      plugins: {
        legend: {
          display: false, // Hide the legend
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem, data) => {
              return `${tooltipItem.dataset.data[tooltipItem.dataIndex]}%`;
            },
          },
        },
      },
      elements: {
        arc: {
          borderWidth: 0,
          borderAlign: "inner",
        },
      },
    };

    gsap.to(".righttwo_box", {
      y: "-180%",
      scrollTrigger: {
        trigger: ".home",
        start: "top center ",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
    });

    return (
      <>
        <div className="righttwo_box">
          <div className="righttwocard">
            <div className="rightcard_header">
              <div className="left">
                <img src={images} alt="icon" />
                <h6>HEALTHCARE</h6>
              </div>
              <span className="select">
                <p>This Week</p>
                <img src={chevrondown} alt="icon" />
              </span>
            </div>
            <div className="text_content">
              <p>Uptick in Healthcare Leads by 37%</p>
            </div>
            <div className="card_img">
              <div ref={this.chartRef}>
                {this.state.isVisible && (
                  <Doughnut data={data} options={options} />
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RightTwoCard;
