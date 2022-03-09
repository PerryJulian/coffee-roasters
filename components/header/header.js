import Image from 'next/image'
import Link from 'next/link'
import { LogoContainer, MenuButton, NavContainer, NavList, NavItem, NavWrapper, HeaderContainer } from './header-styles'
import Logo from 'assets/logo.svg'
import Hambuger from 'assets/icon-hamburger.svg'
import Close from 'assets/icon-close.svg'
import useToggle from 'hooks/useToggle'

export default function Header() {
    const [isMenuOpen, toggleMenu] = useToggle()

    return (
        <HeaderContainer>
            <NavWrapper>
                <NavContainer>
                    <Link href="/">
                        <LogoContainer>
                            <Image 
                                src={Logo}
                                layout='fill'
                            />
                        </LogoContainer>
                    </Link>
                    {isMenuOpen ? 
                        <MenuButton onClick={toggleMenu}>
                            <Image
                                src={Close}
                                layout='fill'
                            />
                        </MenuButton> 
                        : 
                        <MenuButton onClick={toggleMenu}>
                            <Image
                                src={Hambuger}
                                layout='fill'
                            />
                        </MenuButton>
                    }
                    <NavList menuOpen={isMenuOpen}>
                        <NavItem>
                            <Link href="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/about">About Us</Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/subscribe">Create Your Plan</Link>
                        </NavItem>
                    </NavList>
                </NavContainer>
            </NavWrapper>
        </HeaderContainer>
    )
}