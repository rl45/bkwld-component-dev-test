import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Page from './components/Page'


function App() {

  const [data,setData]= useState([]);

  useEffect(()=>{
    getData()
  },[])

  const getData=()=>{
    fetch('content.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(json) {
        setData(json.pages)
        console.log(json.pages)
      });
  }
  
  return (
    <BrowserRouter>
      <div className="background text-color" id="container">
        <Header/>
        <Switch>
          <Route exact path="/"> 
            {data.length > 0 ? <Page type={data[0].title} blocks={data[0].blocks}/> : <Page/>}
          </Route>
          <Route exact path="/industries"> 
            {data.length > 0 ? <Page type={data[0].title} blocks={data[0].blocks}/> : <Page/>}
          </Route>
          <Route exact path="/services"> 
            {data.length > 0 ? <Page type={data[1].title} blocks={data[1].blocks}/> : <Page/>}
          </Route>
          <Route exact path="/about"> 
            {data.length > 0 ? <Page type={data[2].title} blocks={data[2].blocks}/> : <Page/>}
          </Route>
          <Route>
          {data.length > 0 ? <Page type={data[3].title} blocks={data[3].blocks}/> : <div>Error 404 Page</div>}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
