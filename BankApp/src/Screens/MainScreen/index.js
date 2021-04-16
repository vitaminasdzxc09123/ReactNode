import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import Title from '../../../src/Components/Store/TitleStore';
import SubTitle from '../../../src/Components/Store/SubTitleStore';
import Discont from '../../Components/Store/DiscontStore';
import CardTitle from '../../Components/Cards/CardTitle/index';
import CardBlack from '../../Components/Cards/CardBlack';
import CardBlue from '../../Components/Cards/CardBlue';
import Clock from '../../Components/Clock';
import AddBank from '../../Components/AddBank';
import TextBank from '../../Components/TextBank';
import NumbersBank from '../../Components/NumbersBank';
import Left from '../../Components/Left';
import Right from '../../Components/Right';
import Feather from 'react-native-vector-icons/Feather';
import Like from '../../Components/Like';
import ExitStore from '../../Components/ExitSore';

const MainScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <TextBank />
        <Clock />
        <AddBank />
        <NumbersBank />
        <Text style={styles.TextAccaunt}>My accounts</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.container}>
            <Image
              style={styles.Image}
              source={require('../../Image/shop.jpg')}
            />
            <Like />
            <ExitStore />
            <View>
              <Title>re:Store</Title>
              <SubTitle>Electronics</SubTitle>
              <Discont>15%</Discont>
            </View>
          </View>
          <View style={styles.container}>
            <Image
              style={styles.Image}
              source={require('../../Image/shop.jpg')}
            />
            <Like />
            <ExitStore />
            <View>
              <Title>re:Store</Title>
              <SubTitle>Electronics</SubTitle>
            </View>
          </View>
        </ScrollView>
        <View style={styles.ViewMidle}>
          <Text style={styles.MidleText}>Spendings</Text>
          <Text style={styles.MidlesText}>$ 137,000</Text>
        </View>
        <View style={styles.ViewMidles}>
          <Text style={styles.JanuaryText}>January</Text>
          <Left />
          <Right />
          <Text style={styles.OpenCards}>Barclays bank</Text>
          <Feather
            style={{
              fontSize: 30,
              color: 'gray',
              marginTop: 70,
              marginLeft: 360,
              position: 'absolute',
            }}
            name="chevron-up"
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.containerCard}>
            <CardBlack>$84,000.54</CardBlack>
            <CardTitle>Tinkoff Black</CardTitle>
            <Text style={styles.Point}>..</Text>
            <Text style={styles.Number}>4355</Text>
          </View>
          <View style={styles.containerCard}>
            <CardBlue>$84,000.54</CardBlue>
            <CardTitle>Tinkoff Black</CardTitle>
            <Text style={styles.Point}>..</Text>
            <Text style={styles.Number}>4355</Text>
          </View>
        </ScrollView>
        <View style={styles.EndView} />
        <Text style={styles.OpenCardsSecond}>Barclays bank</Text>
        <Feather
          style={{
            fontSize: 30,
            color: 'gray',
            marginTop: -55,
            marginLeft: 375,
          }}
          name="chevron-down"
        />
      </View>
    </ScrollView>
  );
};

export default MainScreen;
