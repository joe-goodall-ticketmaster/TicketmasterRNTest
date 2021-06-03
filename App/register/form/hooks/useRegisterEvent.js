import { useState } from 'react';
import { useFormik } from 'formik';
import { configureYup, pesistElements } from './functions';

const useRegisterEvent = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      mobileNumber: '',
    },
    validationSchema: configureYup(),
    onSubmit: async values => {
      setLoading(true);
      const status = await pesistElements({
        emailAddress: values.email,
        mobileNumber: values.mobileNumber,
      });
      status && setLoading(false);
      formik.handleReset();
    },
  });

  return { formik, loading };
};
export default useRegisterEvent;
