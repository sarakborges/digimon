import styled from 'styled-components'

export const EvolutionDigimon = styled.div`
  > a {
    display: flex;
    gap: 16px;

    padding: 16px;

    border-radius: 24px;
    background-color: var(--background1);

    transition: background-color 0.3s;

    &:hover {
      background-color: var(--background3);
    }
  }
`

export const DigimonPortrait = styled.div`
  width: 168px;

  > img {
    max-width: 100%;

    border-radius: 12px;
  }

  > p {
    padding: 0;
  }
`

export const EvolutionInfo = styled.div`
  display: flex;
  gap: 24px;
  flex: 1;

  padding: 8px 0;
`

export const DigimonInfo = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;

  width: 300px;

  > p {
    display: flex;
    place-items: center;
    gap: 4px;

    min-height: 24px;

    > span {
      font-weight: 500;
    }

    &:first-child {
      padding-bottom: 8px;
    }
  }
`

export const DigimonAttributes = styled.div`
  display: flex;
  gap: 8px;

  > img {
    max-width: 24px;
  }
`

export const DigimonFamilies = styled.div`
  display: flex;
  gap: 4px;

  > img {
    max-width: 24px;
  }
`

export const EvolutionConditions = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;

  gap: 8px;

  > p {
    padding-bottom: 8px;
  }

  > div {
    display: flex;
    place-items: center;
    gap: 16px;
  }

  img {
    max-width: 28px;
  }
`

interface ProgressBarProps {
  maxValue: number
  currentValue: number
}
export const ProgressBar = styled.div<ProgressBarProps>`
  display: flex;
  place-items: center;
  place-content: center;

  width: 240px;
  height: 20px;
  padding: 4px;

  background-color: var(--progressBarBackground);
  border-radius: 8px;

  position: relative;

  > p {
    display: flex;
    place-items: center;
    place-content: center;

    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;

    width: 100%;
    height: 100%;
  }

  &:before {
    content: '';

    position: absolute;
    left: 2px;
    top: 2px;
    z-index: 1;

    width: ${({ maxValue, currentValue }) =>
      `calc((100% / ${maxValue} * ${currentValue}) - 4px)`};
    height: calc(100% - 4px);

    background-color: var(--progressBarInnerBackground);
    border-radius: 6px;
  }
`
