import { Counter } from 'entities/Counter'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Page } from 'widgets/Page/Page'

const MainPage = () => {
  const { t } = useTranslation('main')

  const [value, setValue] = useState('')

  return (
    <Page>
      {t('main')}

      <Input
        placeholder="Введите текст"
        value={value}
        onChange={(v) => setValue(v)}
      />
    </Page>
  )
}

export default MainPage
