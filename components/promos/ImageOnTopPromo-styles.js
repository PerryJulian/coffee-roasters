import styled from 'styled-components'
import breakpoints from '@breakpoints'


export const Description = styled.p`
    font-family: Barlow;
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin-top: 24px;

    color: ${({ theme }) => theme.textColors.dark};
`

export const ImageOnTopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    ${props => props.mobileImage ? props.mobileImage : ''}
    align-items: center;

    &:not(:first-of-type) {
        margin-top: 56px;
    }

    @media ${breakpoints.device.md} {
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

`

export const Title = styled.h2`
    margin-top: 24px;
    font-family: Fraunces;
    font-size: 2.8rem;

    color: ${({ theme }) => theme.textColors.dark};

    @media ${breakpoints.device.lg} {
        max-width: 255px;
    }
`

export const Date = styled.div`
`

export const ContactField = styled.div`
    font-size: 2.6rem;
`