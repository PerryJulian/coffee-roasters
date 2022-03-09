import styled from 'styled-components'
import breakpoints from '@breakpoints'

export const TimelineWrapper = styled.ul`
    display: none;
    height: 2px;
    list-style: none;
    margin: 0 0 64px;

    background: ${({ theme }) => theme.colors.tertiary};

    ${props => props.lastItem ? 'background: none;' : 'width: calc(100% + 20px);'}

    @media ${breakpoints.device.lg} {
        width: calc(100% + 95px);
    }

    &:after {
        display: inline-block;
        content: "";
        width: 100%;
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
    left: -40px;
    position: relative;
    top: -15px;
    width: 30px;
    background: ${({ theme }) => theme.colors.cream};
    border: 1px solid ${({ theme }) => theme.colors.primary};
`