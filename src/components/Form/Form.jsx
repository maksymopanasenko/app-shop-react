import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Form.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { closeModalsAC } from '../../store/reducers/modal.reducer';
import { clearCartAC } from '../../store/reducers/items.reducer';

const CheckoutForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        surname: '',
        age: '',
        adress: '',
        phone: ''
    }

    const handleSubmit = (values, {setSubmitting}) => {

        setTimeout(() => {
            console.log(values);
            setSubmitting(false);
            dispatch(clearCartAC());
            dispatch(closeModalsAC());
        }, 500);
    }

    return ( 
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({isSubmitting}) => (
                <Form className='form'>
                    <Field type="text" name="name" placeholder="Name"/>
                    <ErrorMessage name="name" component="div" />
                    <Field type="text" name="surname" placeholder="Surname"/>
                    <ErrorMessage name="surname" component="div" />
                    <Field type="number" name="age" placeholder="Age"/>
                    <ErrorMessage name="age" component="div" />
                    <Field type="text" name="adress" placeholder="Adress"/>
                    <ErrorMessage name="adress" component="div" />
                    <Field type="tel" name="phone" placeholder="Phone number"/>
                    <ErrorMessage name="phone" component="div" />

                    <input type="submit" value="Checkout" disabled={isSubmitting}/>
                </Form>
            )}
        </Formik>
    );
}
 
export default CheckoutForm;