import * as yup from 'yup'

export const validationSchema = () =>
    yup.object().shape({
        search: yup
            .string()
            .required("Search input can't be empty")
            .matches(/^[A-Za-zА-Яа-я0-9\s]+$/, 'Search input should not use specific characters')
            .min(2, 'Search input length should be at least 2 characters')
            .max(20, 'Search input length should be no more than 20 characters'),
    })
