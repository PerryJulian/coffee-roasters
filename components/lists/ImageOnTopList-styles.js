import styled from 'styled-components'
import { TitleFour } from '@typography'
import breakpoints from '@breakpoints'
import { getDarkBlue } from '@/components/styles/utils/colors'

export const Cta = styled.div`
    margin-top: 80px;
    max-width: 217px;
    width: 100%;

    @media ${breakpoints.device.md} {
        margin-top: 44px;
    }
`

export const ImageOnTopListWrapper = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 120px ${props => props.darkBackground ? '-25px' : '0'};
    background-color: ${props => props.darkBackground && getDarkBlue};
    ${props => props.darkBackground && 'border-radius:  10px;'}
    ${props => props.darkBackground && 'padding: 0 24px;'}

    @media ${breakpoints.device.md} {
        align-items: unset;
        margin: 144px ${props => props.darkBackground ? '-40px' : '0'};
        ${props => props.darkBackground && 'padding: 90px 40px 70px;'}
    }

    @media ${breakpoints.device.lg} {
        margin: 144px 0;
        ${props => props.darkBackground && 'padding: 100px 85px;'}
    }
`

export const ItemsWrapper = styled.div`
    margin-top: 80px;

    @media ${breakpoints.device.md} {
        align-items: unset;
        display: flex;
        flex-direction: row;
        margin-top: ${props => props.darkBackground ? '0' : '55px'};
    }
    @media ${breakpoints.device.lg} {
        margin-top: ${props => props.darkBackground ? '0' : '95px'};
    }
`

export const Title = styled.h2`
    ${TitleFour}

    font-family: Fraunces;
    margin: 0;

    color: ${({ theme }) => theme.textColors.medium};
`