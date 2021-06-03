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
      <Text style={styles.title}>Register Event</Text>
      <Grid item style={styles.fieldInput}>
        <Row style={styles.rowStyle}>
          <Col style={styles.colStyle}>
            <Item rounded style={styles.itemInput}>
              <Input
                value={values.email}
                onBlur={handleBlur('email')}
                placeholder={'Email'}
                name={'email'}
                keyboardType={'email-address'}
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
                keyboardType={'numeric'}
                onChangeText={handleChange('mobileNumber')}
              />
            </Item>
            {mobileNumberHasErrors && (
              <Text style={styles.errorText}>{errors.mobileNumber}</Text>
            )}
          </Col>
        </Row>

        <Row style={{ minHeight: 20 }}>
          {!loading && (
            <Button onPress={handleSubmit} style={styles.buttonStyle}>
              <Text>Send</Text>
            </Button>
          )}
          {loading && (
            <Item>
              <Spinner loading={true} />
            </Item>
          )}
        </Row>
      </Grid>
    </Content>
  );
};

export default RegisterEvent;
