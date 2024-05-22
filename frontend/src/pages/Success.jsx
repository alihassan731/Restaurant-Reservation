import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const Success = () => {
  const [countdowm, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeoutId);
  }, [navigate]);
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1>Redirecting to Home in {countdowm} seconds...</h1>
          <Link to={"/"}>Back to Home <HiArrowNarrowRight/></Link>
        </div>
      </section>
    </>
  );
};

export default Success;
