import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import { Button, buttonClasses } from '@mui/base/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './NavBar.css'

// Custom button with SVG background
const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
    const { children, ...other } = props;
  
    return (
      <svg width="150" height="50" {...other} ref={ref}>
        <polygon points="0,50 0,0 150,0 150,50" className="bg" />
        <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
        <foreignObject x="0" y="0" width="150" height="50">
          <div className="content">{children}</div>
        </foreignObject>
      </svg>
    );
  });
  
  ButtonRoot.propTypes = {
    children: PropTypes.node,
  };
  
  // Custom styled button component
  const CustomButtonRoot = styled(ButtonRoot)(
    ({ theme }) => `
    overflow: visible;
    cursor: pointer;
    --main-color: ${theme.palette.mode === 'light' ? '#0072E6' : '#99CCF3'};
    --hover-color: ${theme.palette.mode === 'light' ? '#F0F7FF' : '#003A75'};
    --active-color: ${theme.palette.mode === 'light' ? '#C2E0FF' : '#004C99'};
  
    & polygon {
      fill: transparent;
      transition: all 800ms ease;
      pointer-events: none;
    }
  
    & .bg {
      stroke: var(--main-color);
      stroke-width: 1;
      filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.1));
      fill: transparent;
    }
  
    & .borderEffect {
      stroke: var(--main-color);
      stroke-width: 2;
      stroke-dasharray: 120 600;
      stroke-dashoffset: 120;
      fill: transparent;
    }
  
    &:hover,
    &.${buttonClasses.focusVisible} {
      .borderEffect {
        stroke-dashoffset: -600;
      }
  
      .bg {
        fill: var(--hover-color);
      }
    }
  
    &:focus,
    &.${buttonClasses.focusVisible} {
      outline: 2px solid ${theme.palette.mode === 'dark' ? '#0059B3' : '#99CCF3'};
      outline-offset: 2px;
    }
  
    &.${buttonClasses.active} {
      & .bg {
        fill: var(--active-color);
        transition: fill 150ms ease-out;
      }
    }
  
    & foreignObject {
      pointer-events: none;
  
      & .content {
        font-size: 0.875rem;
        font-family: 'Arial, sans-serif';
        font-weight: 600;
        line-height: 1.5;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--main-color);
      }
  
      & svg {
        margin: 0 4px;
      }
    }`,
  );
  
  // Custom button component
  const SvgButton = React.forwardRef(function SvgButton(props, ref) {
    return <Button {...props} slots={{ root: CustomButtonRoot }} ref={ref} />;
  });

const NavBar = () => {
  return (
    <AppBar position="fixed" style={{ backdropFilter: 'blur(8px)', backgroundColor: 'white' , borderRadius: '30px 30px' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography style={{ color: 'black', marginLeft: '40px' }} variant="h6" component="div">
        <Link color="inherit" to="/">My App</Link>
        </Typography>
        <div className="button-container">
          <div className="nav-links">
            <Link color="inherit" to="/">Home</Link>
            <Link color="inherit" to="/about">About</Link>
            <Link color="inherit" to="/contact">Contact</Link>
          </div>
          <div className="auth-buttons">
            <SvgButton to="/signin">
              <CustomButtonRoot>
                Sign In
                <AccountCircleIcon />
              </CustomButtonRoot>
            </SvgButton>
            <SvgButton to="/register">
              <CustomButtonRoot>
                Register
                <AccountCircleIcon />
              </CustomButtonRoot>
            </SvgButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
