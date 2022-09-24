import styled from 'styled-components'

export const Sidebar = styled.div`
  background-color: var(--background2);
`

export const SidebarContent = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 12px;

  position: sticky;
  left: 0;
  top: 0;
  z-index: 3;

  width: 320px;
  min-height: 100vh;
  max-height: 100vh;
  padding: 24px;
  overflow: hidden;
  overflow-y: auto;
`
