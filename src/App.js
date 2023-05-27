// import Footer from './components/Footer';
// import Home from './components/Home';
// import ResumeForm from './components/ResumeForm';

// function App() {
//   return (
//     <div className="App">
//       <ResumeForm />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ResumeForm from './components/ResumeForm';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resume-form" element={<ResumeForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

