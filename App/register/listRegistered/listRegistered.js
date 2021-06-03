import React from 'react';
import {
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
} from 'native-base';
import { RefreshControl } from 'react-native';
import Spinner from '../../commons/Spinner';
import { userIco } from '../../utils/srcImages';
import useListRegistered from './hooks/useListRegistered';
const RegisteredUserScreen = () => {
  const { loading, data, refreshing, onRefresh } = useListRegistered();
  return (
    <Content
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Spinner loading={loading} />
      {!loading && (
        <List>
          {data.map(fan => (
            <ListItem thumbnail key={fan.id}>
              <Left>
                <Thumbnail square source={{ uri: userIco }} />
              </Left>
              <Body>
                <Text>{fan.emailAddress}</Text>
                <Text note numberOfLines={1}>
                  {fan.mobileNumber}
                </Text>
              </Body>
            </ListItem>
          ))}
        </List>
      )}
    </Content>
  );
};
export default RegisteredUserScreen;
