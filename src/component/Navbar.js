import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const menuList = [
    'Women',
    'Men',
    'Baby',
    'Kids',
  ];
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  }
  const search = (event) => {
    if(event.key === "Enter") {
      console.log('tyrtyrty')
      //입력한 검색어를 읽어와서
      let keyword = event.target.value;

      // url을 바꿔준다.
      navigate(`/?q=${keyword}`);
    }
  }

  return (
    <div>
      <div className='login-button'>
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        <div onClick={goToLogin}>로그인</div>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </div>
      <div className='search-area'>
        <div className='search'>
          <input type='text' onKeyDown={search}></input>

          <FontAwesomeIcon icon={faSearch}>
          </FontAwesomeIcon>
        </div>
      </div>
    </div>
  )
}

export default Navbar

