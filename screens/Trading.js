import React from 'react';
import {View, Text,StyleSheet,Dimensions,Image,Animated,PanResponder, TouchableOpacity, Alert} from 'react-native';
import { globalStyles } from '../styles/global';



//get method of Dimensions component. Getting application's window width and height.
const appWidth = Dimensions.get('window').width;
const appHeight = Dimensions.get('window').height;
 
const items =[
    {id:"1",uri: require('../assets/redJacket.jpg')},
    {id:"2",uri: require('../assets/greenShirt.jpeg')},
    {id:"3",uri: require('../assets/white_dress.jpg')},
]

//to define components as classes or functions, thereby offering more features. done by extending React.component
export default class Trading extends React.Component {
    
  //constructor is called before the component is mounted.
  constructor() {
      //call super(props) before any other statement. Otherwise, this.prop will be undefined in the constructor, leading to bugs
      super()
      
      //ValueXY is a Value function of Animated library
    this.position = new Animated.ValueXY()
    //state variable currentItemIndex for tracking current index of array
    this.state = {
      currentItemIndex: 0
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-appWidth / 4, 0, appWidth / 4],
      outputRange: ['-40deg', '0deg', '40deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeItemOpacity = this.position.x.interpolate({
      inputRange: [-appWidth / 4, 0, appWidth / 4],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.passItemOpacity = this.position.x.interpolate({
      inputRange: [-appWidth / 4, 0, appWidth / 4],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })
    this.nextItemScale = this.position.x.interpolate({
      inputRange: [-appWidth / 4, 0, appWidth / 4],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })
    this.nextItemOpacity = this.position.x.interpolate({
      inputRange: [-appWidth / 4, 0, appWidth / 4],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })

  }//end of constructor
  
  //lifecycle hook componentWillMount.Triggers before initial render and only once
  componentWillMount() {
    this.PanResponder = PanResponder.create({
        
      /*predefined method of panResponder.
      for checking if the view want to become responder on the start of each touch*/
      onStartShouldSetPanResponder: (event, gestureState) => true,
      /*predefined method of panResponder. Triggered every time a movement is recognised. 
      This enables us to track the distance travelled by the card along the x and y-axis which can be stored and worked upon.*/
      onPanResponderMove: (event, gestureState) => {
        //setValue function applied on Animated.ValueXY() instance 'position'
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      /*predefined method of panResponder. Triggered when the user has released all the touches. 
       Functionality that we want to execute at the end of the gesture is implemented here.*/
      onPanResponderRelease: (event, gestureState) => {

        //if distance of the gesture since touch started is > 120
        if (gestureState.dx > 130) {
          /*apply spring animation using Animated.spring method on Animated.valueXY instance 'position'.
          animation called with start()*/
          Animated.spring(this.position, {
            toValue: { x: appWidth + 110, y: gestureState.dy }
          }).start(() => {
            //Completion callback. state variable currentItemIndex updated. Component re-rendered.
            this.setState({ currentItemIndex: this.state.currentItemIndex + 1 }, () => {
              //setValue function applied on Animated.ValueXY() instance 'position'
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        //if distance of the gesture since touch started is < -120
        else if (gestureState.dx < -130) {
          /*apply spring animation using Animated.spring method on Animated.valueXY instance 'position'.
          animation called with start()*/
          Animated.spring(this.position, {
            toValue: { x: -appWidth - 110, y: gestureState.dy }
          }).start(() => {
            //Completion callback. state variable currentItemIndex updated. Component re-rendered.
            this.setState({ currentItemIndex: this.state.currentItemIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        //else create spring animation using Animated.spring method back to the default position
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 5
          }).start()
        }
      }
    })
  }

  renderItems = () => {

    return items.map((item, i) => {


      if (i < this.state.currentItemIndex) {
        return null;
      }
      else if (i == this.state.currentItemIndex) {

        return (
            //Animated library exports 6 animated component types : one of them is View

          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id} style={[this.rotateAndTranslate, { height: appHeight - 120, width: appWidth, padding: 10, position: 'absolute' }]}>
     
            <Animated.View style={{ opacity: this.likeItemOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 3, borderColor: 'limegreen', color: 'limegreen', fontSize: 40, fontWeight: 'bold', padding: 10 }}>WANT</Text>
            
            </Animated.View>

            <Animated.View style={{ opacity: this.passItemOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 3, borderColor: 'crimson', color: 'crimson', fontSize: 40, fontWeight: 'bold', padding: 10 }}>PASS</Text>

            </Animated.View>
     
            <Image
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
              source={item.uri} 
              onPress = {() => navigation.navigate('ListingDetailsScreen')}/>
              
          

          </Animated.View>
       
        )
      }
      else {
        return (
          <Animated.View

            key={item.id} style={[{
              opacity: this.nextItemOpacity,
              transform: [{ scale: this.nextItemScale }],
              height: appHeight - 120, width: appWidth, padding: 10, position: 'absolute'
            }]}>
            <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 3, borderColor: 'limegreen', color: 'limegreen', fontSize: 40, fontWeight: 'bold', padding: 10 }}>WANT</Text>

            </Animated.View>

            <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 3, borderColor: 'crimson', color: 'crimson', fontSize: 40, fontWeight: 'bold', padding: 10 }}>PASS</Text>

            </Animated.View>
            
            <Image
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
              source={item.uri} />
           

          </Animated.View>
        )
      }
      //render the order of the items array elements so latest item appears at the top
    }).reverse();
  }
  //end of renderItems function
  
  //render method needs to be defined in a React.Component subclass
  render() {
    return (
   
   
   <TouchableOpacity onPress={() => Alert.alert('image clicked')}>

        <View>
          {this.renderItems()}
        </View>
      
        {/* <View style={{ height: 30 }}>

      </View> */}
      </TouchableOpacity>
    

    );
  }
}
//style={{ flex: 1 }}

const styles = StyleSheet.create({
  container: {
    paddingBottom:20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    textAlign:'center',
    fontWeight: 'bold',
  }
});