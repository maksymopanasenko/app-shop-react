import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalsAC } from '../../store/reducers/modal.reducer';
import { clearCartAC } from '../../store/reducers/items.reducer';
import orderValidationSchema from '../../validation/orderValidationSchema';
import ButtonClose from '../ButtonClose/ButtonClose';
import { PatternFormat } from 'react-number-format';
import './Form.scss';

const CheckoutForm = () => {
    const items = useSelector(state => state.items.items);
    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        surname: '',
        age: '',
        address: '',
        phone: ''
    }

    const handleSubmit = (values, {setSubmitting}) => {
        
        console.log(values);
        console.log(items);

        setTimeout(() => {
            setSubmitting(false);
            
            localStorage.setItem('items', JSON.stringify([]))
            dispatch(clearCartAC());
            dispatch(closeModalsAC());
        }, 500);
    }

    const validationSchema = orderValidationSchema();

    return ( 
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {({isSubmitting}) => (
                <div className='form-wrapper'>
                    <ButtonClose />
                    <Form className='form'>
                        <h3 className='form-title'>Please provide delivery information</h3>
                        <div className="field-section">
                            <Field className="field" type="text" name="name" placeholder="Name"/>
                            <ErrorMessage className="error" name="name" component="div" />
                        </div>
                        <div className="field-section">
                            <Field className="field" type="text" name="surname" placeholder="Surname"/>
                            <ErrorMessage className="error" name="surname" component="div" />
                        </div>
                        <div className="field-section">
                            <Field className="field" type="number" name="age" placeholder="Age"/>
                            <ErrorMessage className="error" name="age" component="div" />
                        </div>
                        <div className="field-section">
                            <Field className="field" type="text" name="address" placeholder="Address"/>
                            <ErrorMessage className="error" name="address" component="div" />
                        </div>
                        <div className="field-section">
                            <Field className="field" name='phone'>
                                {({ field }) => (
                                    <PatternFormat {...field} className="field" format="+48 (###) #### ###" allowEmptyFormatting mask="_" />
                                )}
                            </Field>
                            <ErrorMessage className="error" name="phone" component="div" />
                        </div>

                        <input className='btn' type="submit" value="Checkout" disabled={isSubmitting}/>
                    </Form>
                </div>
            )}
        </Formik>
    );
}
 
export default CheckoutForm;