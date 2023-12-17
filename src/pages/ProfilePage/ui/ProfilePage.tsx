import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import {
  ProfileCard,
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileReadonly,
  profileActions,
  profileReducer,
} from 'entities/Profile'
import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DunamicModuleLoader/DynamicModuleLoader'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

const reducers: ReducersList = {
  profile: profileReducer,
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation()

  const form = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const loading = useSelector(getProfileLoading)
  const readonly = useSelector(getProfileReadonly)

  const dispatch = useAppDispatch()

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || '' }))
    },
    [dispatch],
  )
  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }))
    },
    [dispatch],
  )
  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
    },
    [dispatch],
  )
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }))
    },
    [dispatch],
  )
  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }))
    },
    [dispatch],
  )
  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }))
    },
    [dispatch],
  )
  const onChangeCurrency = useCallback(
    (value?: Currency) => {
      dispatch(
        profileActions.updateProfile({ currency: value || Currency.RUB }),
      )
    },
    [dispatch],
  )
  const onChangeCountry = useCallback(
    (value?: Country) => {
      dispatch(
        profileActions.updateProfile({ country: value || Country.Russia }),
      )
    },
    [dispatch],
  )

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        {' '}
        <ProfilePageHeader />
        <ProfileCard
          readonly={readonly}
          onChangeLastname={onChangeLastname}
          onChangeFirstname={onChangeFirstname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          data={form}
          isLoading={loading}
          error={error}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
