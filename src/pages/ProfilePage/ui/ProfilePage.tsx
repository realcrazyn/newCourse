import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import {
  ProfileCard,
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileReadonly,
  getProfileValidateError,
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
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'

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
  const validateErrors = useSelector(getProfileValidateError)

  const validateErrorTranslate = {
    [ValidateProfileError.SERVER_ERROR]: 'Ошибка сервера',
    [ValidateProfileError.INCORRECT_AGE]: 'Некорректно указан возраст',
    [ValidateProfileError.INCORRECT_COUNTRY]: 'Неправильно задана страна',
    [ValidateProfileError.INCORRECT_USER_DATA]: 'Неправильные данные',
    [ValidateProfileError.NO_DATA]: 'Нет данных',
  }

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
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData())
    }
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        {' '}
        <ProfilePageHeader />
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              key={err}
              theme={TextTheme.ERROR}
              text={validateErrorTranslate[err]}
            />
          ))}
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
