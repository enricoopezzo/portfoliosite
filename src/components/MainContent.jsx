import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { Projects } from '../pages/Projects';
import { Resume } from '../pages/Resume';
import { NavigationMenu } from './NavigationMenu';
import { HomePage } from '../pages/HomePage';

export const MainContent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.npoint.io/4662498929f7db013d0c')
      .then(response => {
        setData(response.data);
        console.log(response.data)
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
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
      </Routes>
    </main>
  );
}
