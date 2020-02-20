import React from 'react'


// array of accData -> calculate flips

interface AccData {
  x:number;
  y:number;
  z:number;
}

function FlipCal(data:AccData[]): AccData {
  const flips: AccData = {
    x:0,
    y:0,
    z:0
  }
  let trackX:number | null = null, trackY: number | null = null, trackZ:number| null = null;
  for (let {x,y,z} of data){

    if (!trackX) {
      trackX = x
      trackY = y
      trackZ = z
    }

  }

}