import { FC, useContext } from 'react'
import { Link } from 'react-router-dom'

import { WikiContext } from '@/Contexts'

import { WIKI_BACK_SECTION, WIKI_BREADCRUMBS } from '@/Utils/Texts'

import { TextAtom } from '@/Components/Atoms'

import * as Styled from './WikiBreadcrumbs.style'

export const WikiBreadcrumbsMolecule: FC = () => {
  const {
    wikiState: { digimonId, digimonInfo }
  } = useContext(WikiContext)

  return (
    <Styled.Breadcrumb>
      <Styled.BreadcrumbList>
        <TextAtom fw={300}>
          <Link to={WIKI_BREADCRUMBS.HOME.LINK}>
            {WIKI_BREADCRUMBS.HOME.TEXT}
          </Link>
        </TextAtom>

        <Styled.Spacer />

        <TextAtom fw={300}>
          <Link to={WIKI_BREADCRUMBS.WIKI.LINK}>
            {WIKI_BREADCRUMBS.WIKI.TEXT}
          </Link>
        </TextAtom>

        {digimonId && digimonInfo && (
          <>
            <Styled.Spacer />

            <TextAtom fw={500}>
              <span>{digimonInfo.name}</span>
            </TextAtom>
          </>
        )}
      </Styled.BreadcrumbList>

      {digimonInfo && (
        <TextAtom fw={300}>
          <Link to={WIKI_BACK_SECTION.LINK}>{WIKI_BACK_SECTION.TEXT}</Link>
        </TextAtom>
      )}
    </Styled.Breadcrumb>
  )
}
