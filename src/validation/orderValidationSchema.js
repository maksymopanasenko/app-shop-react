import * as Yup from 'yup';

const orderValidationSchema = () => {
    return Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too short...')
            .max(20, 'Too long... Max. 20 symbols')
            .matches(/^[A-Za-z -]+$/, 'Invalid first name')
            .required('Field is required'),
        surname: Yup.string()
            .min(2, 'Too short...')
            .max(20, 'Too long... Max. 20 symbols')
            .matches(/^[A-Za-z -]+$/, 'Invalid last name')
            .required('Field is required'),
        age: Yup.number()
            .min(16, 'You must be at least 16 years')
            .max(100, 'You must be less than 100 years')
            .integer('Age must be a whole number')
            .required('Field is required'),
        address: Yup.string()
            .min(5, 'Address should contain min. 5 symbols')
            .max(30, 'Address should contain max. 30 symbols')
            .required('Field is required'),
        phone: Yup.string()
            .matches(/^[0-9]{9,}$/, 'Invalid phone number')
            .required('This field is required'),
    })
}
 
export default orderValidationSchema;