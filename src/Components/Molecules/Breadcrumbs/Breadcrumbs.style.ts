import styled from 'styled-components'

export const Breadcrumb = styled.div`
  display: flex;
  place-content: space-between;

  position: sticky;
  right: 0;
  top: 0;
  z-index: 2;

  padding: 16px;

  background-color: var(--background1);

  > p {
    display: flex;
    gap: 12px;

    > a:hover {
      text-decoration: underline;
    }
  }
`

export const BreadcrumbList = styled.div`
  display: flex;
  gap: 12px;

  > p > a:hover {
    text-decoration: underline;
  }
`

export const Spacer = styled.span`
  &:before {
    content: '>';
  }
`
