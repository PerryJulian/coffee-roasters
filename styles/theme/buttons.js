import styled, { css } from 'styled-components'

const ButtonAbstract = css`
    border: 0;
    border-radius: 6px;
    color: ${({ theme }) => theme.textColors.light};
    font-family: Fraunces;
    font-size: 1.8rem;
    font-weight: 900;
    line-height: 25px;
    padding: 15px 0;
    white-space: nowrap;
    width: 100%;
`

export const ButtonPrimary = styled.button`
    ${ButtonAbstract}
    background-color: ${({ theme }) => theme.colors.primary};

    &:hover {
        background-color: #66d2cf;
    }
`