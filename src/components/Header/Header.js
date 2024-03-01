import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/Movies/MovieSlice";

const Header = () => {
  const [term, setTerm] =useState("");
  const dispatch = useDispatch();

  const subMitHandle =(e)=>{
    e.preventDefault();
    if(term === '') return alert("Please Enter the Search")
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
  }

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App </Link>
      </div>
      <div className="search-bar">
       <form onSubmit={subMitHandle}>
        <input type="text" value={term} placeholder="Enter movies and Shows" onChange={(e)=>setTerm(e.target.value)}/>
        <button type="submit"><i className="fa fa-search"/></button>
       </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
