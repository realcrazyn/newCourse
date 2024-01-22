import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ProfilePageHeader.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  upadateProfileData,
} from 'entities/Profile'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from 'entities/User'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id
  const dispatch = useAppDispatch()

  const readOnly = useSelector(getProfileReadonly)

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])
  const onSave = useCallback(() => {
    dispatch(upadateProfileData())
  }, [dispatch])
  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('profile_title')} />
      {canEdit && (
        <div className={cls.btnWrapper}>
          {readOnly ? (
            <Button
              className={cls.editBtn}
              onClick={onEdit}
              theme={ButtonTheme.OUTLINE}
            >
              {t('profile_edit')}
            </Button>
          ) : (
            <>
              <Button
                className={cls.editBtn}
                onClick={onCancelEdit}
                theme={ButtonTheme.OUTLINE_RED}
              >
                {t('profile_edit_cancel')}
              </Button>
              <Button
                className={cls.saveBtn}
                onClick={onSave}
                theme={ButtonTheme.OUTLINE}
              >
                {t('profile_edit_save')}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
