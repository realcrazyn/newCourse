import { ProfileSchema, Profile } from './model/types/profile'
import { profileActions, profileReducer } from './model/slice/profileSlice'
import { fetchProfileData } from './model/services/fetchFileData/fetchFileData'
import { ProfileCard } from './ui/ProfileCard/ProfileCard'

import { getProfileData } from './model/selectors/getProfileData/getProfileData'
import { getProfileError } from './model/selectors/getProfileError/getProfileError'
import { getProfileLoading } from './model/selectors/getProfileLoading/getProfileLoading'
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileForm } from './model/selectors/getProfileForm/getProfileData'
import { upadateProfileData } from './model/services/updateProfileData/updateProfileData'

export {
  ProfileSchema,
  Profile,
  profileActions,
  profileReducer,
  fetchProfileData,
  upadateProfileData,
  ProfileCard,
  getProfileData,
  getProfileError,
  getProfileLoading,
  getProfileReadonly,
  getProfileForm,
}
