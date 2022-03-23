import styled from 'styled-components'
import breakpoints from '@breakpoints'
import { getCreamColor, getPrimaryColor, getTertiaryColor } from '@/components/styles/utils/colors';

export const TimelineWrapper = styled.ul`
    display: none;
    height: 2px;
    list-style: none;
    margin: 0 0 64px 15px;
    background: ${getTertiaryColor};

    ${props => props.lastItem ? 'background: none;' : 'width: calc(100% + 20px);'}

    @media ${breakpoints.device.lg} {
        width: calc(100% + 95px);
    }

    @media ${breakpoints.device.md} {
        display: block;
        margin-bottom: 82px;
    }
`

export const TimelineItem = styled.li`
    border-radius: 50%;
    display: inline-block;
    height: 30px;
    left: -55px;
    position: relative;
    top: -15px;
    width: 30px;
    background: ${props => props.darkBackground ? 'transparent' : getCreamColor};
    border: 1px solid ${getPrimaryColor};
`