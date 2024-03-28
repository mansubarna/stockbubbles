'use client'

import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
// require("highcharts/highcharts-more")(Highcharts);
import HCMore from 'highcharts/highcharts-more';
HCMore(Highcharts);

function StockBubble() {
  const data = [
    {
      logo: "https://cryptologos.cc/logos/thumbs/HEX-logo.png",
      name: "HEX",
      originalValue: 2,
      symbol: "hex",
      url: "https://www.coingecko.com/en/coins/hex",
      value: 1,
      className: ""
    },
    {
      logo: "https://cryptologos.cc/logos/thumbs/0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39.png",
      name: "HEX (PulseChain)",
      originalValue: 0.9709016511111158,
      symbol: "pHex",
      url: "https://www.coingecko.com/en/coins/hex-pulsechain",
      value: 0.9709016511111158,
      className: ""
    },
    {
      logo: "https://cryptologos.cc/logos/thumbs/Tether.png",
      name: "Tether",
      originalValue: 1,
      symbol: "usdt",
      url: "https://www.coingecko.com/en/coins/tether",
      value: 2,
      className: ""
    },
    {
      logo: "https://cryptologos.cc/logos/thumbs/usdc.png",
      name: "USDC",
      originalValue: 2,
      symbol: "usdc",
      url: "https://www.coingecko.com/en/coins/usd-coin",
      value: 1,
      className: ""
    },
    {
      logo: "https://cryptologos.cc/logos/thumbs/wrapped_bitcoin_wbtc.png",
      name: "Wrapped Bitcoin",
      originalValue: 3,
      symbol: "wbtc",
      url: "https://www.coingecko.com/en/coins/wrapped-bitcoin",
      value: 6,
      className: ""
    },
    {
      logo: "https://cryptologos.cc/logos/thumbs/Internet_Computer_logo.png",
      name: "Internet Computer",
      originalValue: 17,
      symbol: "icp",
      url: "https://www.coingecko.com/en/coins/internet-computer",
      value: 9,
      className: ""
    },
    {
      logo: "https://cryptologos.cc/logos/thumbs/litecoin.png",
      name: "Litecoin",
      originalValue: 1.6869418094160264,
      symbol: "ltc",
      url: "https://www.coingecko.com/en/coins/litecoin",
      value: 1.6869418094160264,
      className: ""
    },
    {
      logo: "https://cryptologos.cc/logos/thumbs/leo-token.png",
      name: "LEO Token",
      originalValue: 0.14392355540476504,
      symbol: "leo",
      url: "https://www.coingecko.com/en/coins/leo-token",
      value: 0.14392355540476504,
      className: ""
    },
    {
      logo: "https://cryptologos.cc/logos/thumbs/Badge_Dai.png",
      name: "Dai",
      originalValue: 0.03388132903368106,
      symbol: "dai",
      url: "https://www.coingecko.com/en/coins/dai",
      value: 0.03388132903368106,
      className: ""
    },
    {
      logo: "https://cryptologos.cc/logos/thumbs/Optimism.png",
      name: "Optimism",
      originalValue: 0.3010612254509855,
      symbol: "op",
      url: "https://www.coingecko.com/en/coins/optimism",
      value: 0.3010612254509855,
      className: ""
    },
    {
      logo: "https://cryptologos.cc/logos/thumbs/ARUsPeNQ_400x400.jpeg",
      name: "Bittensor",
      originalValue: 0.5353771784730477,
      symbol: "tao",
      url: "https://www.coingecko.com/en/coins/bittensor",
      value: 0.5353771784730477,
      className: ""
    }
  ]
  const radialGradient = {
    cx: 0.5,
    cy: 0.5,
    r: 0.5
  }
  const greenColor = [
    [
      0,
      "rgba(95, 197, 120, 0.10)"
    ],
    [
      0.8177,
      "rgba(95, 197, 120, 0.30)"
    ],
    [
      1,
      "#5FC578"
    ]
  ];
  const redColor = [
    [
      0,
      "rgba(233, 85, 87, 0.10)"
    ],
    [
      0.8177,
      "rgba(233, 85, 87, 0.30)"
    ],
    [
      1,
      "#E95557"
    ]
  ];
  const blueColor = [
    [
      0,
      "rgba(46, 72, 243, 0.10)"
    ],
    [
      0.8177,
      "rgba(46, 72, 243, 0.30)"
    ],
    [
      1,
      "rgb(46, 72, 243)"
    ]
  ];
  const getColor = (i, f) => {
    if (i - f > 0) {
      return greenColor;

    }
    else if (i - f < 0) {
      return redColor;
    }
    else {
      return blueColor;
    }
  }
  // console.log("color:", getColor(3, 4));
  const data2 = data.map(v => ({
    ...v, marker: { fillOpacity: 1 }, color: {
      radialGradient, stops: getColor(v.originalValue, v.value)
    }
  }));

  console.log(data2)


  const options = {
    credits: {
      enabled: false,
    },
    chart: {
      height: undefined,
      type: "packedbubble",
      backgroundColor: "transparent",
      borderColor: "transparent",
      margin: [
        0,
        0,
        0,
        0
      ],
      spacingBottom: 0,
      spacingLeft: 0,
      spacingRight: 0,
      spacingTop: 0,
      animation: false
    },
    title: {
      enabled: false,
      text: ""
    },
    legend: {
      backgroundColor: "#FCFFC5",
      borderRadius: 4,
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      packedbubble: {
        cursor: "pointer",
        minSize: 32,
        maxSize: "150%",
        layoutAlgorithm: {
          bubblePadding: 3,
          friction: -3,
          gravitationalConstant: 0.001,
          initialPositionRadius: 754,
          maxSpeed: 2,
          parentNodeLimit: true
        },
        dataLabels: {
          enabled: true,
          useHTML: true,
          format: `<div class='bubble'><span class='bubble-symbol'>{point.symbol}</span><span class='bubble-change'>{point.performance.day}</span><div>`,
          // format: `<div class='bubble'><div class='bubble-log-wrap'><img class='bubble-logo' src={point.logo}/></div><span class='bubble-symbol'>{point.symbol}</span><span class='bubble-change'>1%</span><div>`,
          className: "bubble",
          style: {
            color: "white",
            textOutline: "none",
            fontWeight: "normal"
          }
        },
        point: {
          events: {}
        }
      }
    },

    series: [
      {
        keys: ['name', 'y', 'sliced', 'selected'],
        name: "Increased",
        data: data2
      }
    ]
    ,
    exporting: {
      enabled: false
    }
  }
  console.log("option:", options.series[0].data)

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  )
}

export default StockBubble
