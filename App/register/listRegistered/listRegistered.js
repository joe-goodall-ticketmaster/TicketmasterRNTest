import React from 'react';
import {
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';

import { userIco } from '../../utils/srcImages';

const RegisteredUserScreen = () => {
  return (
    <Content>
      <List>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{ uri: userIco }} />
          </Left>
          <Body>
            <Text>Sankhadeep</Text>
            <Text note numberOfLines={1}>
              Its time to build a difference . .
            </Text>
          </Body>
          <Right>
            <Button transparent>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
      </List>
    </Content>
  );
};
export default RegisteredUserScreen;
