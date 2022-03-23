import styled from 'styled-components'
import { NavigationOne } from '@typography'
import breakpoints from '@breakpoints'

export const HeaderContainer = styled.header`
    margin: auto;
    max-width: 1280px;
`

export const LogoContainer = styled.div`
    cursor: pointer;
    height: 18px;
    position: relative;
    width: 163px;

    @media ${breakpoints.device.md} {
        height: 26px;
        width: 236px;
    }
`

export const MenuButton = styled.button`
    border: 0;
    height: 15px;
    padding: 0;
    position: relative;
    width: 16px;

    @media ${breakpoints.device.md} {
        display: none;
    }
`

export const NavContainer = styled.nav`
    background-color: ${({ theme }) => theme.colors.cream};
    display: flex;
    justify-content: space-between;
    padding: 32px 24px;
    position: relative;
    z-index: initial;

    @media ${breakpoints.device.md} {
        padding: 40px 40px 30px;
    }

    @media ${breakpoints.device.lg} {
        padding: 40px 0 25px; 
    }
`

export const NavWrapper = styled.div`
    position: relative;
    z-index: 10;
`

export const NavItem = styled.li`
    color: ${({ theme }) => theme.textColors.dark};
    font-family: Fraunces;
    font-size: 2.4rem;
    font-weight: 900;
    line-height: 32px;
    margin-top: 40px;
    text-align: center;

    @media ${breakpoints.device.md} {
        ${NavigationOne}
        color: ${({ theme }) => theme.textColors.medium};
        font-family: Barlow;
        font-weight: 700;
        margin-top: 0;
        text-transform: uppercase;
        
        &:not(:first-of-type) {
            margin-left: 30px;
        }

        &:hover {
            color: ${({ theme }) => theme.textColors.dark};
        }
    }
`

export const NavList = styled.ul`
    background: linear-gradient(180deg, rgba(254, 252, 247, 1) 40%, rgba(254, 252, 247, 55.94%) 100%);
    height: calc(100vh - 82px);
    left: 0;
    margin: 50px 0 0;
    position: absolute;
    top: ${props => props.menuOpen ? '0' : '-100vh'};
    transition: top .5s ease-in;
    width: 100%;
    z-index: -1;

    @media ${breakpoints.device.md} {
        align-items: center;
        display: flex;
        height: unset;
        margin: 0;
        position: relative;
        top: unset;
        transition: 0;
        width: auto;
        z-index: unset;
    }
`