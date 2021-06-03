import React, { Component } from 'react';
import { Image } from 'react-native';
import { lumineers1, lumineers2 } from '../utils/srcImages';
import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,

} from 'native-base';
import { StyleSheet, ScrollView } from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import RegisterEvent from '../register/form/registerEvent';
export default class CardImageExample extends Component {
  render() {
    return (
      <ScrollView>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: lumineers2 }} />
                <Body>
                  <Text>The Lumineers</Text>
                  <Text note>Feb 24 2022</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: lumineers1 }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Grid>
                <Row style={styles.rowStyle}>
                  <Col style={styles.colStyle}>
                    <Button light style={styles.buttonStyle}>
                      <Icon active name={'notifications'} type={'Ionicons'} />
                    </Button>
                  </Col>
                  <Col style={styles.colStyle}>
                    <Button light style={styles.buttonStyle}>
                      <Icon active name={'images'} type={'Ionicons'} />
                    </Button>
                  </Col>
                  <Col style={styles.colStyle}>
                    <Button light style={styles.buttonStyle}>
                      <Icon active name={'logo-youtube'} type={'Ionicons'} />
                    </Button>
                  </Col>
                  <Col style={styles.colStyle}>
                    <Button light style={styles.buttonStyle}>
                      <Icon active name={'calendar'} type={'Ionicons'} />
                    </Button>
                  </Col>
                </Row>
              </Grid>
            </CardItem>
            <CardItem header bordered>
              <Text style={styles.title}>Description</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  In 2011, The Lumineers self-recorded an eponymous EP as well
                  as self-booked a tour around the US to try to raise their
                  profile. However, it was the release of the single Ho Hey,
                  first featured on an episode of the TV show Hart Of Dixie in
                  December, that drew in fans of all ages.
                </Text>
              </Body>
            </CardItem>
            <RegisterEvent />
          </Card>
        </Content>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
  },
  rowStyle: {
    height: 50,
    padding: 2,
    alignSelf: 'center',
  },
  colStyle: {
    width: 70,
  },
  title: {
    color: 'orange',
  },
});
