import React from 'react';
import { Text, Item, Input, Button, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Spinner from '../../commons/Spinner';
import useRegisterEvent from './hooks/useRegisterEvent';
import styles from './styles';

const RegisterEvent = () => {
  const { formik, loading } = useRegisterEvent();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;

  const emailHasErrors = touched.email && errors.email;
  const mobileNumberHasErrors = touched.mobileNumber && errors.mobileNumber;
  return (
    <Content padder>
      <Grid item style={styles.fieldInput}>
        <Row style={styles.rowStyle}>
          <Col style={styles.colStyle}>
            <Item rounded style={styles.itemInput}>
              <Input
                value={values.email}
                onBlur={handleBlur('email')}
                placeholder={'Email'}
                name={'email'}
                onChangeText={handleChange('email')}
              />
            </Item>
            {emailHasErrors && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </Col>
          <Col style={styles.colStyle}>
            <Item rounded style={styles.itemInput}>
              <Input
                value={values.mobileNumber}
                onBlur={handleBlur('mobileNumber')}
                placeholder={'Mobile Number'}
                name={'mobileNumber'}
                onChangeText={handleChange('mobileNumber')}
              />
            </Item>
            {mobileNumberHasErrors && (
              <Text style={styles.errorText}>{errors.mobileNumber}</Text>
            )}
          </Col>
        </Row>

        <Row>
          <Button onPress={handleSubmit} style={styles.buttonStyle}>
            <Text>Get Tickets</Text>
          </Button>
          <Spinner loading={loading} />
        </Row>
      </Grid>
    </Content>
  );
};

export default RegisterEvent;