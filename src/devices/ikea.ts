import {Definition} from '../lib/types';
import dataType from 'zigbee-herdsman/dist/zcl/definition/dataType';
import {
    onOff, battery, iasZoneAlarm, identify, forcePowerSource,
    temperature, humidity, occupancy, illuminance, windowCovering,
    commandsOnOff, commandsLevelCtrl, commandsWindowCovering, pm25,
    linkQuality, deviceEndpoints, bindCluster,
} from '../lib/modernExtend';
import {
    ikeaConfigureRemote, ikeaLight, ikeaOta,
    ikeaBattery, ikeaAirPurifier, legacy as ikeaLegacy,
    ikeaVoc, ikeaConfigureGenPollCtrl, tradfriOccupancy,
    tradfriRequestedBrightness,
    tradfriCommandsOnOff,
    tradfriCommandsLevelCtrl,
    styrbarCommandOn,
    ikeaDotsClick,
    ikeaArrowClick,
    ikeaMediaCommands,
} from '../lib/ikea';

const definitions: Definition[] = [
    // #region light
    // lights naming convention: type, light capabilities, form, diffuser type, brightness
    // #region E26/E27/B22
    {
        zigbeeModel: [
            'TRADFRI bulb E27 WS opal 980lm',
            'TRADFRI bulb E26 WS opal 980lm',
            'TRADFRI bulb E27 WS\uFFFDopal 980lm'],
        model: 'LED1545G12',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E26/E27, white spectrum, globe, opal, 980 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: ['TRADFRI bulb E27 CWS globe 806lm'],
        model: 'LED2109G6',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E27, color/white spectrum, globe, opal, 806 lm',
        extend: [ikeaLight({colorTemp: true, color: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb E27 WS clear 950lm',
            'TRADFRI bulb E26 WS clear 950lm',
            'TRADFRI bulb E27 WS\uFFFDclear 950lm'],
        model: 'LED1546G12',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E26/E27, white spectrum, globe, clear, 950 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb E27 opal 1000lm',
            'TRADFRI bulb E27 W opal 1000lm',
        ],
        model: 'LED1623G12',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E27, white, globe, opal, 1000 lm',
        extend: [ikeaLight(), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb E27 WW globe 806lm',
            'TRADFRI bulb E26 WW globe 800lm',
            'TRADFRI bulb E26 WW globe 806lm',
        ],
        model: 'LED2103G5',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E26/E27, warm white, globe, 806 lumen',
        extend: [ikeaLight(), identify()],
    },
    {
        zigbeeModel: ['TRADFRIbulbE26WWglobeclear250lm'],
        model: 'LED2008G3',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E26, warm white, globe, clear, 250 lm',
        extend: [ikeaLight(), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb E27 WW G95 CL 470lm',
            'TRADFRI bulb E26 WW G95 CL 450lm',
            'TRADFRI bulb E26 WW G95 CL 440lm',
            'TRADFRI bulb E26 WW G95 CL 470lm',
        ],
        model: 'LED2102G3',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E26/E27, warm white, globe, clear, 440/450/470 lm',
        extend: [ikeaLight(), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRIbulbG125E27WSopal470lm',
            'TRADFRIbulbG125E26WSopal450lm',
            'TRADFRIbulbG125E26WSopal470lm',
        ],
        model: 'LED1936G5',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E26/E27, white spectrum, globe, opal, 450/470 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRIbulbE27WSglobeopal1055lm',
            'TRADFRIbulbE26WSglobeopal1100lm',
            'TRADFRIbulbE26WSglobeopal1160lm',
            'TRADFRIbulbE26WSglobeopal1055lm',
            'TRADFRI bulb E26 WS globe 1160lm',
        ],
        model: 'LED2003G10',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E26/27, white spectrum, globe, opal, 1055/1100/1160 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRIbulbE26WSglobeclear800lm',
            'TRADFRIbulbE27WSglobeclear806lm',
            'TRADFRIbulbE26WSglobeclear806lm',
        ],
        model: 'LED2004G8',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E26/E27, white spectrum, globe, clear, 800/806 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb E27 opal 470lm',
            'TRADFRI bulb E27 W opal 470lm',
            'TRADFRIbulbT120E27WSopal470lm',
            'TRADFRIbulbT120E26WSopal450lm',
            'TRADFRIbulbT120E26WSopal470lm',
        ],
        model: 'LED1937T5',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E26/E27, white spectrum, T120 cylinder, opal, 450/470 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb E27 WW clear 250lm',
            'TRADFRI bulb E26 WW clear 250lm',
        ],
        model: 'LED1842G3',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E26/E27, warm white, globe, clear, 250 lm',
        extend: [ikeaLight(), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRIbulbE27WWclear250lm',
            'TRADFRIbulbE26WWclear250lm',
        ],
        model: 'LED1934G3',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E26/E27, warm white, globe, clear, 250 lm',
        extend: [ikeaLight({turnsOffAtBrightness1: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb E26 opal 1000lm',
            'TRADFRI bulb E26 W opal 1000lm',
        ],
        model: 'LED1622G12',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E26, white, globe, opal, 1000 lm',
        extend: [ikeaLight(), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb E26 CWS 800lm',
            'TRADFRI bulb E27 CWS 806lm',
            'TRADFRI bulb E26 CWS 806lm',
            'TRADFRI bulb E26 CWS 810lm',
        ],
        model: 'LED1924G9',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E26/E27, color/white spectrum, globe, opal, 800/806/810 lm',
        extend: [ikeaLight({colorTemp: true, color: true, turnsOffAtBrightness1: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb E27 WS opal 1000lm',
            'TRADFRI bulb E26 WS opal 1000lm',
        ],
        model: 'LED1732G11',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E26/E27, white spectrum, globe, opal, 1000 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb E27 WW 806lm',
            'TRADFRI bulb E26 WW 806lm',
        ],
        model: 'LED1836G9',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E26/E27, warm white, globe, opal, 806 lm',
        extend: [ikeaLight({turnsOffAtBrightness1: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb E27 WS clear 806lm',
            'TRADFRI bulb E26 WS clear 806lm',
        ],
        model: 'LED1736G9',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E26/E27, white spectrum, globe, clear, 806 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: ['TRADFRI bulb E27 WS globe 1055lm'],
        model: 'LED2201G8',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E27, white spectrum, globe, opal, 1055 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: ['TRADFRIbulbPAR38WS900lm'],
        model: 'LED2006R9',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E26, white spectrum, PAR38 downlight, clear, 900 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRIbulbB22WSglobeopal1055lm',
            'TRADFRIbulbB22WSglobeopal1055lm',
        ],
        model: 'LED2035G10',
        vendor: 'IKEA',
        description: 'TRADFRI bulb B22, white spectrum, globe, opal, 1055 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    // #endregion E26/E27/B22
    {
        zigbeeModel: [
            'TRADFRI bulb E27 CWS opal 600lm',
            'TRADFRI bulb E26 CWS opal 600lm',
            'TRADFRI bulb E14 CWS opal 600lm',
            'TRADFRI bulb E12 CWS opal 600lm',
            'TRADFRI bulb E27 C/WS opal 600',
        ],
        model: 'LED1624G9',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E12/E14/E26/E27, color/white spectum, globe, opal, 600 lm',
        extend: [
            ikeaLight({colorTemp: {range: [153, 500], viaColor: true}, color: true}), // light is pure RGB (XY), advertise 2000K-6500K
            identify(),
        ],
    },
    // #region E12/E14/E17
    {
        zigbeeModel: ['TRADFRI bulb E14 WS candle 470lm'],
        model: 'LED2107C4',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E14, white spectrum, candle, opal, 470 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb E14 WS opal 400lm',
            'TRADFRI bulb E12 WS opal 400lm',
        ],
        model: 'LED1536G5',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E12/E14, white spectrum, globe, opal, 400 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb E14 WS 470lm',
            'TRADFRI bulb E12 WS 450lm',
            'TRADFRI bulb E17 WS 440lm',
        ],
        model: 'LED1835C6',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E12/E14/E17, white spectrum, candle, opal, 450/470/440 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb E14 WS globe 470lm',
            'TRADFRI bulb E12 WS globe 450lm',
        ],
        model: 'LED2101G4',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E12/E14, white spectrum, globe, opal, 450/470 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: ['TRADFRI bulb E14 WS opal 600lm'],
        model: 'LED1733G7',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E14, white spectrum, globe, opal, 600 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb E14 W op/ch 400lm',
            'TRADFRI bulb E12 W op/ch 400lm',
            'TRADFRI bulb E17 W op/ch 400lm',
        ],
        model: 'LED1649C5',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E12/E14/E17, white, candle, opal, 400 lm',
        extend: [ikeaLight(), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRIbulbE14WSglobeopal470lm',
            'TRADFRIbulbE12WSglobeopal470lm',
            'TRADFRI bulb E17 WS globe 440lm',
            'TRADFRIbulbE17WSglobeopal470lm',
        ],
        model: 'LED2002G5',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E14/E12/E17, white spectrum, globe, clear, 440/470 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb E12 WS opal 600lm',
            'TRADFRI bulb E17 WS opal 600lm',
        ],
        model: 'LED1738G7',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E12/E17, white spectrum, globe, opal, 600 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb E14 CWS 470lm',
            'TRADFRI bulb E12 CWS 450lm',
            'TRADFRI bulb E17 CWS 440lm',
        ],
        model: 'LED1925G6',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E12/E14/E17, color/white spectrum, globe, opal, 440/450/470 lm',
        extend: [ikeaLight({colorTemp: true, color: true, turnsOffAtBrightness1: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRIbulbE14WWclear250lm',
            'TRADFRIbulbE12WWclear250lm',
            'TRADFRIbulbE17WWclear250lm',
        ],
        model: 'LED1935C3',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E12/E14/E17, warm white, candle, clear, 250 lm',
        extend: [ikeaLight(), identify()],
    },
    {
        zigbeeModel: ['TRADFRIbulbE12WWcandleclear250lm'],
        model: 'LED2009C3',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E12, warm white, candle, clear, 250 lm',
        extend: [ikeaLight(), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRIbulbE14WScandleopal470lm',
            'TRADFRIbulbE12WScandleopal450lm',
        ],
        model: 'LED1949C5',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E12/E14, white spectrum, candle, opal, 450/470 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: ['TRADFRI bulb E14 CWS globe 806lm'],
        model: 'LED2111G6',
        vendor: 'IKEA',
        description: 'TRADFRI bulb E14, color/white spectrum, globe, opal, 806 lm',
        extend: [ikeaLight({colorTemp: true, color: true}), identify()],
    },
    // #endregion E12/E14/E17
    // #region GU10
    {
        zigbeeModel: [
            '\u001aTRADFRI bulb GU10 WW 345lm',
            'TRADFRI bulb GU10 WW 345lm',
            '\\u001TRADFRI bulb GU10 WW 345lm',
            '\u001aTRADFRI bulb GU10 WW 345lm8',
            'TRADFRI bulb GU10 WW 380lm',
        ],
        model: 'LED2104R3',
        vendor: 'IKEA',
        description: 'TRADFRI bulb GU10, warm white, 345/380 lm',
        extend: [ikeaLight(), identify()],
    },
    {
        zigbeeModel: ['TRADFRI bulb GU10 WS 400lm'],
        model: 'LED1537R6/LED1739R5',
        vendor: 'IKEA',
        description: 'TRADFRI bulb GU10, white spectrum, 400 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: ['TRADFRI bulb GU10 W 400lm'],
        model: 'LED1650R5',
        vendor: 'IKEA',
        description: 'TRADFRI bulb GU10, white, 400 lm',
        extend: [ikeaLight(), identify()],
    },
    {
        zigbeeModel: ['TRADFRI bulb GU10 WW 400lm'],
        model: 'LED1837R5',
        vendor: 'IKEA',
        description: 'TRADFRI bulb GU10, warm white, 400 lm',
        extend: [ikeaLight(), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI bulb GU10 CWS 345lm',
            'TRADFRI bulb GU10 CWS 380lm',
        ],
        model: 'LED1923R5',
        vendor: 'IKEA',
        description: 'TRADFRI bulb GU10, color/white spectrum, 345/380 lm',
        extend: [
            ikeaLight({colorTemp: {range: [153, 500], viaColor: true}, color: true}), // light is pure RGB (XY), advertise 2000K-6500K
            identify(),
        ],
    },
    {
        zigbeeModel: [
            'TRADFRI_bulb_GU10_WS_345lm',
            'TRADFRIbulbGU10WS345lm',
            'TRADFRI bulb GU10 WS 345lm',
            'TRADFRIbulbGU10WS380lm',
        ],
        model: 'LED2005R5/LED2106R3',
        vendor: 'IKEA',
        description: 'TRADFRI bulb GU10, white spectrum, 345/380 lm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    // #endregion GU10
    // #region light panels
    {
        zigbeeModel: ['LEPTITER Recessed spot light'],
        model: 'T1820',
        vendor: 'IKEA',
        description: 'LEPTITER recessed spot light, white spectrum',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: ['STOFTMOLN ceiling/wall lamp WW37'],
        model: 'T2037',
        vendor: 'IKEA',
        description: 'STOFTMOLN ceiling/wall lamp, warm white, 37 cm',
        extend: [ikeaLight(), identify()],
    },
    {
        zigbeeModel: ['STOFTMOLN ceiling/wall lamp WW24'],
        model: 'T2035',
        vendor: 'IKEA',
        description: 'STOFTMOLN ceiling/wall lamp, warm white, 24 cm',
        extend: [ikeaLight(), identify()],
    },
    {
        zigbeeModel: ['STOFTMOLN ceiling/wall lamp WW10'],
        model: 'T2105',
        vendor: 'IKEA',
        description: 'STOFTMOLN ceiling/wall lamp, warm white, 10 cm',
        extend: [ikeaLight(), identify()],
    },
    {
        zigbeeModel: ['STOFTMOLN ceiling/wall lamp WW15'],
        model: 'T2106',
        vendor: 'IKEA',
        description: 'STOFTMOLN ceiling/wall lamp, warm white, 15 cm',
        extend: [ikeaLight(), identify()],
    },
    {
        zigbeeModel: ['JETSTROM 40100'],
        model: 'L2208',
        vendor: 'IKEA',
        description: 'JETSTROM ceiling light panel, white spectrum, 100x40 cm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: ['JETSTROM 6060'],
        model: 'L2207',
        vendor: 'IKEA',
        description: 'JETSTROM ceiling light panel, white spectrum, 60x60 cm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: ['JETSTROM 3030 wall'],
        model: 'L2205',
        vendor: 'IKEA',
        description: 'JETSTROM wall light panel, color/white spectrum, 30x30 cm',
        extend: [ikeaLight({colorTemp: true, color: true}), identify()],
    },
    {
        zigbeeModel: ['JETSTROM 3030 ceiling'],
        model: 'L2206',
        vendor: 'IKEA',
        description: 'JETSTROM ceiling light panel, color/white spectrum, 30x30 cm',
        extend: [ikeaLight({colorTemp: true, color: true}), identify()],
    },
    {
        zigbeeModel: ['JORMLIEN door WS 40x80'],
        model: 'L1530',
        vendor: 'IKEA',
        description: 'JORMLIEN door light panel, white spectrum, 40x80 cm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: ['FLOALT panel WS 30x30'],
        model: 'L1527',
        vendor: 'IKEA',
        description: 'FLOALT light panel, white spectrum, 30x30 cm',
        extend: [ikeaLight({colorTemp: true, turnsOffAtBrightness1: true}), identify()],
    },
    {
        zigbeeModel: ['FLOALT panel WS 60x60'],
        model: 'L1529',
        vendor: 'IKEA',
        description: 'FLOALT light panel, white spectrum, 60x60 cm',
        extend: [ikeaLight({colorTemp: true, turnsOffAtBrightness1: true}), identify()],
    },
    {
        zigbeeModel: ['FLOALT panel WS 30x90'],
        model: 'L1528',
        vendor: 'IKEA',
        description: 'FLOALT light panel, white spectrum, 30x90 cm',
        extend: [ikeaLight({colorTemp: true, turnsOffAtBrightness1: true}), identify()],
    },
    {
        zigbeeModel: ['SURTE door WS 38x64'],
        model: 'L1531',
        vendor: 'IKEA',
        description: 'SURTE door light panel, white spectrum, 38x64 cm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: ['GUNNARP panel round'],
        model: 'T1828',
        vendor: 'IKEA',
        description: 'GUNNARP light panel, round',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: ['GUNNARP panel 40*40'],
        model: 'T1829',
        vendor: 'IKEA',
        description: 'GUNNARP light panel, 40x40 cm',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: ['TRADFRI Light Engine'],
        model: 'T2011',
        vendor: 'IKEA',
        description: 'OSVALLA panel round',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    // #endregion light panels
    // #region other lights
    {
        zigbeeModel: ['NYMANE PENDANT'],
        model: '90504044',
        vendor: 'IKEA',
        description: 'NYMANE pendant lamp',
        extend: [ikeaLight({colorTemp: true}), identify()],
    },
    {
        zigbeeModel: ['Pendant lamp WW'],
        model: 'T2030',
        vendor: 'IKEA',
        description: 'PILSKOTT pendant lamp, warm white',
        extend: [ikeaLight({turnsOffAtBrightness1: true}), identify()],
    },
    {
        zigbeeModel: ['Floor lamp WW'],
        model: 'G2015',
        vendor: 'IKEA',
        description: 'PILSKOTT floor lamp, warm white',
        extend: [ikeaLight(), identify()],
    },
    {
        zigbeeModel: ['ORMANAS LED Strip'],
        model: 'L2112',
        vendor: 'IKEA',
        description: 'ORMANAS LED strip',
        extend: [ikeaLight({colorTemp: true, color: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI transformer 10W',
            'TRADFRI Driver 10W',
        ],
        model: 'ICPSHC24-10EU-IL-1/ICPSHC24-10EU-IL-2',
        vendor: 'IKEA',
        description: 'TRADFRI LED driver, 10 w',
        extend: [ikeaLight({turnsOffAtBrightness1: true}), identify()],
    },
    {
        zigbeeModel: [
            'TRADFRI transformer 30W',
            'TRADFRI Driver 30W',
        ],
        model: 'ICPSHC24-30EU-IL-1/ICPSHC24-10EU-IL-2',
        vendor: 'IKEA',
        description: 'TRADFRI LED driver, 30 w',
        extend: [ikeaLight({turnsOffAtBrightness1: true}), identify()],
    },
    {
        zigbeeModel: ['SILVERGLANS IP44 LED driver'],
        model: 'ICPSHC24-30-IL44-1',
        vendor: 'IKEA',
        description: 'SILVERGLANS LED driver, 30 w, IP44',
        extend: [ikeaLight({turnsOffAtBrightness1: true}), identify()],
    },
    // #endregion other lights
    // #endregion light
    // #region on/off controls
    {
        zigbeeModel: ['TRADFRI control outlet'],
        model: 'E1603/E1702/E1708',
        vendor: 'IKEA',
        description: 'TRADFRI control outlet',
        extend: [
            onOff(),
            identify(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['ASKVADER on/off switch'],
        model: 'E1836',
        vendor: 'IKEA',
        description: 'ASKVADER on/off switch',
        extend: [
            onOff(),
            identify(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['KNYCKLAN receiver'],
        model: 'E1842',
        vendor: 'IKEA',
        description: 'KNYCKLAN electronic dishwasher shut-off unit',
        extend: [
            onOff(),
            iasZoneAlarm({zoneType: 'water_leak', zoneAttributes: ['alarm_1']}),
            identify(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['TRETAKT Smart plug'],
        model: 'E2204',
        vendor: 'IKEA',
        description: 'TRETAKT smart plug',
        extend: [
            onOff(),
            identify(),
            ikeaOta(),
        ],
    },
    // #endregion on/off controls
    // #region blinds
    {
        zigbeeModel: ['FYRTUR block-out roller blind'],
        model: 'E1757',
        vendor: 'IKEA',
        description: 'FYRTUR roller blind, block-out',
        extend: [
            ikeaConfigureGenPollCtrl(),
            windowCovering({controls: ['lift']}),
            identify(),
            ikeaBattery(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['KADRILJ roller blind'],
        model: 'E1926',
        vendor: 'IKEA',
        description: 'KADRILJ roller blind',
        extend: [
            ikeaConfigureGenPollCtrl(),
            windowCovering({controls: ['lift']}),
            identify(),
            ikeaBattery(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['PRAKTLYSING cellular blind'],
        model: 'E2102',
        vendor: 'IKEA',
        description: 'PRAKTLYSING cellular blind',
        extend: [
            ikeaConfigureGenPollCtrl(),
            windowCovering({controls: ['lift']}),
            identify(),
            ikeaBattery(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['TREDANSEN block-out cellul blind'],
        model: 'E2103',
        vendor: 'IKEA',
        description: 'TREDANSEN cellular blind, block-out',
        extend: [
            ikeaConfigureGenPollCtrl(),
            windowCovering({controls: ['lift']}),
            identify(),
            battery({dontDividePercentage: true}),
            ikeaOta(),
        ],
    },
    // #endregion blinds
    // #region appliances
    {
        zigbeeModel: [
            'STARKVIND Air purifier',
            'STARKVIND Air purifier table',
        ],
        model: 'E2007',
        vendor: 'IKEA',
        description: 'STARKVIND air purifier',
        extend: [
            ikeaAirPurifier(),
            identify(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['TRADFRI signal repeater'],
        model: 'E1746',
        vendor: 'IKEA',
        description: 'TRADFRI signal repeater',
        extend: [
            identify(),
            linkQuality({reporting: true}),
            ikeaOta(),
        ],
    },
    // #endregion appliances
    // #region remotes
    {
        zigbeeModel: ['TRADFRI wireless dimmer'],
        model: 'ICTC-G-1',
        vendor: 'IKEA',
        description: 'TRADFRI wireless dimmer',
        extend: [
            identify({isSleepy: true}),
            commandsLevelCtrl({
                commands: ['brightness_move_up', 'brightness_move_down', 'brightness_stop', 'brightness_move_to_level'],
                legacyAction: true,
            }),
            battery({dontDividePercentage: true}),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['TRADFRI remote control'],
        model: 'E1524/E1810',
        vendor: 'IKEA',
        description: 'TRADFRI remote control',
        extend: [
            ikeaConfigureRemote(),
            identify({isSleepy: true}),
            tradfriCommandsOnOff(),
            tradfriCommandsLevelCtrl(),
            ikeaArrowClick(),
            ikeaBattery(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['Remote Control N2'],
        model: 'E2001/E2002',
        vendor: 'IKEA',
        description: 'STYRBAR remote control',
        extend: [
            ikeaConfigureRemote(),
            identify({isSleepy: true}),
            styrbarCommandOn(),
            commandsOnOff({commands: ['off']}),
            commandsLevelCtrl({commands: ['brightness_move_up', 'brightness_move_down', 'brightness_stop']}),
            ikeaArrowClick({styrbar: true}),
            ikeaBattery(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['TRADFRI on/off switch'],
        model: 'E1743',
        vendor: 'IKEA',
        description: 'TRADFRI on/off switch',
        fromZigbee: [ // DEPRECATED
            ikeaLegacy.fromZigbee.E1743_brightness_up,
            ikeaLegacy.fromZigbee.E1743_brightness_down, ikeaLegacy.fromZigbee.E1743_brightness_stop,
        ],
        meta: {disableActionGroup: true},
        extend: [
            ikeaConfigureRemote(),
            identify({isSleepy: true}),
            commandsOnOff({commands: ['on', 'off'], legacyAction: true}),
            commandsLevelCtrl({commands: ['brightness_move_up', 'brightness_move_down', 'brightness_stop']}),
            ikeaBattery(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['KNYCKLAN Open/Close remote'],
        model: 'E1841',
        vendor: 'IKEA',
        description: 'KNYCKLAN open/close water valve remote',
        meta: {disableActionGroup: true},
        extend: [
            ikeaConfigureRemote(),
            identify({isSleepy: true}),
            commandsOnOff({commands: ['on', 'off']}),
            ikeaBattery(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['TRADFRI SHORTCUT Button'],
        model: 'E1812',
        vendor: 'IKEA',
        description: 'TRADFRI shortcut button',
        meta: {disableActionGroup: true},
        extend: [
            identify({isSleepy: true}),
            commandsOnOff({commands: ['on', 'off']}),
            commandsLevelCtrl({commands: ['brightness_move_up', 'brightness_stop']}),
            ikeaBattery(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['SYMFONISK Sound Controller'],
        model: 'E1744',
        vendor: 'IKEA',
        description: 'SYMFONISK sound remote, gen 1',
        fromZigbee: [ // DEPRECATED
            ikeaLegacy.fromZigbee.E1744_play_pause, ikeaLegacy.fromZigbee.E1744_skip,
        ],
        extend: [
            identify({isSleepy: true}),
            commandsOnOff({commands: ['toggle']}),
            commandsLevelCtrl({
                commands: ['brightness_move_up', 'brightness_move_down', 'brightness_stop', 'brightness_step_up', 'brightness_step_down'],
                legacyAction: true,
            }),
            ikeaBattery(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['TRADFRI open/close remote'],
        model: 'E1766',
        vendor: 'IKEA',
        description: 'TRADFRI open/close remote',
        extend: [
            ikeaConfigureRemote(),
            identify({isSleepy: true}),
            commandsWindowCovering({legacyAction: true}),
            ikeaBattery(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['SYMFONISK sound remote gen2'],
        model: 'E2123',
        vendor: 'IKEA',
        description: 'SYMFONISK sound remote, gen 2',
        fromZigbee: [ // DEPRECATED
            ikeaLegacy.fromZigbee.E1744_play_pause,
        ],
        extend: [
            bindCluster({cluster: 'genPollCtrl', clusterType: 'input'}),
            deviceEndpoints({endpoints: {'1': 2, '2': 3}}),
            identify({isSleepy: true}),
            commandsOnOff({commands: ['toggle']}),
            ikeaMediaCommands(),
            ikeaDotsClick({endpointNames: ['1', '2'], dotsPrefix: true}),
            battery({voltage: true}),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['RODRET Dimmer'],
        model: 'E2201',
        vendor: 'IKEA',
        description: 'RODRET wireless dimmer/power switch',
        extend: [
            bindCluster({cluster: 'genPollCtrl', clusterType: 'input'}),
            identify({isSleepy: true}),
            commandsOnOff({commands: ['on', 'off']}),
            commandsLevelCtrl({commands: ['brightness_move_up', 'brightness_move_down', 'brightness_stop']}),
            battery(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['SOMRIG shortcut button'],
        model: 'E2213',
        vendor: 'IKEA',
        description: 'SOMRIG shortcut button',
        extend: [
            bindCluster({cluster: 'genPollCtrl', clusterType: 'input'}),
            deviceEndpoints({endpoints: {'1': 1, '2': 2}}),
            identify({isSleepy: true}),
            ikeaDotsClick({endpointNames: ['1', '2']}),
            battery(),
            ikeaOta(),
        ],
    },
    // #endregion remotes
    // #region sensors
    {
        zigbeeModel: ['TRADFRI motion sensor'],
        model: 'E1525/E1745',
        vendor: 'IKEA',
        description: 'TRADFRI motion sensor',
        extend: [
            forcePowerSource({powerSource: 'Battery'}),
            tradfriOccupancy(),
            tradfriRequestedBrightness(),
            identify({isSleepy: true}),
            ikeaBattery(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['VINDSTYRKA'],
        model: 'E2112',
        vendor: 'IKEA',
        description: 'VINDSTYRKA air quality and humidity sensor',
        extend: [
            temperature(),
            humidity(),
            pm25({
                // IKEA used conflicting date type on a standart attribute
                attribute: {ID: 0x0000, type: dataType.singlePrec},
                reporting: {min: '1_MINUTE', max: '2_MINUTES', change: 2},
            }),
            ikeaVoc(),
            identify(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['VALLHORN Wireless Motion Sensor'],
        model: 'E2134',
        vendor: 'IKEA',
        description: 'VALLHORN wireless motion sensor',
        extend: [
            occupancy(),
            illuminance(),
            identify({isSleepy: true}),
            battery(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['PARASOLL Door/Window Sensor'],
        model: 'E2013',
        vendor: 'IKEA',
        description: 'PARASOLL door/window sensor',
        extend: [
            bindCluster({cluster: 'genPollCtrl', clusterType: 'input'}),
            iasZoneAlarm({zoneType: 'contact', zoneAttributes: ['alarm_1']}),
            identify({isSleepy: true}),
            battery(),
            ikeaOta(),
        ],
    },
    {
        zigbeeModel: ['BADRING Water Leakage Sensor'],
        model: 'E2202',
        vendor: 'IKEA',
        description: 'BADRING water leakage sensor',
        extend: [
            iasZoneAlarm({zoneType: 'water_leak', zoneAttributes: ['alarm_1']}),
            identify({isSleepy: true}),
            battery(),
            ikeaOta(),
        ],
    },
    // #endregion sensors
];

export default definitions;
module.exports = definitions;
