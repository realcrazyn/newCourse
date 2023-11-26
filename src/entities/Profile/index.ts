import { ProfileSchema, Profile } from './model/types/profile'
import { profileActions, profileReducer } from './model/slice/profileSlice'
import { fetchProfileData } from './model/services/fetchFileData/fetchFileData'
import { ProfileCard } from './ui/ProfileCard/ProfileCard'

export {
  ProfileSchema,
  Profile,
  profileActions,
  profileReducer,
  fetchProfileData,
  ProfileCard,
}
