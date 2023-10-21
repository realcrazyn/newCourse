import { Button } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

//Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false)

  const { t } = useTranslation()

  const throwErr = () => setError(true)

  useEffect(() => {
    if (error) throw new Error('Test error')
  }, [error])

  return <Button onClick={throwErr}>{t('throw_error')}</Button>
}
