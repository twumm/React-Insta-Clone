import React from 'react'
import PropTypes from 'prop-types'
import instagramTextLogo from '../../assets/img/instagram-text-logo.png'
import instagramLogo from '../../assets/img/instagram.svg'
import compass from '../../assets/img/compass.svg'
import like from '../../assets/img/heart.svg'
import profile from '../../assets/img/profile.svg'
import './SearchBar.css'

const SearchBar = ({ searchQuery, searchInputChangeHandler }) => {
  return (
    <div className="search-bar">
      <div className="logo-section">
        <div>
          <img src={instagramLogo} width={28} alt="Instagram" />
        </div>
        <div className="logo-bar"></div>
        <div>
          <img src={instagramTextLogo} width={120} alt="Instagram" />
        </div>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={searchInputChangeHandler}
        />
      </div>

      <div className="user-activity-section">
        <div>
          <img src={compass} width={25} alt="Location" />
          {/* <object type="image/svg+xml" width={25} data={compass} alt="Location">Some</object> */}
        </div>
        <div>
          <img src={like} width={25} alt="Like" />
        </div>
        <div>
          <img src={profile} width={25} alt="Profile" />
        </div>        
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  onSearchInputChange: PropTypes.func
}

export default SearchBar
