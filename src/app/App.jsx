import './App.css'
import { useState } from 'react';
import WeatherPage from '../pages/WeatherPage/index'

export default function Board() {

  return (
    <div className="board-row">
      <WeatherPage />
    </div>
  );
}
