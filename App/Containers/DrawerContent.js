// @flow

import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import Userstore from '../Components/User'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Button, Icon ,Text, ListItem, Left, Body, Right, Thumbnail} from 'native-base';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressComponents = () => {
    this.toggleDrawer()
    NavigationActions.componentExamples()
  }

  handlePressListView = () => {
    this.toggleDrawer()
    NavigationActions.listview()
  }

  handlePressUsage = () => {
    this.toggleDrawer()
    NavigationActions.usageExamples()
  }

  handlePressAPI = () => {
    this.toggleDrawer()
    NavigationActions.apiTesting()
  }

  handlePressTheme = () => {
    this.toggleDrawer()
    NavigationActions.theme()
  }

  handlePressDevice = () => {
    this.toggleDrawer()
    NavigationActions.deviceInfo()
  }

  handlePressSignout = () => {
    this.toggleDrawer()
    // FBLoginManager.logout((data))
    NavigationActions.login()

  }

  render () {

  const User = Userstore.username ? Userstore.username :'';

  return (

      <ScrollView style={styles.container}>
        <Image source={Images.mttlogo8}   style={{width: 80, height: 80 ,alignSelf: 'center'}} />

      <ListItem icon>
                           <Left style={{marginLeft: 30}}>
                           </Left>
                           <Body>
                             <Text>Event</Text>
                           </Body>
       </ListItem>

             <ListItem icon>
                                  <Left style={{marginLeft: 30}}>
                                  </Left>
                                  <Body>
                                    <Text>Hall</Text>
                                  </Body>
              </ListItem>

              <ListItem icon>
                                   <Left style={{marginLeft: 30}}>
                                   </Left>
                                   <Body>
                                     <Text>Activity</Text>
                                   </Body>
               </ListItem>

               <ListItem icon>
                                    <Left style={{marginLeft: 30}}>
                                    </Left>
                                    <Body>
                                      <Text>More +</Text>
                                    </Body>
                </ListItem>



        <Button light full style={{marginTop: 15}} onPress={this.handlePressSignout}>
        <Text style={{color: 'black'}}>
           Sign Out
         </Text>
        </Button>

    {/*      <RoundedButton>
          ค้นหาที่พัก
        </RoundedButton>
        <RoundedButton>
          ค้นหา Guide นำเที่ยว
        </RoundedButton>
        <RoundedButton>
          Event
        </RoundedButton>
        <RoundedButton>
          สงขลา
        </RoundedButton>
        <RoundedButton>
          ยะลา
        </RoundedButton>
        <RoundedButton>
         สตูล
        </RoundedButton>
        <RoundedButton>
          นราธิวาส
        </RoundedButton>
        <RoundedButton>
          ปัตตานี
        </RoundedButton>

        <Text>{"\n"}</Text>
        <Icon name="md-star" />
  <DrawerButton text='List View' onPress={this.handlePressListView} />
        <DrawerButton text='Component Examples' onPress={this.handlePressComponents} />
        <DrawerButton text='Usage Examples' onPress={this.handlePressUsage} />
        <DrawerButton text='API Testing' onPress={this.handlePressAPI} />
        <DrawerButton text='Themes' onPress={this.handlePressTheme} />
         <DrawerButton text='Device Info' onPress={this.handlePressDevice} />*/}
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
