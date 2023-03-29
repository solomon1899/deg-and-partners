import React, { useState, useEffect, useRef } from "react";

      
      const Formules = () => {
        const number1 = 20;
        const number2 = 35;
        const number3 = 1200;
        const [count1, setCount1] = useState(0);
        const [count2, setCount2] = useState(0);
        const [count3, setCount3] = useState(0);
      
        useEffect(() => {
          const interval1 = setInterval(() => {
            if (count1 < number1) {
              setCount1(count1 + 2);
            }
          }, 50);
      
          const interval2 = setInterval(() => {
            if (count2 < number2) {
              setCount2(count2 + 5);
            }
          }, 50);
      
          const interval3 = setInterval(() => {
            if (count3 < number3) {
              setCount3(count3 + 48);
            }
          }, 50);
      
          return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
          };
        }, [count1, count2, count3, number1, number2, number3]);
      
        return (
          <div>
            <div className="numbers">
              <div className="numbers-item">
                <span style={{ fontFamily: "Poppins" }}>{count1}+</span>
                <br />
                <span className="number-title">Années d'expérience</span>
              </div>
              <div className="numbers-item">
                <span style={{ fontFamily: "Poppins" }}>{count2}+</span>
                <br />
                <span className="number-title">Collaborateurs investis</span>
              </div>
              <div className="numbers-item">
                <span style={{ fontFamily: "Poppins" }}>{count3}+</span>
                <br />
                <span className="number-title">Clients de confiance</span>
              </div>
            </div>
      
            <div className="parallax-container">
              <h1
                style={{
                  fontSize: "45px",
                  fontWeight: 600,
                }}
              >
                Nos formules
              </h1>
              <p>Nous vous proposons 3 packages, en fonction de vos besoins.</p>
              <button>voir les formules</button>
            </div>
          </div>
        );
      };
      
      export default Formules;