import React from 'react'
import PropTypes from 'prop-types'
import instagramTextLogo from '../../assets/img/instagram-text-logo.png'
import instagramLogo from '../../assets/img/instagram.svg'
import compass from '../../assets/img/compass.svg'
import like from '../../assets/img/heart.svg'
import profile from '../../assets/img/profile.svg'

const SearchBar = ({ onSearchInputChange }) => {
  return (
    <div className="search-bar">
      <div className="logo-section">
        <div>
          <img src={instagramLogo} width={50} alt="Instagram" />
        </div>
        <div>
          <img src={instagramTextLogo} width={150} alt="Instagram" />
        </div>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search"
          onChange={onSearchInputChange}
        />
      </div>

      <div className="user-activity-section">
        <img src={compass} width={30} alt="Location" />
        <img src={like} width={30} alt="Like" />
        <img src={profile} width={30} alt="Profile" />
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  onSearchInputChange: PropTypes.func
}

export default SearchBar
