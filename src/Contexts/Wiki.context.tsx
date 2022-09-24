import { DigimonProps, DigimonsListProps } from '@/Utils/Props'
import { Dispatch, createContext, useState, FC, ReactNode } from 'react'

const INITIAL_STATE = {
  digimonId: null,
  digimonInfo: null,
  digimonList: null
}

type WikiProps = {
  digimonId: string | null
  digimonInfo: DigimonProps | null
  digimonList: DigimonsListProps | null
}

export const WikiContext = createContext<{
  wikiState: WikiProps
  setWikiState: Dispatch<any> | null
}>({
  wikiState: { ...INITIAL_STATE },
  setWikiState: null
})

export const WikiProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const [wikiState, setWikiState] = useState<WikiProps>({
    ...INITIAL_STATE
  })

  return (
    <WikiContext.Provider value={{ wikiState, setWikiState }}>
      <>{children}</>
    </WikiContext.Provider>
  )
}
