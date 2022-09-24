import styled from 'styled-components'

export const Lists = styled.div`
  display: flex;
  flex-flow: column;
  gap: 36px;

  width: 1080px;
  max-width: 100%;

  > div:first-child {
    padding-top: 24px;
  }
`

export const DigimonsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  padding-top: 16px;
`

export const DigimonItem = styled.div`
  > p > a {
    display: flex;
    flex-flow: column;
    place-items: center;
    gap: 8px;

    width: 144px;
    padding: 12px 12px 8px;

    background-color: var(--background2);
    border-radius: 24px;

    transition: background-color 0.3s;

    > img {
      max-width: 100%;

      border-radius: 16px;
    }

    &:hover {
      background-color: var(--background3);
    }
  }
`
