import { FC, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { DIGIMONS_ALL } from '@/Utils/Constants/Digimons'

import { WikiContext } from '@/Contexts'

import { WikiTemplate } from '@/Components/Templates'

export const WikiPage: FC = () => {
  const { id: digimonId } = useParams()
  const { wikiState, setWikiState } = useContext(WikiContext)

  const digimonInfo = DIGIMONS_ALL.list[0].subList.find(
    (item) => item.id === digimonId
  )

  useEffect(() => {
    setWikiState!({ ...wikiState, digimonId, digimonInfo: { ...digimonInfo } })
  }, [digimonId])

  return <WikiTemplate />
}
