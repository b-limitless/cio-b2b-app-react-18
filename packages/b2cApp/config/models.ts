import { defaultPrices } from './default';

export const modelsURL = {
  shirt: '/models/shirt/shirt-v5.glb',
  buttonsWholes: '/models/shirt/buttons-wholes.glb',
  buttons: '/models/button/buttons-draco.glb',
  pocket: '/models/shirt/pocket.glb',
  frontPlacket: '/models/shirt/front-placket.glb',
  sleev: '/models/sleev/sleev.glb',
};

export enum EProductType {
  shirt = 'shirt',
  pant = 'pant',
  suit = 'suit',
}

export enum EDefault {
  Default = 'default',
}

export enum EAccentAttrs {
   InnerFebric='innerFebric'
}

export enum EStyles {
  Collar = 'collar',
  Cuff = 'cuff',
  Chestpocket = 'chestpocket',
}

export enum EAccent {
  ButtonWholeStitch = 'buttonWholeAndStitch',
  Collar = 'collar',
  Cuff = 'cuff',
  ButtonColors = 'buttonColors',
  FrontPlacket = 'frontPlacket',
}

export enum EAccentChildrens {
  Default = 'DefaultButtonWholeColor',
  All = 'ButtonWholeColorAll',
  CuffOnly = 'ButtonWholeColorCuffOnly',
}

export enum EAccentButtonColor {
  Default = 'ButtonColorDefault',
  All = 'ButtonColorAll',
  CuffOnly = 'ButtonColorCuffOnly',
}

export enum EAccentFrontPacket {
  Default = 'defaultFrontPacket',
  All = 'allFrontPacket',
}

export enum ECuffs {
  SingleOneButtonCuff = 'singleOneButtonCuff',
  DoubleButtonCuff = 'DoubleButtonCuff',
  OneButtonCut='OneButtonCut', 
  RoundedOneButton='RoundedOneButton', 
  RoundedTwoButton='RoundedTwoButton', 
  DoubleSqure='DoubleSqure', 
  TwoButonCut='TwoButonCut'
}

export enum ECollars {
  ButtonDown = 'buttonDown',
  Club = 'club',
  CutWay = 'cutway',
  StandUp = 'standup',
  wing = 'wing',
  Rounded = 'rounded',
}

const buffButtonMeshNames = [
  'right-top-button',
  'right-bottom-button',
  'left-top-button',
  'left-bottom-button',
];

/**
 * Refactor this code because if the meshNames are constant for the cuffs and the collars then
 * it does not need to pass for each elemehts store somewhere with variable and access them
 * buttonsMeshNames: [
          'right-top-button',
          'right-bottom-button',
          'left-top-button',
          'left-bottom-button',
        ],
        buttonWholeMeshNames: [
          'right-top-button-whole',
          'right-bottom-button-whole',
          'left-top-button-whole',
          'left-bottom-button-whole'
        ],
  
 * **/


export enum ECuffStyles {

}
export const productStyles = [
  {
    label: 'collars',
    code: EStyles.Collar,
    childrens: [
      {
        id: 1,
        label: 'button down',
        code: ECollars.ButtonDown,
        modelURL: `/models/collars/collar-button-down.glb`,
        iconClass: 'icon-65',
        buttonsMeshNames: ['MatShape_16796_Node', 'MatShape_16804_Node'],
        buttonWholeMeshNames: ['Collar_2_Node', 'Collar_3_Node'],
      },
      {
        id: 2,
        label: 'club',
        code: ECollars.Club,
        modelURL: `/models/collars/collar-club.glb`,
        iconClass: 'icon-59',
        buttonsMeshNames: [],
        buttonWholeMeshNames: [],
      },
      {
        id: 3,
        label: 'cutway',
        code: ECollars.CutWay,
        modelURL: `/models/collars/cutway-1.glb`,
        iconClass: 'icon-62',
        buttonsMeshNames: [],
        buttonWholeMeshNames: [],
      },
      {
        id: 3,
        label: 'stand up',
        code: ECollars.StandUp,
        modelURL: `/models/collars/stand-up-collar.glb`,
        iconClass: 'icon-66',
        buttonsMeshNames: [],
        buttonWholeMeshNames: [],
      },
      {
        id: 3,
        label: 'wing',
        code: ECollars.wing,
        modelURL: `/models/collars/collar-wing.glb`,
        iconClass: 'icon-67',
      },
      {
        id: 3,
        label: 'rounded',
        code: ECollars.Rounded,
        modelURL: `/models/collars/collar-rounded.glb`,
        iconClass: 'icon-64',
      },
    ],
  },
  {
    label: 'cuffs',
    code: EStyles.Cuff,
    childrens: [
      {
        id: 5,
        label: 'single 1 button',
        code: ECuffs.SingleOneButtonCuff,
        mediaUrl: '/icon/cuff/french.svg',
        modelURL: `/models/cuffs/single-button-cuff.glb`,
        iconClass: 'icon-68',
        buttonsMeshNames: ['right-top-button', 'left-top-button'],
        buttonWholeMeshNames: ['right-top-button-whole', 'left-top-button-whole'],
      },
      {
        id: 6,
        label: 'double 2 buttons',
        code: ECuffs.DoubleButtonCuff,
        mediaUrl: '/icon/cuff/one-button.svg',
        modelURL: `/models/cuffs/two-buttons-cuff.glb`,
        iconClass: 'icon-69',
        buttonsMeshNames: [
          'right-top-button',
          'right-bottom-button',
          'left-top-button',
          'left-bottom-button',
        ],
        buttonWholeMeshNames: [
          'right-top-button-whole',
          'right-bottom-button-whole',
          'left-top-button-whole',
          'left-bottom-button-whole',
        ],
      },
      {
        id: 7,
        label: 'one button cut',
        code: ECuffs.OneButtonCut,
        modelURL: `/models/cuffs/one-button-cut-cuff.glb`,
        iconClass: 'icon-76',
        buttonsMeshNames: ['right-top-button', 'left-top-button'],
        buttonWholeMeshNames: ['right-top-button-whole', 'left-top-button-whole'],
      },
      {
        id: 7,
        label: 'rounded 1 button',
        code: ECuffs.RoundedOneButton,
        modelURL: `/models/cuffs/round-single-button-cuff.glb`,
        iconClass: 'icon-77',
        buttonsMeshNames: ['right-top-button', 'left-top-button'],
        buttonWholeMeshNames: ['right-top-button-whole', 'left-top-button-whole'],
      },
      {
        id: 7,
        label: 'rounded 2 button',
        code: ECuffs.RoundedTwoButton,
        modelURL: `/models/cuffs/round-double-button-cuff.glb`,
        iconClass: 'icon-78',
        buttonsMeshNames: [
          'right-top-button',
          'right-bottom-button',
          'left-top-button',
          'left-bottom-button',
        ],
        buttonWholeMeshNames: [
          'right-top-button-whole',
          'right-bottom-button-whole',
          'left-top-button-whole',
          'left-bottom-button-whole',
        ],
      },
      {
        id: 7,
        label: 'double squared',
        code: ECuffs.DoubleSqure,
        mediaUrl: '/icon/cuff/three-button.svg',
        modelURL: `/models/cuffs/rouble-squre-cuff.glb`,
        iconClass: 'icon-78',
        buttonsMeshNames: [
          'right-top-button',
          'right-bottom-button',
          'left-top-button',
          'left-bottom-button',
        ],
        buttonWholeMeshNames: [
          'right-top-button-whole',
          'right-bottom-button-whole',
          'left-top-button-whole',
          'left-bottom-button-whole',
        ],
      },
      {
        id: 4,
        label: 'Two button cut',
        code: ECuffs.TwoButonCut,
        modelURL: `/models/cuffs/two-button-cut-cuff.glb`,
        iconClass: 'icon-78',
        buttonsMeshNames: [
          'right-top-button',
          'right-bottom-button',
          'left-top-button',
          'left-bottom-button',
        ],
        buttonWholeMeshNames: [
          'right-top-button-whole',
          'right-bottom-button-whole',
          'left-top-button-whole',
          'left-bottom-button-whole',
        ],
      },
    ],
  },
  {
    label: 'Chestpocket',
    code: EStyles.Chestpocket,
    childrens: [
      {
        id: null,
        label: 'No Poacket',
        code: 'noPocket',
        iconClass: 'icon-57',
      },
      {
        id: 1,
        label: 'Standard',
        code: 'standardPocket',
        iconClass: 'icon-70',
      },
    ],
  },
];

export const accentsStyles = [
  {
    label: 'Contrasted Collor',
    code: EAccent.Collar,
    childrens: [
      {
        id: 1,
        label: 'default',
        code: 'default',
        meshName: [],
        price: defaultPrices.collar,
        iconClass: 'icon-62',
      },
      {
        id: 2,
        label: 'All',
        code: 'all',
        // meshName: ['Collar_Node', 'Collar_Stand_Node'],
        meshName: ['Collar_Node', 'Collar_Stand_Node'],
        price: defaultPrices.collar + 10,
        iconClass: 'icon-42',
      },
      {
        id: 3,
        label: 'Inner Febric($2)',
        code: 'innerFebric',
        meshName: ['Collar_Stand_Node'],
        price: defaultPrices.collar + 10,
        iconClass: 'icon-79',
      },
    ],
  },
  {
    label: 'Contrasted cuff',
    code: EAccent.Cuff,
    childrens: [
      {
        id: 5,
        label: 'By Default',
        code: 'default',
        mediaUrl: '/icon/cuff/french.svg',
        meshName: ['left_upper', 'right_upper', 'left_inner', 'right_inner'],
        iconClass: 'icon-77',
      },
      {
        id: 6,
        label: 'All',
        code: 'all',
        meshName: ['left_upper', 'right_upper', 'left_inner', 'right_inner'],
        iconClass: 'icon-45',
      },
      {
        id: 7,
        label: 'Inner Febric',
        code: 'innerFebric',

        meshName: ['left_inner', 'right_inner'],
        iconClass: 'icon-44',
      },
    ],
  },
  {
    label: 'Contrasting button whole/stitch',
    code: EAccent.ButtonWholeStitch,
    childrens: [
      {
        id: 1,
        label: 'default',
        code: EAccentChildrens.Default,

        meshName: [],
        price: defaultPrices.collar,
        iconClass: 'icon-55',
      },
      {
        id: 2,
        label: 'All',
        code: EAccentChildrens.All,

        meshName: [],
        price: defaultPrices.collar,
        iconClass: 'icon-52',
      },
    ],
  },
  {
    label: 'Button colors',
    code: EAccent.ButtonColors,
    childrens: [
      {
        id: 1,
        label: 'default',
        code: EAccentButtonColor.Default,

        meshName: [],
        price: defaultPrices.collar,
        iconClass: 'icon-53',
      },
      {
        id: 2,
        label: 'All',
        code: EAccentButtonColor.All,

        meshName: [],
        price: defaultPrices.collar,
        iconClass: 'icon-21',
      },
    ],
  },
  {
    label: 'Front Packet',
    code: EAccent.FrontPlacket,
    childrens: [
      {
        id: 1,
        label: 'default',
        code: EAccentFrontPacket.Default,

        meshName: [],
        price: defaultPrices.collar,
        iconClass: 'icon-52',
      },
      {
        id: 2,
        label: 'All',
        code: EAccentFrontPacket.All,

        meshName: [],
        price: defaultPrices.collar,
        iconClass: 'icon-58',
      },
    ],
  },
];
