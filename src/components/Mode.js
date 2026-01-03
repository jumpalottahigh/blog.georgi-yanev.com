import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
`

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #333; /* Dark background when ON */
  }

  &:focus + span {
    box-shadow: 0 0 1px #333;
  }

  &:checked + span:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
  }
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;

  /* Only animate when the component has mounted to prevent initial slide */
  &.animate {
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  &.animate:before {
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  &:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    z-index: 2;
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  z-index: 1;
  font-size: 12px;
`

const Mode = () => {
  const { darkMode, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ToggleWrapper>
      <ToggleLabel>
        <ToggleInput
          type="checkbox"
          checked={darkMode}
          onChange={toggleTheme}
          aria-label="Dark/Light Mode Toggle Switch"
        />
        <Slider className={mounted ? 'animate' : ''}>
          <IconWrapper>
            <span role="img" aria-label="moon">
              🌙
            </span>
          </IconWrapper>
          <IconWrapper>
            <span role="img" aria-label="sun">
              ☀️
            </span>
          </IconWrapper>
        </Slider>
      </ToggleLabel>
    </ToggleWrapper>
  )
}

export default Mode
