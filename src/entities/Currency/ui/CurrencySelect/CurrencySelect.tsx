import { Currency } from 'entities/Currency/model/types/currency'
import { memo, useCallback } from 'react'

import { Select } from 'shared/ui/Select/Select'

interface CurrencySelectProps {
  className?: string
  readonly?: boolean
  onChangeCurrency?: (vale: Currency) => void
  currency?: Currency
}

const options = [
  { content: Currency.RUB, value: Currency.RUB },
  { content: Currency.USD, value: Currency.USD },
  { content: Currency.EUR, value: Currency.EUR },
]

export const CurrencySelect = memo(
  ({
    className,
    readonly,
    currency,
    onChangeCurrency,
  }: CurrencySelectProps) => {
    const onChangeHandler = useCallback(
      (value: string) => {
        onChangeCurrency?.(value as Currency)
      },
      [onChangeCurrency],
    )

    return (
      <Select
        className={className}
        readOnly={readonly}
        label="Укажите валюту"
        onChange={onChangeHandler}
        value={currency}
        options={options}
      />
    )
  },
)
