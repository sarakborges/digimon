import styled from 'styled-components'

export const NoInfo = styled.div`
  display: flex;
  flex-flow: column;

  padding: 24px;

  > details {
    > summary > p {
      display: flex;
      gap: 4px;

      &:before {
        content: '+';

        display: flex;
        place-content: center;
        place-items: center;

        width: 16px;
      }
    }

    &[open] {
      > summary > p {
        display: flex;
        gap: 4px;

        &:before {
          content: '-';

          display: flex;
          place-content: center;
          place-items: center;

          width: 16px;
        }
      }
    }

    > summary {
      list-style-type: none;
    }

    &:not(:first-child) > summary {
      padding-top: 16px;
    }

    &:not(:last-child) > div {
      padding-bottom: 44px;
    }
  }
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
