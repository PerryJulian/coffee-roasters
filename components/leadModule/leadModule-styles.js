import styled from 'styled-components'
import { BodyCopy, TitleOne } from '@typography'
import breakpoints from '@breakpoints'

export const LeadModuleContainer = styled.section`
    background-size: cover;
    border-radius: 10px;
    padding: 100px 25px;
    text-align: center;

    background-image: url(${props => props.mobileImage ? props.mobileImage : ''});
    color: ${({ theme }) => theme.textColors.light};

    @media ${breakpoints.device.md} {
        padding-left: 60px;

        background-image: url(${props => props.tabletImage ? props.tabletImage : ''});
    }    

    @media ${breakpoints.device.lg} {
        padding: 120px 85px;

        background-image: url(${props => props.desktopImage ? props.desktopImage : ''})
    }
`

export const LeadModuleContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    @media ${breakpoints.device.md} {
        max-width: 398px;
        align-items: flex-start;
        text-align: left;
    }

    @media ${breakpoints.device.lg} {
        max-width: 493px;
    }
`

export const Title = styled.h1`
    ${TitleOne}
`

export const Description = styled.p`
    ${BodyCopy}
    font-weight: 400;
    margin-top: 25px;

    @media ${breakpoints.device.lg} {
        max-width: 445px;
    }
`

export const Cta = styled.div`
    margin-top: 40px;
    max-width: 217px;
    width: 100%;
`