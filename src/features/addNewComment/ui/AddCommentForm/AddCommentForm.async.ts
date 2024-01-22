import { FC, lazy } from 'react'
import { AddCommentFormProps } from './AddCommentForm'
const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  () =>
    new Promise((res) => {
      //@ts-ignore
      setTimeout(() => res(import('./AddCommentForm')), 1000)
    }),
)
export default AddCommentFormAsync
