import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'
import {logo} from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => (
        <Link to='/' style={{display: 'flex', alignItems:'center'}}>
            <img src={logo} alt='logo' height={45}/>
        </Link>
        <SearchBar />
  )

export default Navbar
