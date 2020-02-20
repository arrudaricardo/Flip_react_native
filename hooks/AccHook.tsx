import React, {useEffect, useState} from 'react'
import { Accelerometer as AccSensor} from 'expo-sensors';

interface AccData {
  x: number | null;
  y: number | null;
  z: number | null;
}

function Accelerometer() {
  const [accData, setAccData] = useState<AccData>({x:null,y:null,z:null})
  const [accAvailible , setAccAvailible]= useState(false);
  let _subscription: any;

  const checkAccAvailable = async ()=> {
    let accAvailible = await AccSensor.isAvailableAsync()
    setAccAvailible(accAvailible)
  }

  useEffect(()=>{
    checkAccAvailable();
    return () => {
      accUnsubscribe();
    }
  },[])

  useEffect(()=>{
    if (accAvailible){
      accSubscribe();
    }
  },[accAvailible]);

  const accSubscribe = () => {
    _subscription = AccSensor.addListener(data => setAccData(data))
  }

  const accUnsubscribe = () => {
    if (_subscription) {
      _subscription.remove()
      _subscription = null
    }
  }

  const toggleAccSubscription = () => {
    if (_subscription){
     accSubscribe(); 
    }else {
      accUnsubscribe();
    }
  }
  return accData
}

export default Accelerometer