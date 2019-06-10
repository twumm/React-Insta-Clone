import React from 'react'
import PropTypes from 'prop-types'
import instagramTextLogo from '../../assets/img/instagram-text-logo.png'
import instagramLogo from '../../assets/img/instagram.svg'
import compass from '../../assets/img/compass.svg'
import like from '../../assets/img/heart.svg'
import profile from '../../assets/img/profile.svg'
import styled from 'styled-components'

const SearchBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const LogoHeader = styled.div`
  display: flex;
  align-items: center;

  .logo-bar {
  background-color: black;
  height: 30px;
  margin: 0 16px;
  width: 1px;
}
`;

const SearchInputDiv = styled.div`
  input {
    width: 200px;
    background-color: #FAFAFA;
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    height: 25px;
  }

  input::placeholder {
    text-align: center;
    color: #999999;
    letter-spacing: 1px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const UserActivityDiv = styled.div`
  display: flex;

  img {
    padding-left: 30px;
    border: 2px;
  }
`;

const SearchBar = ({ searchQuery, searchInputChangeHandler }) => {
  return (
    <SearchBarDiv>
      <LogoHeader>
        <div>
          <img src={instagramLogo} width={28} alt="Instagram" />
        </div>
        <div className="logo-bar"></div>
        <div>
          <img src={instagramTextLogo} width={120} alt="Instagram" />
        </div>
      </LogoHeader>

      <SearchInputDiv>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={searchInputChangeHandler}
        />
      </SearchInputDiv>

      <UserActivityDiv>
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
      </UserActivityDiv>
    </SearchBarDiv>
  )
}

SearchBar.propTypes = {
  onSearchInputChange: PropTypes.func
}

export default SearchBar
