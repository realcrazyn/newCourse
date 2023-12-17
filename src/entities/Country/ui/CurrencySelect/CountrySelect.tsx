import { Country } from 'entities/Country/model/types/country'
import { memo, useCallback } from 'react'

import { Select } from 'shared/ui/Select/Select'

interface CountrySelectProps {
  className?: string
  readonly?: boolean
  onChangeCountry?: (vale: Country) => void
  country?: Country
}

const options = [
  { content: Country.Russia, value: Country.Russia },
  { content: Country.Armenia, value: Country.Armenia },
  { content: Country.Bealrus, value: Country.Bealrus },
  { content: Country.Kazakhstan, value: Country.Kazakhstan },
  { content: Country.Ukraine, value: Country.Ukraine },
]

export const CountrySelect = memo(
  ({ className, readonly, country, onChangeCountry }: CountrySelectProps) => {
    const onChangeHandler = useCallback(
      (value: string) => {
        onChangeCountry?.(value as Country)
      },
      [onChangeCountry],
    )

    return (
      <Select
        className={className}
        readOnly={readonly}
        label="Укажите валюту"
        onChange={onChangeHandler}
        value={country}
        options={options}
      />
    )
  },
)
