import './App.css';
import TextField from '@mui/material/TextField';
import VideoCard from './components/VideoCard';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'; import { styled } from '@mui/material/styles';


function App() {
  const [searchText, setSearchText] = useState("");
  const [videoData, setVideoData] = useState([]);

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
  }

  const handleDataFetch = async () => {

    const URL = searchText ? `http://www.omdbapi.com/?s=${searchText}&apikey=dc89d505` : 'https://search.imdbot.workers.dev/?q='

    const response = await fetch(URL);

    const data = await response.json();


    const searchData = searchText && data.Search?.map((item) => {
      return {
        "#TITLE": item["Title"],
        "#YEAR": item["Year"],
        "#IMG_POSTER": item["Poster"],
        "#ACTORS": item["Actors"]
      }
    })
    searchText ? setVideoData(searchData) : setVideoData(data.description);

  }

  useEffect(() => {
    const getData = setTimeout(() => {
      handleDataFetch();
    }, 500);
  }, [searchText])

  console.log("search text::", searchText);
  return (
    <div >
      <TextField
        label="Search input"
        onChange={(e) => handleSearchText(e)}
        value={searchText}
      />
      <Grid container spacing={2}>
        {videoData?.map((video, index) => {
          return <Grid item xs={3} key={index}>
            <VideoCard url={video["#IMG_POSTER"]} name={video["#TITLE"]} category={video["#ACTORS"]} date={video["#YEAR"]} />

          </Grid>
        })}
      </Grid>
    </div>

  );
}

export default App;
