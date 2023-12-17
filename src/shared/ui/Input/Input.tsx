import { Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (v: string) => void
  autoFocus?: boolean
  readOnly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    placeholder,
    onChange,
    autoFocus,
    type = 'text',
    readOnly,
    ...otherProps
  } = props

  const ref = useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)

  const isCaretVisible = isFocused && !readOnly

  const onBlur = () => {
    setIsFocused(false)
  }
  const onFocus = () => {
    setIsFocused(true)
    ref.current?.focus()
  }
  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  useEffect(() => {
    if (autoFocus) {
      onFocus()
    }
  }, [autoFocus])

  const mods: Mods = {
    [cls.readOnly]: readOnly,
  }

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={cls.caretWrapper}>
        <input
          readOnly={readOnly}
          ref={ref}
          onFocus={onFocus}
          onBlur={onBlur}
          className={cls.input}
          type={type}
          onSelect={onSelect}
          value={value}
          onChange={onChangeHandler}
          {...otherProps}
        />
        {isCaretVisible && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  )
})
