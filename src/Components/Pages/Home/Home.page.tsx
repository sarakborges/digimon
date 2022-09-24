import { FC, useContext, useEffect } from 'react'

import { WikiContext } from '@/Contexts'

import { HomeTemplate } from '@/Components/Templates'

export const HomePage: FC = () => {
  const { wikiState, setWikiState } = useContext(WikiContext)

  useEffect(() => {
    setWikiState!({
      ...wikiState,

      digimonId: null,
      digimonInfo: null
    })
  }, [])

  return <HomeTemplate />
}
