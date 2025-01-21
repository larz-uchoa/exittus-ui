import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const ButtonsContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    column-gap: 20px;
`;

export const MessageContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});