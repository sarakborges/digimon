import styled, { css } from 'styled-components'

const PrimaryButton = css`
  background-color: var(--primaryButtonBackground);
  border-radius: 4px;

  color: var(--primaryButtonText);

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 1px 8px var(--primaryButtonShadow);
  }
`

interface ButtonStyleProps {
  primary?: boolean
  secondary?: boolean
  round?: boolean
}
export const Button = styled.button<ButtonStyleProps>`
  display: flex;
  place-content: center;
  place-items: center;
  gap: 16px;

  padding: 8px;

  border: 0;
  border-radius: ${({ round }) => (round ? '50%' : '4px')};

  font-size: 12px;
  letter-spacing: inherit;

  cursor: pointer;

  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  ${({ primary, secondary }) => (primary || !secondary) && PrimaryButton}
`
