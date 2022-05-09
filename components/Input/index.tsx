import React from 'react'

type InputProps = {
  id: string,
  type: string,
  label: string,
  placeholder: string,
  onChange: React.Dispatch<React.SetStateAction<string>>
  value: string,
  required: boolean,
  minValue?: number,
}

export const Input = ({
  id,
  type,
  label,
  placeholder,
  onChange,
  value,
  required,
  minValue
}: InputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        type={type}
        min={minValue}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        required={required}
      />
    </div>
  )
}

export default Input
