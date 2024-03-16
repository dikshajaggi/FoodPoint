import * as Yup from 'yup';

export const paymentFormSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Street address is required'),
    address2: Yup.string(),
    city: Yup.string().required('City is required'),
    region: Yup.string().required('Region is required'),
    pincode: Yup.number().required('Pincode is required'),
    state: Yup.string().required('State is required'),
    contact: Yup.number().required('Contact number is required'),
});