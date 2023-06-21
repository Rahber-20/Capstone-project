import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store';
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from './Navbar';
import Slider from './Slider';
import NotAvailable from './NotAvailable';
import SelectGenre from './SelectGenre';

export default function Movies() {
    const navigate = useNavigate();

    const [isScrolled, setIsScrolled] = useState(false)
  
    const genresLoaded = useSelector((state)=> state.flixxit.genresLoaded)
    const movies = useSelector((state)=> state.flixxit.movies)
    const genres = useSelector((state)=> state.flixxit.genres)
  
    const dispatch = useDispatch();
  
    useEffect(()=>{
          dispatch(getGenres())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
    useEffect(()=>{
         if(genresLoaded) dispatch(fetchMovies({type:"movies"}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
    window.onscroll = ()=>{
      setIsScrolled(window.pageYOffset === 0 ? false : true)
      return ()=> (window.onscroll = null)
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        // if (currentUser) navigate("/");
      });

  return (
    <Container>
        <div className="navbar">
            <Navbar isScrolled={isScrolled}/>
        </div>
        <div className="data">
        <SelectGenre genres={genres} type="movie"/>
            {movies.length ? <Slider movies={movies}/> : <NotAvailable/>}
        </div>
    </Container>
  )
}

const Container = styled.div`
  .data{
    margin-top:8rem;
    .not-available{
        text-align:center;
        margin-top:4rem;
        color:white;
    }
  }
`;


