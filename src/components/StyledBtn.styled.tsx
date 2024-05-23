import styled, { css } from "styled-components";

type StyledBtnPropsType = {
    color?: string
    primary?: boolean
    outlined?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType> `
    border-radius: 5px;
    /* background-color: ${props => props.color}; */
    width: 86px;
    height: 30px;
    border: none;
    /* color: rgb(255, 255, 255); */

    ${props => props.primary && css<StyledBtnPropsType> `
        background-color: ${props => props.color};
        color: white;
    `}

    ${props => props.outlined && css<StyledBtnPropsType> `
        border: 2px solid ${props => props.color};
        color: ${props => props.color};
        background-color: transparent;
    `}

`