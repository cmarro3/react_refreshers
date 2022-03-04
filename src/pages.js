import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
}

export const Servies = () =>{
    return(
        <div>
            <h2>Our servies</h2>
        </div>
    )
}

export const CompanyHistory = () =>{
    return(
        <div>
            <h2>Our company history</h2>
        </div>
    )
}

export const Location = () =>{
    return(
        <div>
            <h2>Our location</h2>
        </div>
    )
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export const Whoops404 = () => {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Resource not found at {location.pathname}!</h1>
    </div>
  );
};
