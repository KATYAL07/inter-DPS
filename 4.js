import React from 'react'

import { createUseStyles } from 'react-jss'

import { TOKENS } from '.style'

const RecentScans = (props) => {
  const classes = useStyles()
  return (
    <div className={classes['container']}>
      <div className={classes['RecentScans']}>
        <div className={classes['topbar']}>
          <span className={classes['text']}>
            <span>4:20</span>
          </span>
          <div className={classes['Battery']}>
            <img
              src="/border686-0nb-200h.png"
              alt="Border686"
              className={classes['Border']}
            />
            <img
              src="/cap687-w79.svg"
              alt="Cap687"
              className={classes['Cap']}
            />
            <img
              src="/capacity688-3g6-200h.png"
              alt="Capacity688"
              className={classes['Capacity']}
            />
          </div>
          <img
            src="/wifi689-b32.svg"
            alt="Wifi689"
            className={classes['Wifi']}
          />
          <img
            src="/cellularconnection693-ynap.svg"
            alt="CellularConnection693"
            className={classes['CellularConnection']}
          />
        </div>
        <div className={classes['Group3903']}>
          <span className={classes['text02']}>
            <span>42</span>
          </span>
          <span className={classes['text04']}>
            <span>°C</span>
          </span>
        </div>
        <span className={classes['text06']}>
          <span>Soil Scout</span>
        </span>
        <span className={classes['text08']}>
          <span className={classes['text09']}>
            Heat:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Low</span>
        </span>
        <img
          src="/rectangle6104-b4ln-200h.png"
          alt="Rectangle6104"
          className={classes['Rectangle']}
        />
        <img
          src="/grass6105-uc1r.svg"
          alt="grass6105"
          className={classes['grass']}
        />
        <img
          src="/fluentbookquestionmark24filled6107-6gu.svg"
          alt="fluentbookquestionmark24filled6107"
          className={classes['fluentbookquestionmark24filled']}
        />
        <img
          src="/vector6109-406e.svg"
          alt="Vector6109"
          className={classes['Vector']}
        />
        <img
          src="/home6111-wtf.svg"
          alt="home6111"
          className={classes['home']}
        />
        <div className={classes['bottom']}>
          <img
            src="/homeindicator6114-uqe-200h.png"
            alt="HomeIndicator6114"
            className={classes['HomeIndicator']}
          />
        </div>
        <img
          src="/rectangle1416115-w6b-200h.png"
          alt="Rectangle1416115"
          className={classes['Rectangle141']}
        />
        <img
          src="/rectangle1426116-el0o-200h.png"
          alt="Rectangle1426116"
          className={classes['Rectangle142']}
        />
        <span className={classes['text11']}>
          <span>Nutri %</span>
        </span>
        <span className={classes['text13']}>
          <span>65</span>
        </span>
        <img
          src="/rectangle1456119-y1hs-200h.png"
          alt="Rectangle1456119"
          className={classes['Rectangle145']}
        />
        <img
          src="/rectangle1436120-jtyr-200h.png"
          alt="Rectangle1436120"
          className={classes['Rectangle143']}
        />
        <span className={classes['text15']}>
          <span>Water %</span>
        </span>
        <span className={classes['text17']}>
          <span>65</span>
        </span>
        <img
          src="/rectangle1446123-duoq-200h.png"
          alt="Rectangle1446123"
          className={classes['Rectangle144']}
        />
        <div className={classes['devicethermostat']}>
          <img
            src="/devicethermostat6126-kv1.svg"
            alt="devicethermostat6126"
            className={classes['devicethermostat1']}
          />
        </div>
        <div className={classes['brightness7']}>
          <img
            src="/brightness76129-n2uk.svg"
            alt="brightness76129"
            className={classes['brightness71']}
          />
        </div>
        <span className={classes['text19']}>
          <span>Pest Risk</span>
        </span>
        <span className={classes['text21']}>
          <span>Dry</span>
        </span>
        <span className={classes['text23']}>
          <span>Soil Type</span>
        </span>
        <span className={classes['text25']}>
          <span>Red and yellow soil</span>
        </span>
        <span className={classes['text27']}>
          <span>Soil Condition</span>
        </span>
        <span className={classes['text29']}>
          <span>Healthy</span>
        </span>
        <img
          src="/waterdrop6136-by8.svg"
          alt="waterdrop6136"
          className={classes['waterdrop']}
        />
        <img
          src="/pestcontrol6137-jpkh.svg"
          alt="pestcontrol6137"
          className={classes['pestcontrol']}
        />
        <span className={classes['text31']}>
          <span>
            <span>79%</span>
            <br></br>
            <span>Good</span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default RecentScans

const useStyles = createUseStyles({
  container: {
    width: '100%',
    minHeight: '100vh',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  RecentScans: {
    backgroundColor: TOKENS.DlColorDefaultBackground,
    width: '100%',
    height: '812px',
    display: 'flex',
    alignItems: 'flex-start',
    flexShrink: '0',
    position: 'relative',
    overflow: 'hidden',
  },
  topbar: {
    width: '375px',
    height: '44px',
    display: 'flex',
    alignItems: 'flex-start',
    flexShrink: '0',
    position: 'absolute',
    top: '0px',
    left: '0px',
  },
  text: {
    color: 'rgba(244, 244, 244, 1)',
    width: '54px',
    height: 'auto',
    textAlign: 'center',
    lineHeight: 'normal',
    position: 'absolute',
    top: 13,
    left: 26,
    fontFamily: 'Poppins',
    fontSize: 15,
    fontStretch: 'normal',
    fontStyle: 'SemiBold',
    fontWeight: 600,
    textDecoration: 'none',
  },
  Battery: {
    width: '24.32803726196289px',
    height: '11.333333015441895px',
    display: 'flex',
    alignItems: 'flex-start',
    flexShrink: 1,
    position: 'absolute',
    top: '20px',
    left: '334.333251953125px',
  },
  Border: {
    width: '22px',
    height: '11px',
    borderRadius: '2.6666667461395264px',
    borderWidth: '1px',
    borderColor: 'rgba(244, 244, 244, 1)',
    borderStyle: 'solid',
    position: 'absolute',
    top: '0px',
    left: '0px',
    opacity: '0.35',
  },
  Cap: {
    width: '1px',
    height: '4px',
    position: 'absolute',
    top: '3.6666667461395264px',
    left: '23px',
    opacity: '0.40',
  },
  Capacity: {
    width: '18px',
    height: '7px',
    borderRadius: '1.3333333730697632px',
    position: 'absolute',
    top: '1.9999998807907104px',
    left: '2px',
  },
  Wifi: {
    width: '15px',
    height: '11px',
    position: 'absolute',
    top: '20px',
    left: '314px',
  },
  CellularConnection: {
    width: '17px',
    height: '11px',
    position: 'absolute',
    top: '20px',
    left: '292px',
  },
  Group3903: {
    width: '321.6700134277344px',
    height: '350px',
    display: 'flex',
    alignItems: 'flex-start',
    flexShrink: 1,
    position: 'absolute',
    top: '107px',
    left: '26px',
  },
  text02: {
    color: 'rgba(255, 255, 255, 1)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: 'normal',
    position: 'absolute',
    fontFamily: 'Poppins',
    fontSize: 233.05030822753906,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  text04: {
    color: 'rgba(255, 255, 255, 1)',
    height: 'auto',
    textAlign: 'right',
    lineHeight: 'normal',
    position: 'absolute',
    top: 54.2034912109375,
    left: 248.67001342773438,
    fontFamily: 'Poppins',
    fontSize: 61.53873825073242,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  text06: {
    color: 'rgba(244, 244, 244, 1)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: 'normal',
    position: 'absolute',
    top: 71,
    left: 30,
    fontFamily: 'Poppins',
    fontSize: 18,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  text08: {
    color: 'rgba(244, 244, 244, 1)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: 'normal',
    position: 'absolute',
    top: 138,
    left: 91,
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  text09: {
    fontWeight: 700,
  },
  Rectangle: {
    width: '390px',
    height: '96px',
    borderRadius: '25px 25px 0 0',
    position: 'absolute',
    top: '734px',
    left: '-1px',
  },
  grass: {
    width: '24px',
    height: '18px',
    position: 'absolute',
    top: '761px',
    left: '132.052978515625px',
  },
  fluentbookquestionmark24filled: {
    width: '26px',
    height: '26px',
    position: 'absolute',
    top: '758px',
    left: '225px',
  },
  Vector: {
    width: '22px',
    height: '22px',
    position: 'absolute',
    top: '760px',
    left: '322px',
  },
  home: {
    width: '19px',
    height: '19px',
    position: 'absolute',
    top: '761px',
    left: '44px',
  },
  bottom: {
    width: '375px',
    height: '34px',
    display: 'flex',
    alignItems: 'flex-start',
    flexShrink: '0',
    position: 'absolute',
    top: '778px',
    left: '7px',
  },
  HomeIndicator: {
    width: '134px',
    height: '5px',
    borderRadius: '100px',
    position: 'absolute',
    top: '21px',
    left: '121px',
  },
  Rectangle141: {
    width: '139px',
    height: '49px',
    borderRadius: '17px',
    borderWidth: '2px',
    borderColor: 'rgba(164, 239, 69, 1)',
    borderStyle: 'solid',
    position: 'absolute',
    top: '551px',
    left: '42px',
  },
  Rectangle142: {
    width: '139px',
    height: '49px',
    borderRadius: '17px',
    borderWidth: '2px',
    borderColor: 'rgba(164, 239, 69, 1)',
    borderStyle: 'solid',
    position: 'absolute',
    top: '551px',
    left: '209px',
  },
  text11: {
    color: 'rgba(255, 255, 255, 1)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: 'normal',
    position: 'absolute',
    top: 566,
    left: 267,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  text13: {
    color: 'rgba(255, 255, 255, 1)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: 'normal',
    position: 'absolute',
    top: 566,
    left: 247,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  Rectangle145: {
    width: '100px',
    height: '126px',
    borderRadius: '17px',
    borderWidth: '2px',
    borderColor: 'rgba(147, 235, 116, 1)',
    borderStyle: 'solid',
    position: 'absolute',
    top: '394px',
    left: '248px',
  },
  Rectangle143: {
    width: '139px',
    height: '49px',
    borderRadius: '17px',
    borderWidth: '2px',
    borderColor: 'rgba(246, 95, 95, 1)',
    borderStyle: 'solid',
    position: 'absolute',
    top: '627px',
    left: '42px',
  },
  text15: {
    color: 'rgba(255, 255, 255, 1)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: 'normal',
    position: 'absolute',
    top: 566,
    left: 95,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  text17: {
    color: 'rgba(255, 255, 255, 1)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: 'normal',
    position: 'absolute',
    top: 566,
    left: 75,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  Rectangle144: {
    width: '139px',
    height: '49px',
    borderRadius: '17px',
    borderWidth: '2px',
    borderColor: 'rgba(246, 95, 95, 1)',
    borderStyle: 'solid',
    position: 'absolute',
    top: '627px',
    left: '209px',
  },
  devicethermostat: {
    backgroundColor: 'rgba(217, 217, 217, 1)',
    width: '79px',
    height: '79px',
    display: 'flex',
    alignItems: 'flex-start',
    flexShrink: 1,
    position: 'absolute',
    top: '296.9510803222656px',
    left: '288px',
  },
  devicethermostat1: {
    width: '26px',
    height: '59px',
    position: 'absolute',
    top: '9.875053405761719px',
    left: '26.33333396911621px',
  },
  brightness7: {
    backgroundColor: 'rgba(217, 217, 217, 1)',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'flex-start',
    flexShrink: 1,
    position: 'absolute',
    top: '126px',
    left: '30px',
  },
  brightness71: {
    width: '41px',
    height: '41px',
    position: 'absolute',
    top: '4.3429131507873535px',
    left: '4.342921257019043px',
  },
  text19: {
    color: 'rgba(244, 244, 244, 1)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: 'normal',
    position: 'absolute',
    top: 642,
    left: 261,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  text21: {
    color: 'rgba(244, 244, 244, 1)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: 'normal',
    position: 'absolute',
    top: 642,
    left: 107,
    fontFamily: 'Poppins',
    fontSize: 12,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  text23: {
    color: 'rgba(244, 244, 244, 1)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: 'normal',
    position: 'absolute',
    top: 394,
    left: 45,
    fontFamily: 'Poppins',
    fontSize: 18,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  text25: {
    color: 'rgba(244, 244, 244, 1)',
    height: 'auto',
    textAlign: 'center',
    lineHeight: 'normal',
    position: 'absolute',
    top: 421,
    left: 45,
    opacity: '0.40',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontStretch: 'normal',
    fontStyle: 'Regular',
    fontWeight: 400,
    textDecoration: 'none',
  },
  text27: {
    color: 'rgba(244, 244, 244, 1)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: 'normal',
    position: 'absolute',
    top: 466,
    left: 45,
    fontFamily: 'Poppins',
    fontSize: 18,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  text29: {
    color: 'rgba(244, 244, 244, 1)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: 'normal',
    position: 'absolute',
    top: 493,
    left: 45,
    opacity: '0.40',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontStretch: 'normal',
    fontStyle: 'Regular',
    fontWeight: 400,
    textDecoration: 'none',
  },
  waterdrop: {
    width: '10px',
    height: '13px',
    position: 'absolute',
    top: '645px',
    left: '93px',
  },
  pestcontrol: {
    width: '13px',
    height: '13px',
    position: 'absolute',
    top: '645px',
    left: '245px',
  },
  text31: {
    color: 'rgba(255, 255, 255, 1)',
    height: 'auto',
    textAlign: 'center',
    lineHeight: 'normal',
    position: 'absolute',
    top: 424,
    left: 259,
    fontFamily: 'Poppins',
    fontSize: 43,
    fontStretch: 'normal',
    fontStyle: 'SemiBold',
    fontWeight: 600,
    textDecoration: 'none',
  },
  '@media(max-width: 479px)': {
    RecentScans: {
      height: '1001px',
    },
    text04: {
      top: '44px',
      right: '-27px',
    },
    Rectangle: {
      top: '732px',
      left: '7px',
    },
    HomeIndicator: {
      left: '121px',
      bottom: '0px',
    },
    devicethermostat: {
      top: '294px',
      width: '62px',
      height: '77px',
      right: '34px',
      opacity: '0.18',
    },
    devicethermostat1: {
      top: '9px',
      left: '19px',
    },
    text31: {
      top: '412px',
      left: '255px',
      fontSize: '30px',
    },
  },
})
