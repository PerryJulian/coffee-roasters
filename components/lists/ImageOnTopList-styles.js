import styled from 'styled-components'
import { BodyCopy, TitleFour } from '@typography'
import breakpoints from '@breakpoints'

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
    /* background-color: ${({ theme }) => theme.colors.darkBlue}; */
    display: flex;
    flex-direction: column;
    margin: 120px ${props => props.fullWidth ? '-25px' : '0'};

    ${props => props.fullWidth ? 'border-radius:  10px;' : ''}
    ${props => props.darkBackground ? `background-color: ${({ theme }) => theme.colors.darkBlue};` : '' }

    @media ${breakpoints.device.md} {
        align-items: unset;
        margin-top: 144px;
    }
`

export const ItemsWrapper = styled.div`
    margin-top: 80px;

    @media ${breakpoints.device.md} {
        align-items: unset;
        display: flex;
        flex-direction: row;
        margin-top: 55px;
    }
    @media ${breakpoints.device.lg} {
        margin-top: 95px;
    }
`

export const Title = styled.h2`
    ${TitleFour}

    font-family: Fraunces;
    margin: 0;

    color: ${({ theme }) => theme.textColors.medium};
`