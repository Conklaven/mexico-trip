import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/options" element={<Options />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/meals" element={<Meals />} />
        </Routes>
      </div>
    </Router>
  );
}

const WelcomeScreen = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1>Welcome to the Klavens' Mexico Adventure</h1>
        <p>April 14th - April 22nd</p>
        <Link to="/options">
          <button className="enter-trip">Enter Trip</button>
        </Link>
      </div>
    </div>
  );
};

const Options = () => {
  return (
    <div className="options-page">
      <nav className="navbar">
        <Link to="/">🏠 Home</Link>
      </nav>
      <h1>Trip Options</h1>
      <div className="cards">
        <Link to="/itinerary" className="card">
          <h2>Itinerary</h2>
        </Link>
        <Link to="/hotels" className="card">
          <h2>Hotels</h2>
        </Link>
        <Link to="/meals" className="card">
          <h2>Restaurants</h2>
        </Link>
      </div>
    </div>
  );
};

const Itinerary = () => {
  const days = [
    { 
      date: 'April 14th', 
      activity: 'Drive from Memphis to St. Louis',
      images: ['/images/day1.jpg', '/images/day1-2.jpg', '/images/day1-3.jpg']
    },
    { 
      date: 'April 15th', 
      activity: 'Flight to Cancun - Private transport to JOIA Paraiso',
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ92MmQK9lhRWoh73xZVpk-x4ECUnrKs6VG4A&shttps://content.r9cdn.net/rimg/dimg/7d/53/6c3c1580-al-AA-55b57246.jpg', '/images/day2-2.jpg', '/images/day2-3.jpg']
    },
    { 
      date: 'April 16th', 
      activity: 'Relax at JOIA Paraiso',
      images: ['https://images.trvl-media.com/lodging/3000000/2810000/2802500/2802472/3f7b2e32.jpg', 'https://images.trvl-media.com/lodging/3000000/2810000/2802500/2802472/6a08d8c8.jpg']
    },
    { 
      date: 'April 17th', 
      activity: 'Dolphin Discovery Playa Del Carmen - Royal VIP Swim at 2PM',
      images: ['https://www.dolphindiscovery.com/media/playa-del-carmen/new/Dolphin-Discovery-Playa-del-Carmen-Dolphin-Royal-Swim-Program.jpg', 'https://www.dolphindiscovery.com/family-show-in-cancun-and-swim-with-dolphins/maroma-location.jpg']
    },
    { 
      date: 'April 18th', 
      activity: 'Relax at JOIA Paraiso',
      images: ['https://images.trvl-media.com/lodging/3000000/2810000/2802500/2802472/4900729f.jpg', '/images/day5-2.jpg']
    },
    { 
      date: 'April 19th', 
      activity: 'Relax at JOIA Paraiso',
      images: ['/images/day6-1.jpg', '/images/day6-2.jpg']
    },
    { 
      date: 'April 20th', 
      activity: 'Relax at JOIA Paraiso',
      images: ['/images/day7-1.jpg', '/images/day7-2.jpg']
    },
    { 
      date: 'April 21st', 
      activity: 'Private transport to Intercontinental Cancun',
      images: ['/images/day8-1.jpg', '/images/day8-2.jpg']
    },
    { 
      date: 'April 22nd', 
      activity: 'Flight home to St. Louis',
      images: ['/images/day9-1.jpg', '/images/day9-2.jpg']
    }
  ];

  return (
    <div className="itinerary-page">
      <nav className="navbar">
        <Link to="/options">🔙 Back to Options</Link>
      </nav>
      <h1>Itinerary</h1>
      <div className="timeline">
        {days.map((day, index) => (
          <ImageSlider key={index} day={day} />
        ))}
      </div>
    </div>
  );
};

const ImageSlider = ({ day }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % day.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [day.images.length]);

  return (
    <div className="timeline-item">
      <h3>{day.date}</h3>
      <p>{day.activity}</p>
      <div className="slider-wrapper">
        <img
          src={day.images[currentIndex]}
          alt={day.activity}
          className="timeline-photo"
          width={'400px'}
        />
      </div>
    </div>
  );
};

const Hotels = () => {
  return (
    <div className="hotels-page">
      <nav className="navbar">
        <Link to="/options">🔙 Back to Options</Link>
      </nav>
      <h1>Hotels</h1>
      <ul>
        <li><strong>April 15th - 21st:</strong> JOIA Paraiso, Cancun (All-Inclusive)</li>
        <li><strong>April 21st - 22nd:</strong> Intercontinental Cancun</li>
      </ul>
    </div>
  );
};

const Meals = () => {
  return (
    <div className="meals-page">
      <nav className="navbar">
        <Link to="/options">🔙 Back to Options</Link>
      </nav>
      <h1>Restaurants</h1>
      <p>All meals included at JOIA Paraiso (April 15th - 21st)</p>
      <p>Meals at Intercontinental Cancun (April 21st - 22nd)</p>
    </div>
  );
};

export default App;
