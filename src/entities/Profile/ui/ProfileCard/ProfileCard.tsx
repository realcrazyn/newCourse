import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfileCard.module.scss'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation()
  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const loading = useSelector(getProfileLoading)
  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('profile_title')} />
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
          {t('profile_edit')}
        </Button>{' '}
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('profile_input_name')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('profile_input_lastname')}
          className={cls.input}
        />
      </div>
    </div>
  )
}
