import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Button, ThemeContext} from 'react-native-elements';
import { Container, Header } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


const Transactions = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Container>
      <Grid>
        <Row size={1}>
          <Col style={s.grid1}><Text>1</Text></Col>
          <Col style={s.grid2}><Text>2</Text></Col>
          <Col style={s.grid3}><Text>3</Text></Col>
          <Col style={s.grid4}><Text>4</Text></Col>
        </Row>
        <Row size={2}>
          <Col>
            <Row style={s.grid5}><Text>12</Text></Row>
            <Row style={s.grid6}><Text>13</Text></Row>
          </Col>
          <Col style={s.grid1} size={2}><Text>2</Text></Col>
          <Col>
            <Row style={s.grid3}><Text>41</Text></Row>
            <Row style={s.grid4}><Text>42</Text></Row>
          </Col>
        </Row>
        <Row size={1}>
          <Col style={s.grid5}><Text>1</Text></Col>
          <Col style={s.grid6}><Text>2</Text></Col>
          <Col style={s.grid3}><Text>3</Text></Col>
          <Col style={s.grid2}><Text>4</Text></Col>
        </Row>
{/*        <Col style={s.grid1}>
          <Text>1</Text>
        </Col>
        <Col>
          <Row style={s.grid2}>
            <Text>2</Text>
          </Row>
          <Row style={s.grid3}>
            <Text>3</Text>
          </Row>
        </Col>*/}
      </Grid>

    </Container>
/*    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => console.log('pressed')}
      onLongPress={() => console.log('pressedLong')}
    >
      <View style={s.todo}>
        <Text>
          Transactions page
        </Text>
        <Button
          onPress={() => navigation.navigate('Home')}
          buttonStyle={theme.buttonMedium}
          title='Go Home'
        />
      </View>


    </TouchableOpacity>*/
  )
}

const s = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ed5315',
    borderRadius: 10,
    marginBottom: 5
  },
  grid1: {
    backgroundColor: 'red',
    color: 'red'
  },
  grid2: {
    backgroundColor: 'orange'
  },
  grid3: {
    backgroundColor: 'purple'
  },
  grid4: {
    backgroundColor: 'yellow'
  },
  grid5: {
    backgroundColor: 'lightblue'
  },
  grid6: {
    backgroundColor: 'lightgreen'
  }
});

export default Transactions;
