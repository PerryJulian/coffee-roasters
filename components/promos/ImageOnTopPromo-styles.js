import styled from 'styled-components'
import breakpoints from '@breakpoints'
import { getDarkTextColor } from '@/components/styles/utils/colors'

export const Description = styled.p`
    font-family: Barlow;
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin-top: 24px;

    color: ${props => props.darkBackground ? '#FFFFFF': getDarkTextColor};

    @media ${breakpoints.device.lg} {
        font-size: 1.6rem;
    }
`

export const ImageOnTopWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;

    &:not(:first-of-type) {
        margin-top: 56px;
    }

    @media ${breakpoints.device.md} {
        align-items: unset;
        text-align: left;

        &:not(:first-of-type) {
            margin-top: 0;
        }

        &:not(:last-of-type) {
            margin-right: 20px;
        }
    }

    @media ${breakpoints.device.lg} {
        max-width: 285px;

        &:not(:last-of-type) {
            margin-right: 95px;
        }
    }
`
export const Index = styled.div`
    line-height: 7.2rem;
    font-family: Fraunces;
    font-size: 7.2rem;
    
    color: ${({ theme }) => theme.textColors.offWhite};
`

export const Media = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    margin-bottom: 26px;

`

export const Title = styled.h4`
    margin-top: 24px;
    font-family: Fraunces;
    font-size: 2.8rem;

    color: ${props => props.darkBackground ? '#FFFFFF': getDarkTextColor};

    @media ${breakpoints.device.md} {
        min-height: 84px;
    }

    @media ${breakpoints.device.lg} {
        max-width: 255px;
    }
`

export const Date = styled.div`
`

export const ContactField = styled.div`
    font-size: 1.6rem;
    line-height: 26px;

    @media ${breakpoints.device.md} {
        font-size: 1.6rem;
    }
`