import React from 'react';
import './App.css';
import styled from 'styled-components';
import { ImageComponent } from './components/MyImage.styled';
import picture from './assets/img/desrt.jpg'
import { HeaderText } from './components/Headline.styled';
import { Description } from './components/Description.styled';
import { StyledBtn } from './components/StyledBtn.styled';
import { colorsTheme } from './styles/Theme.styled';


function App() {
  return (
    <div className="App">
        <Rectangle>
            <ImageComponent src={picture} alt='desert image'/>
            <TextButtonWrap>
                <HeaderText>Headline</HeaderText>
                <Description color={colorsTheme.colors.grey}>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Description>
                <ButtonWrap>
                    <StyledBtn primary color={colorsTheme.colors.primary}>
                        See more
                    </StyledBtn>
                    <StyledBtn outlined color={colorsTheme.colors.primary}>
                        Save
                    </StyledBtn>
                </ButtonWrap>
            </TextButtonWrap>
        </Rectangle>
    </div>
  );
}

export default App;

const Rectangle = styled.div `
    height: 350px;
    width: 300px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    padding: 10px 10px 0px;
    gap: 20px;
    display: flex;
    flex-direction: column;
`
const ButtonWrap = styled.div `
    display: flex;
    gap: 12px;
`
const TextButtonWrap = styled.div `
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 0px 10px 0px;
`