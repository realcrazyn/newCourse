import { Mods, classNames } from 'shared/lib/classNames/classNames'

import cls from './Select.module.scss'
import { ChangeEvent, memo, useMemo } from 'react'

export interface SelectOption<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: SelectOption<T>[]
  value?: T
  onChange?: (value: T) => void
  readOnly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
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
    onChange?.(e.target.value as T)
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
}
