import React from 'react'

import { createUseStyles } from 'react-jss'

import { TOKENS } from '.style'

const Profilepage = (props) => {
  const classes = useStyles()
  return (
    <div className={classes['container']}>
      <div className={classes['profilepage']}>
        <div className={classes['topbar']}>
          <span className={classes['text']}>
            <span>4:20</span>
          </span>
          <div className={classes['Battery']}>
            <img
              src="/border1361-usws-200h.png"
              alt="Border1361"
              className={classes['Border']}
            />
            <img
              src="/cap1362-re3s.svg"
              alt="Cap1362"
              className={classes['Cap']}
            />
            <img
              src="/capacity1363-9nui-200h.png"
              alt="Capacity1363"
              className={classes['Capacity']}
            />
          </div>
          <img
            src="/wifi1364-w4u.svg"
            alt="Wifi1364"
            className={classes['Wifi']}
          />
          <img
            src="/cellularconnection1368-o214.svg"
            alt="CellularConnection1368"
            className={classes['CellularConnection']}
          />
        </div>
        <img
          src="/rectangle1374-ha7r-200h.png"
          alt="Rectangle1374"
          className={classes['Rectangle']}
        />
        <img
          src="/grass2429-4xes.svg"
          alt="grass2429"
          className={classes['grass']}
        />
        <img
          src="/fluentbookquestionmark24filled1376-sujf.svg"
          alt="fluentbookquestionmark24filled1376"
          className={classes['fluentbookquestionmark24filled']}
        />
        <img
          src="/vector1378-crqi.svg"
          alt="Vector1378"
          className={classes['Vector']}
        />
        <img
          src="/home1381-roiq.svg"
          alt="home1381"
          className={classes['home']}
        />
        <div className={classes['bottom']}>
          <img
            src="/homeindicator1384-o8yb-200h.png"
            alt="HomeIndicator1384"
            className={classes['HomeIndicator']}
          />
        </div>
        <span className={classes['text02']}>
          <span>Arni</span>
        </span>
        <img
          src="/vector1390-b89m.svg"
          alt="Vector1390"
          className={classes['Vector1']}
        />
        <img
          src="/vector1817-nkoh.svg"
          alt="Vector1817"
          className={classes['Vector2']}
        />
        <span className={classes['text04']}>
          <span>Log out</span>
        </span>
        <button className={classes['IconButton']}>
          <button className={classes['TemplateTemplateIconButton']}>
            <img
              src="/iconi181-bhvx.svg"
              alt="IconI181"
              className={classes['Icon']}
            />
          </button>
        </button>
        <button className={classes['IconButton1']}>
          <button className={classes['TemplateTemplateIconButton1']}>
            <img
              src="/iconi181-3rxn.svg"
              alt="IconI181"
              className={classes['Icon1']}
            />
          </button>
        </button>
        <span className={classes['text06']}>
          <span className={classes['text07']}>
            Join Date:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>16/12/23</span>
        </span>
        <span className={classes['text09']}>
          <span>No. of plants scanned</span>
        </span>
        <span className={classes['text11']}>
          <span>42</span>
        </span>
        <img
          src="/calendarmonth1816-q49h.svg"
          alt="calendarmonth1816"
          className={classes['calendarmonth']}
        />
        <img src="/eco1924-fid.svg" alt="eco1924" className={classes['eco']} />
        <span className={classes['text13']}>
          <span>Average condition</span>
        </span>
        <span className={classes['text15']}>
          <span>Good</span>
        </span>
        <img
          src="/psychiatry2018-fhx6.svg"
          alt="psychiatry2018"
          className={classes['psychiatry']}
        />
        <img src="/spa1931-ckxm.svg" alt="spa1931" className={classes['spa']} />
        <span className={classes['text17']}>
          <span className={classes['text18']}>
            Your
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            PlantWise
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>statistics</span>
        </span>
        <img
          src="/oqhs74f16651113385-r5cf-200h.png"
          alt="oqhs74f16651113385"
          className={classes['oqhs74f1665111']}
        />
      </div>
    </div>
  )
}

export default Profilepage

const useStyles = createUseStyles({
  container: {
    width: '100%',
    minHeight: '100vh',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profilepage: {
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
  Rectangle: {
    width: '390px',
    height: '96px',
    borderRadius: '25px 25px 0 0',
    position: 'absolute',
    top: '727px',
    left: '0px',
  },
  grass: {
    width: '24px',
    height: '18px',
    position: 'absolute',
    top: '754px',
    left: '133.052978515625px',
  },
  fluentbookquestionmark24filled: {
    width: '26px',
    height: '26px',
    position: 'absolute',
    top: '751px',
    left: '219px',
  },
  Vector: {
    width: '22px',
    height: '22px',
    position: 'absolute',
    top: '753px',
    left: '316px',
  },
  home: {
    width: '19px',
    height: '19px',
    position: 'absolute',
    top: '754px',
    left: '38px',
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
  text02: {
    color: 'rgba(244, 244, 244, 1)',
    width: '93px',
    height: 'auto',
    textAlign: 'center',
    lineHeight: 'normal',
    position: 'absolute',
    top: 198,
    left: 144,
    fontFamily: 'Poppins',
    fontSize: 24,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  Vector1: {
    width: '15px',
    height: '15px',
    position: 'absolute',
    top: '208.40478515625px',
    left: '231px',
  },
  Vector2: {
    width: '15px',
    height: '15px',
    position: 'absolute',
    top: '580px',
    left: '321px',
    opacity: '0.40',
  },
  text04: {
    color: TOKENS.DlColorDefaultPrimary,
    width: '82px',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '24px',
    position: 'absolute',
    top: 630,
    left: 81,
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  IconButton: {
    backgroundColor: 'rgba(164, 239, 69, 0.05000000074505806)',
    width: '40px',
    display: 'flex',
    alignItems: 'flex-start',
    borderRadius: '68px',
    position: 'absolute',
    top: '630px',
    left: '304px',
  },
  TemplateTemplateIconButton: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    padding: '8px',
    position: 'relative',
  },
  Icon: {
    width: '24px',
    height: '24px',
    position: 'absolute',
    top: '8px',
    left: '8px',
  },
  IconButton1: {
    width: '40px',
    display: 'flex',
    alignItems: 'flex-start',
    borderRadius: '10px',
    position: 'absolute',
    top: '630px',
    left: '32px',
  },
  TemplateTemplateIconButton1: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    padding: '8px',
    position: 'relative',
  },
  Icon1: {
    width: '24px',
    height: '24px',
    position: 'absolute',
    top: '8px',
    left: '8px',
  },
  text06: {
    color: 'rgba(164, 239, 69, 1)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: '24px',
    position: 'absolute',
    top: 575,
    left: 81,
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStretch: 'normal',
    fontStyle: 'Medium',
    fontWeight: 500,
    textDecoration: 'none',
  },
  text07: {
    color: TOKENS.DlColorDefaultPrimary,
  },
  text09: {
    color: TOKENS.DlColorDefaultPrimary,
    height: 'auto',
    textAlign: 'left',
    lineHeight: '24px',
    position: 'absolute',
    top: 520,
    left: 81,
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStretch: 'normal',
    fontStyle: 'Medium',
    fontWeight: 500,
    textDecoration: 'none',
  },
  text11: {
    color: TOKENS.DlColorDefaultPrimary,
    height: 'auto',
    textAlign: 'left',
    lineHeight: '24px',
    position: 'absolute',
    top: 520,
    left: 316,
    opacity: '0.40',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStretch: 'normal',
    fontStyle: 'Medium',
    fontWeight: 500,
    textDecoration: 'none',
  },
  calendarmonth: {
    width: '19px',
    height: '21px',
    position: 'absolute',
    top: '575px',
    left: '42px',
  },
  eco: {
    width: '17px',
    height: '17px',
    position: 'absolute',
    top: '524px',
    left: '44px',
  },
  text13: {
    color: TOKENS.DlColorDefaultPrimary,
    height: 'auto',
    textAlign: 'left',
    lineHeight: '24px',
    position: 'absolute',
    top: 465,
    left: 81,
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStretch: 'normal',
    fontStyle: 'Medium',
    fontWeight: 500,
    textDecoration: 'none',
  },
  text15: {
    color: TOKENS.DlColorDefaultPrimary,
    height: 'auto',
    textAlign: 'right',
    lineHeight: '24px',
    position: 'absolute',
    top: 465,
    left: 292,
    opacity: '0.40',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStretch: 'normal',
    fontStyle: 'Medium',
    fontWeight: 500,
    textDecoration: 'none',
  },
  psychiatry: {
    width: '18px',
    height: '18px',
    position: 'absolute',
    top: '468px',
    left: '43px',
  },
  spa: {
    width: '113px',
    height: '113px',
    position: 'absolute',
    top: '257px',
    left: '138.716064453125px',
  },
  text17: {
    color: 'rgba(244, 244, 244, 1)',
    height: 'auto',
    textAlign: 'left',
    lineHeight: 'normal',
    position: 'absolute',
    top: 393,
    left: 87,
    fontFamily: 'Poppins',
    fontSize: 18,
    fontStretch: 'normal',
    fontStyle: 'Bold',
    fontWeight: 700,
    textDecoration: 'none',
  },
  text18: {
    fontWeight: 700,
  },
  oqhs74f1665111: {
    width: '116px',
    height: '116px',
    borderRadius: '157.75999450683594px',
    position: 'absolute',
    top: '76px',
    left: '137px',
  },
  '@media(max-width: 479px)': {
    profilepage: {
      marginBottom: '4px',
      height: '996px',
    },
    Rectangle: {
      top: '762px',
      left: '0px',
    },
    grass: {
      top: '788px',
      left: '125px',
    },
    fluentbookquestionmark24filled: {
      top: '789px',
      left: '211px',
    },
    Vector: {
      top: '790px',
      right: '55px',
    },
    home: {
      top: '785px',
      left: '51px',
    },
    bottom: {
      left: '7px',
      top: '810px',
      bottom: '36px',
    },
  },
})
