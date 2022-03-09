import { css } from 'styled-components'
import breakpoints from './breakpoints'

export const HeadingOne = css`
    font-size: 15.0rem;
    line-height: 72px;
`

export const NavigationOne = css`
    font-size: 1.2rem;
    line-height: 15px;
`
 export const TitleOne = css`
    font-family: Fraunces;
    font-size: 4.0rem;
    font-weight: 900;
    line-height: 40px;

    @media ${breakpoints.device.md} {
        font-size: 4.8rem;
        line-height: 48px;
    }

    @media ${breakpoints.device.lg} {
        font-size: 7.2rem;
        line-height: 72px;
    }
`

export const TitleTwo = css`
    font-size: 4.0rem;
    line-height: 48px;
`

export const TitleThree = css`
    font-size: 3.2rem;
    line-height: 36px;
`

export const TitleFour = css`
    font-size: 2.4rem;
    line-height: 32px;
`

export const BodyCopy = css`
    font-size: 1.5rem;
    line-height: 25px;

    @media ${breakpoints.device.md} {

    }

    @media ${breakpoints.device.lg} {
        font-size: 1.6rem;
        line-height: 26px;
    }
`
