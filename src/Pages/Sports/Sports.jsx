import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { searchLinks } from '../../tmdb/tmdbConfig'
import './sports.css'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';
import Loader from '../../components/Loader/Loader'

const Sports = () => {

  const [table, setTable] = useState(null);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "727145a6190b2293fc809e4181bed1c2");
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://v3.football.api-sports.io/standings?league=323&season=2024", requestOptions)
      .then(response => response.json())
      .then(result => setTable(result.response[0].league.standings[0]))
      .catch(error => console.log('error', error));

  }, [])

  return (
    <>
      <Navbar placeholder="Search movies, series,..." searchLink={searchLinks.searchAll} />
      { table ? <div className="table-wrapper">
        <h2 className='islHeading'>ISL Point Table</h2>
        <TableContainer component={Paper}>
          <Table aria-label="standings table">
            <TableHead>
              <TableRow>
                <TableCell style={{ textAlign: 'center' }}>Rank</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Team</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Points</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Goal Difference</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Form</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Overall (W-D-L)</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Goals For</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Goals Against</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Home (W-D-L)</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Away (W-D-L)</TableCell>
                <TableCell style={{ textAlign: 'center' }}>Last Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {table?.map((team, index) => (
                <TableRow key={index}>
                  <TableCell style={{ textAlign: 'center' }}>{team.rank}</TableCell>
                  <TableCell style={{ textAlign: 'center', display: "flex", alignItems: "center", gap: "5px" }}>
                    <Avatar src={team.team.logo} alt={team.team.name} />
                    {team.team.name}
                  </TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{team.points}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{team.goalsDiff}</TableCell>
                  <TableCell style={{ textAlign: 'left' }}>{team.form.split("").map((el, i)=>(
                    <span key={i} style={{color: `${el== "W" ? "green" : el == "L" ? "red" : "black"}`, marginRight: "5px"}}>{el}</span>
                  ))}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{`${team.all.win}-${team.all.draw}-${team.all.lose}`}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{team.all.goals.for}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{team.all.goals.against}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{`${team.home.win}-${team.home.draw}-${team.home.lose}`}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{`${team.away.win}-${team.away.draw}-${team.away.lose}`}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{new Date(team.update).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div> : <Loader />}
      <Footer />
    </>
  )
}

export default Sports