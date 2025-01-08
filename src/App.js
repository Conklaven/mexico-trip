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
          <Route path="/restaurants" element={<Restaurants />} />
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
      <div className="cards options-cards">
        <Link to="/itinerary" className="card">
          <h2>Itinerary</h2>
        </Link>
        <Link to="/hotels" className="card">
          <h2>Hotels</h2>
        </Link>
        <Link to="/restaurants" className="card">
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
      images: ['https://www.brookings.edu/wp-content/uploads/2024/04/memphis-tennessee-skyline-downtown.jpg', 'https://www.billburmaster.com/rmsandw/tennessee/images/55us61nus647079.jpg', 'https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2024-11/a9ede22e-9522-4316-ac67-7589c60a76cc.png']
    },
    { 
      date: 'April 15th', 
      activity: 'Flight to Cancun - Private transport to JOIA Paraiso',
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ92MmQK9lhRWoh73xZVpk-x4ECUnrKs6VG4A&shttps://content.r9cdn.net/rimg/dimg/7d/53/6c3c1580-al-AA-55b57246.jpg', 'https://www.fodors.com/wp-content/uploads/2023/07/0-HERO-istockphoto-1224372937.jpg', 'https://www.cancuncare.com/wp-content/uploads/2019/11/cancun-airport-transfers.jpg']
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
      images: ['https://images.trvl-media.com/lodging/3000000/2810000/2802500/2802472/4900729f.jpg', 'https://images.trvl-media.com/lodging/3000000/2810000/2802500/2802472/34718a74.jpg']
    },
    { 
      date: 'April 19th', 
      activity: 'Relax at JOIA Paraiso',
      images: ['https://images.trvl-media.com/lodging/3000000/2810000/2802500/2802472/b2ae5616.jpg', 'https://digital.ihg.com/is/image/ihg/independent-riviera-maya-9146268166-2x1']
    },
    { 
      date: 'April 20th', 
      activity: 'Relax at JOIA Paraiso',
      images: ['https://images.trvl-media.com/lodging/3000000/2810000/2802500/2802472/a2517adb.jpg', 'https://images.trvl-media.com/lodging/3000000/2810000/2802500/2802472/14ecf498.jpg']
    },
    { 
      date: 'April 21st', 
      activity: 'Private transport to Intercontinental Cancun',
      images: ['https://images.trvl-media.com/lodging/1000000/20000/13000/12937/c80fa3fa.jpg', 'https://images.trvl-media.com/lodging/1000000/20000/13000/12937/72ad7caf.jpg']
    },
    { 
      date: 'April 22nd', 
      activity: 'Flight home to St. Louis',
      images: ['https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2022/08/American-Airlines-Boeing-737-MAX-8-N310RF-(3).jpg']
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

const Restaurants = () => {
  const restaurants = [
    { 
      name: 'Mexican Cuisine - Legado', 
      description: 'Try the best Mexican cuisine with fresh, local ingredients like chicken fajitas and tacos.', 
      hours: 'Check the Iberostar app', 
      dressCode: 'Smart casual', 
      reservations: 'Not required', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHh1sktJfwdJS6pia6LoMRiJzRLTJrdNsSBg&s',
      menu: 'https://sites.google.com/iberostar.com/iberostar-grand-paraiso/legado/en-mexicano?authuser=0'
    },
    { 
      name: 'L’Atelier Gourmet', 
      description: 'Gourmet à la carte dishes like tuna tartare and duck confit.', 
      hours: '6:00 p.m. to 10:00 p.m.', 
      dressCode: 'Smart casual', 
      reservations: 'Not necessary', 
      image: 'https://www.iberostargrandparaiso.com/images/restaurants/lateliar.jpg',
      menu: 'https://sites.google.com/iberostar.com/iberostar-grand-paraiso/latelier/en-franc%C3%A9s?authuser=0'
    },
    { 
      name: 'Punta Sal', 
      description: 'Ceviche, seafood, and grilled meats with ocean views.', 
      hours: 'Lunch Time', 
      dressCode: 'Check App', 
      reservations: 'Not necessary', 
      image: 'https://images.trvl-media.com/lodging/3000000/2810000/2802500/2802472/6549e1e3.jpg',
      menu: 'https://sites.google.com/iberostar.com/iberostar-grand-paraiso/cevicher%C3%ADa-grill/en-cevicheria-grill?authuser=0'
    },
    { 
      name: 'Haiku Japanese', 
      description: 'Nikkei fusion with sushi, teppanyaki, and sashimi.', 
      hours: '6:00 p.m. to 10:00 p.m.', 
      dressCode: 'Smart casual', 
      reservations: 'Required', 
      image: 'https://images.trvl-media.com/lodging/3000000/2810000/2802500/2802472/14ecf498.jpg',
      menu: 'https://sites.google.com/iberostar.com/iberostar-grand-paraiso/haiku-dinner/haiku_eng?authuser=0'
    },
    { 
      name: 'Ember Steak House', 
      description: 'Grilled meats and fish with stunning Caribbean views.', 
      hours: 'Check the Iberostar app', 
      dressCode: 'Informal by day, smart casual at night', 
      reservations: 'Not required', 
      image: 'https://lh6.googleusercontent.com/proxy/Rzv4BEr4vy3YTr0s96iQv6zsYqMxxE0VvD3lIunta4dC_CK8BcGcwVjv6hIoByl9me8q5sv6cAg_6aImhifiGhBn5iqH61A0jcE6EHfYNZFfDWeIul7PggOzLDQlJ3kdaJ98G_z5D2Yh9RvCzA',
      menu: 'https://apiimg.iberostar.com/uploads/document/document/6735/document.pdf'
    },
    { 
      name: 'Venecia Wine Cellar', 
      description: 'Italian specialties with wine pairings and desserts like limoncello cream.', 
      hours: '6:00 p.m. to 10:00 p.m.', 
      dressCode: 'Smart casual', 
      reservations: 'Not necessary', 
      image: 'https://images.trvl-media.com/lodging/3000000/2810000/2802500/2802472/6549e1e3.jpg',
      menu: 'https://hotels1.cdn.iberostar.com/uploads/document/document/2066/document.pdf'
    },
    { 
      name: 'Bella Vista Buffet', 
      description: 'Buffet with international and Mexican specialties.', 
      hours: '7:00 a.m. to 11:30 a.m. and 6:30 p.m. to 10:00 p.m.', 
      dressCode: 'Casual', 
      reservations: 'Not necessary', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/44/35/11/caption.jpg?w=1200&h=-1&s=1',
      menu: 'https://sites.google.com/iberostar.com/iberostar-grand-paraiso/legado/en-mexicano?authuser=0'
    }
  ];

  const hotels = ['Maya', 'Lindo', 'Beach', 'Del Mar'];

  return (
    <div className="restaurants-page">
      <nav className="navbar">
        <Link to="/options">🔙 Back to Options</Link>
      </nav>
      <h1>Restaurants</h1>
      <div className="restaurant-cards-grid">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
            <p><strong>Hours:</strong> {restaurant.hours}</p>
            <p><strong>Dress Code:</strong> {restaurant.dressCode}</p>
            <p><strong>Reservations:</strong> {restaurant.reservations}</p>
            <p><a href={restaurant.menu} target="_blank" rel="noopener noreferrer"><strong>Menu</strong></a></p>
          </div>
        ))}
      </div>
      <div className="complex-access">
        <p>Access the entire Iberostar complex</p>
        <p>Guests at JOIA Paraiso can enjoy buffets, bars, and à la carte restaurants across the entire Iberostar complex.</p>
      </div>
      <div className="hotel-cards-grid">
        {hotels.map((hotel, index) => (
          <Link to={`/hotel/${hotel.toLowerCase()}`} key={index} className="hotel-card">
            <h2>{hotel}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default App;
