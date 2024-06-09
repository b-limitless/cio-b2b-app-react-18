const state = {
    model: {
      collar: {
        id: 12,
        model: '/models/collars/collar-1-1.glb?timestamp=1704705022516',
        price: 0,
        title: 'Default collar model',
        label: 'default',
        code: 'default'
      },
      cuff: {
        id: 12,
        model: '/models/cuffs/cuff-1-normal.glb?timestamp=1704705022516',
        price: 0,
        title: 'default cuff model',
        label: 'default',
        code: 'default'
      }
    },
    accent: {
      collar: {
        id: 0,
        febric: '/img/febric1.jpg',
        price: 10,
        meshName: [
          'Collor_Inner'
        ],
        type: 'innerFebric',
        updatedFrom: 'accents'
      },
      cuff: {
        id: 12,
        febric: '/img/texture/texture-1.jpg',
        type: 'default',
        meshName: [],
        updatedFrom: 'febrics',
        price: 10
      }
    },
    modelType: {
      modelType: 'shirt'
    },
    cart: [
      {
        originalImageUrl: 'https://res.cloudinary.com/dun5p8e5d/image/upload/v1704706752/images/ABC/ishmlqzca3hi4letgije.png',
        thumbnailImageUrl: 'https://res.cloudinary.com/dun5p8e5d/image/upload/v1704706758/thumbnails/ABC/w9fuz2hb2t2mc0p9tuv0.png',
        model: {
          collar: {
            id: 12,
            model: '/models/collars/collar-1-1.glb?timestamp=1704705022516',
            price: 0,
            title: 'Default collar model',
            label: 'default',
            code: 'default'
          },
          cuff: {
            id: 12,
            model: '/models/cuffs/cuff-1-normal.glb?timestamp=1704705022516',
            price: 0,
            title: 'default cuff model',
            label: 'default',
            code: 'default'
          }
        },
        accent: {
          collar: {
            id: 12,
            febric: '/img/texture/texture-1.jpg',
            type: 'default',
            meshName: [],
            updatedFrom: 'febrics',
            price: 10
          },
          cuff: {
            id: 12,
            febric: '/img/texture/texture-1.jpg',
            type: 'default',
            meshName: [],
            updatedFrom: 'febrics',
            price: 10
          }
        },
        modelType: 'shirt',
        subTotal: 30,
        qty: 1,
        discount: 0,
        availability: '',
        id: 1,
        deliveryTime: '3 weeks',
        febric: {
          id: 12,
          model: '/img/texture/texture-1.jpg',
          price: 10,
          title: '',
          material: 'Cotton',
          tone: 'light',
          febricTypes: 'Cotton',
          season: 'summer',
          label: 'default',
          code: 'default',
          originalImageUrl: '/img/texture/texture-1.jpg'
        }
      },
      {
        originalImageUrl: 'https://res.cloudinary.com/dun5p8e5d/image/upload/v1704707246/images/ABC/yhwkwlbuyaknfobapy48.png',
        thumbnailImageUrl: 'https://res.cloudinary.com/dun5p8e5d/image/upload/v1704707252/thumbnails/ABC/fo2gjdf23uc3jtipp3zm.png',
        model: {
          collar: {
            model: '/models/collars/collar-1-1.glb?timestamp=1704707235110',
            id: 3,
            label: 'cutway',
            code: 'cutway',
            mediaUrl: '/icon/collars/cutway.svg'
          },
          cuff: {
            id: 12,
            model: '/models/cuffs/cuff-1-normal.glb?timestamp=1704705022516',
            price: 0,
            title: 'default cuff model',
            label: 'default',
            code: 'default'
          }
        },
        accent: {
          collar: {
            id: 12,
            febric: '/img/febric-5.jpg?timestamp=1704706771589?timestamp=1704706772625?timestamp=1704706774374?timestamp=1704707235111',
            type: 'default',
            meshName: [],
            updatedFrom: 'febrics',
            price: 10
          },
          cuff: {
            id: 0,
            febric: '/img/febric1.jpg',
            price: 10,
            meshName: [],
            type: 'all',
            updatedFrom: 'accents'
          }
        },
        modelType: 'shirt',
        subTotal: 50,
        qty: 1,
        discount: 0,
        availability: '',
        id: 4,
        deliveryTime: '3 weeks',
        febric: {
          id: 1,
          model: '/img/febric-5.jpg',
          price: 30,
          title: 'XYZ',
          material: 'Cotton 80 %',
          tone: 'light',
          febricTypes: 'string',
          season: 'summer',
          label: 'default',
          code: 'default',
          originalImageUrl: '/img/febric-5.jpg'
        }
      },
      {
        originalImageUrl: 'https://res.cloudinary.com/dun5p8e5d/image/upload/v1704707204/images/ABC/jfocdplaxf10kns2md2y.png',
        thumbnailImageUrl: 'https://res.cloudinary.com/dun5p8e5d/image/upload/v1704707210/thumbnails/ABC/vmnndwvdi5zjcv8wuzfi.png',
        model: {
          collar: {
            model: '/models/collars/collar-1-1.glb?timestamp=1704706814503',
            id: 3,
            label: 'cutway',
            code: 'cutway',
            mediaUrl: '/icon/collars/cutway.svg'
          },
          cuff: {
            model: '/models/cuffs/cuff-3-normal.glb?timestamp=1704706818261',
            id: 7,
            label: 'three button',
            code: 'button_down',
            mediaUrl: '/icon/cuff/three-button.svg'
          }
        },
        accent: {
          collar: {
            id: 0,
            febric: '/img/febric1.jpg',
            price: 10,
            meshName: [
              'Collar_Top',
              'Collor_Button_Holder',
              'Collor_Inner',
              'Node_5'
            ],
            type: 'all',
            updatedFrom: 'accents'
          },
          cuff: {
            id: 1,
            febric: '/img/febric-5.jpg',
            price: 20,
            meshName: [],
            type: 'all',
            updatedFrom: 'accents'
          }
        },
        modelType: 'shirt',
        subTotal: 60,
        qty: 1,
        discount: 0,
        availability: '',
        id: 4,
        deliveryTime: '3 weeks',
        febric: {
          id: 1,
          model: '/img/febric-5.jpg',
          price: 30,
          title: 'XYZ',
          material: 'Cotton 80 %',
          tone: 'light',
          febricTypes: 'string',
          season: 'summer',
          label: 'default',
          code: 'default',
          originalImageUrl: '/img/febric-5.jpg'
        }
      },
      {
        originalImageUrl: 'https://res.cloudinary.com/dun5p8e5d/image/upload/v1704707293/images/ABC/wlk8zt14ay5dqea6jdpm.png',
        thumbnailImageUrl: 'https://res.cloudinary.com/dun5p8e5d/image/upload/v1704707298/thumbnails/ABC/c9hgiqe4gz0breh4hg3a.png',
        model: {
          collar: {
            id: 12,
            model: '/models/collars/collar-1-1.glb?timestamp=1704705022516',
            price: 0,
            title: 'Default collar model',
            label: 'default',
            code: 'default'
          },
          cuff: {
            id: 12,
            model: '/models/cuffs/cuff-1-normal.glb?timestamp=1704705022516',
            price: 0,
            title: 'default cuff model',
            label: 'default',
            code: 'default'
          }
        },
        accent: {
          collar: {
            id: 1,
            febric: '/img/febric-5.jpg',
            price: 20,
            meshName: [
              'Collor_Inner'
            ],
            type: 'innerFebric',
            updatedFrom: 'accents'
          },
          cuff: {
            id: 12,
            febric: '/img/febric1.jpg',
            type: 'default',
            meshName: [],
            updatedFrom: 'febrics',
            price: 10
          }
        },
        modelType: 'shirt',
        subTotal: 50,
        qty: 1,
        discount: 0,
        availability: '',
        id: 4,
        deliveryTime: '3 weeks',
        febric: {
          id: 0,
          model: '/img/febric1.jpg',
          price: 20,
          title: '',
          material: 'Cotton',
          tone: 'light',
          febricTypes: 'string',
          season: 'summer',
          label: 'default',
          code: 'default',
          originalImageUrl: '/img/febric1.jpg'
        }
      },
      {
        originalImageUrl: 'https://res.cloudinary.com/dun5p8e5d/image/upload/v1704707341/images/ABC/xwiedtwl1v5zfkdpic1z.png',
        thumbnailImageUrl: 'https://res.cloudinary.com/dun5p8e5d/image/upload/v1704707348/thumbnails/ABC/slabbulkpv7aeiemsfv5.png',
        model: {
          collar: {
            id: 12,
            model: '/models/collars/collar-1-1.glb?timestamp=1704705022516',
            price: 0,
            title: 'Default collar model',
            label: 'default',
            code: 'default'
          },
          cuff: {
            id: 12,
            model: '/models/cuffs/cuff-1-normal.glb?timestamp=1704705022516',
            price: 0,
            title: 'default cuff model',
            label: 'default',
            code: 'default'
          }
        },
        accent: {
          collar: {
            id: 0,
            febric: '/img/febric1.jpg',
            price: 10,
            meshName: [
              'Collor_Inner'
            ],
            type: 'innerFebric',
            updatedFrom: 'accents'
          },
          cuff: {
            id: 12,
            febric: '/img/texture/texture-1.jpg',
            type: 'default',
            meshName: [],
            updatedFrom: 'febrics',
            price: 10
          }
        },
        modelType: 'shirt',
        subTotal: 30,
        qty: 1,
        discount: 0,
        availability: '',
        id: 5,
        deliveryTime: '3 weeks',
        febric: {
          id: 12,
          model: '/img/texture/texture-1.jpg',
          price: 10,
          title: '',
          material: 'Cotton',
          tone: 'light',
          febricTypes: 'Cotton',
          season: 'summer',
          label: 'default',
          code: 'default',
          originalImageUrl: '/img/texture/texture-1.jpg'
        }
      }
    ],
    cartIndexToupdate: {
      index: 0
    },
    febric: {
      id: 12,
      model: '/img/texture/texture-1.jpg',
      price: 10,
      title: '',
      material: 'Cotton',
      tone: 'light',
      febricTypes: 'Cotton',
      season: 'summer',
      label: 'default',
      code: 'default',
      originalImageUrl: '/img/texture/texture-1.jpg'
    }
  }