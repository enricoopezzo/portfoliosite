import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { Projects } from '../pages/Projects';
import { Resume } from '../pages/Resume';
import { NavigationMenu } from './NavigationMenu';
import { HomePage } from '../pages/HomePage';
import { Sustainability } from '../pages/Sustainability';
import { NotFound } from '../pages/NotFound';

export const MainContent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedData = localStorage.getItem("data");
    // check if the response is in local storage
    if (cachedData) {
    setData(JSON.parse(cachedData));
    setIsLoading(false);
    } else {
    axios.get('https://api.npoint.io/4662498929f7db013d0c')
      .then(response => {
        setData(response.data);
        localStorage.setItem("data", JSON.stringify(response.data)); // cache the response
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }
  }, []);

  if (isLoading) {
    return <main className="loader"></main>;
  }

  if (error) {
    return <main>Error: {error}</main>;
  }

  return (
    <main>
      <NavigationMenu />
      <Routes>
        <Route index element={<HomePage data={data} />} />
        <Route path="/projects" element={<Projects data={data} />} />
        <Route path="/resume" element={<Resume data={data} />} />
        <Route path="/sustainability" element={<Sustainability data={data} />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </main>
  );
}
