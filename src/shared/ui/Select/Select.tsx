import { Mods, classNames } from 'shared/lib/classNames/classNames'

import cls from './Select.module.scss'
import { ChangeEvent, memo, useMemo } from 'react'

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readOnly?: boolean
}

export const Select = memo((props: SelectProps) => {
  const { className, label, onChange, options, value, readOnly } = props

  const optionList = useMemo(() => {
    return options?.map((opt) => (
      <option className={cls.option} value={opt.value} key={opt.value}>
        {opt.content}
      </option>
    ))
  }, [options])

  const mods: Mods = {
    [cls.readOnly]: readOnly,
  }

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}{' '}
      <select
        disabled={readOnly}
        value={value}
        onChange={onChangeHandler}
        className={cls.select}
      >
        {optionList}
      </select>
    </div>
  )
})
