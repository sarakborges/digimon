import styled from 'styled-components'

export const WikiTemplate = styled.div`
  display: flex;
  flex: 1;
`

export const MainContent = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;

  height: 100%;
`

export const NoInfo = styled.div`
  padding: 32px;
`

export const DigimonInfo = styled.div`
  display: flex;
  flex-flow: column;
  gap: 16px;

  width: 1080px;
  max-width: 100%;
  padding: 32px;

  > img {
    width: 300px;
    max-width: 100%;
    margin-bottom: 16px;

    border-radius: 24px;
  }

  > p {
    display: flex;
    place-items: center;
    gap: 8px;

    min-height: 32px;
    padding: 0 16px;

    > span {
      font-weight: 500;
    }
  }
`
