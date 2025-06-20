import React from 'react';
import styled from 'styled-components';

const Menu = () => {
  return (
    <StyledWrapper>
      <div className='border-solid border-2 border-[#ccc] rounded-[4px] w-[30px] h-[28px] flex items-center justify-center'>
        <input id="burger-checkbox" type="checkbox" />
        <label className="burger" htmlFor="burger-checkbox">
          <span />
          <span />
          <span />
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .burger {
    display: inline-block;
    cursor: pointer;
    z-index: 1000;
  }

  .burger span {
    display: block;
    width: 20px;
    height: 2px;
    background: #333;
    margin: 4px 0;
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.245, 1.55),
      opacity 0.3s ease;
  }

  #burger-checkbox {
    display: none;
  }

  #burger-checkbox:checked + .burger span:nth-child(1) {
    transform: translateY(4px) rotate(45deg);
  }

  #burger-checkbox:checked + .burger span:nth-child(2) {
    opacity: 0;
    transform: translateX(-20px);
  }

  #burger-checkbox:checked + .burger span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
`;

export default Menu;
