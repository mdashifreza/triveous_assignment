import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import FullScreenGrid from './Components/FullScreenGrid';
import triveous from './assets/triveous.png';
import Fav from './Components/News/Fav'
import { useDispatch, useSelector } from 'react-redux';

import { auth } from "./Firebase";

function App() {
  //redux
  const dispatch = useDispatch();
  const newsData = useSelector((state) => state.newsData);
  const newsUserName = useSelector((state) => state.newsUserName);

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;

  useEffect(() => {
    const cachedData = localStorage.getItem('newsData');
    
    const callApi = async () => {
      try {
        const responce = await fetch(url);
        if (!responce.ok) {
          return new Error("error in fetching");
        }
        const responceData = await responce.json();
        // console.log("md ashif reza api testing::: ", responceData);
        //redux store
        dispatch({ type: 'SET_DATA', payload: responceData.articles });
         // Cache the data in local storage
        localStorage.setItem('newsData', JSON.stringify(responceData.articles));
      } catch (error) {
        console.log("api fethc error::", error);
      }
    };

    if (cachedData) {
      dispatch({ type: 'SET_DATA', payload: JSON.parse(cachedData) });
    }
  callApi();
  }, [dispatch, url]);

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        // setUsername(user.displayName || "");
        dispatch({ type: 'SET_USER_NAME', payload: user.displayName || '' });
      }else{
        // setUsername("");
        dispatch({ type: 'SET_USER_NAME', payload: '' });
      }
    });
  },[dispatch])

  const handleSignout = ()=>{
    if(newsUserName?.length){
      auth.signOut();
    }
  }

  return (
    <div className="App">
    <Router>
    <nav className="bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
      <Link to="/">
        <div className="text-white text-lg font-semibold">
          <img src={triveous} alt="" className="bg-white h-14"/>
        </div>
      </Link>
        <div className="flex items-center space-x-4">
        <Link to="/signup"><button className="text-teal-700 border-2 border-teal-500 rounded-sm pl-4 pr-4 pt-2 pb-2 font-semibold">Registration</button></Link>
        <Link to="/login"><button className="text-teal-700 border-2 border-teal-500 rounded-sm pl-4 pr-4 pt-2 pb-2 font-semibold" onClick={handleSignout}>{!newsUserName.length ? "Login" : "SignOut"}</button> </Link>
        </div>
      </div>
    </nav>
        <Routes>
            <Route path="/" element={<Home name = {newsUserName} data={newsData} />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/grid-news" element={<FullScreenGrid user={auth.currentUser} />} />
            <Route path="/favorite" element={<Fav />} />
        </Routes>
    </Router>
    </div>
  );
}
export default App;
