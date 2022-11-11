/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',wx4ccc41f1f2c1ff96

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',7587e38056dec1fce1694ec2fa77fc44

  PROVINCE: '河南',
  CITY: '郑州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-08',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1999', date: '05-08',
        },
       
          type: '节日', name: '相识纪念日', year: '2022', date: '06-09',
        },
      ],
      // 我们在一起已经有118天了
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-05-08' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',oLmU26P4VKW5zg7DtdUfM2r9awfs

  CALLBACK_USERS: [oLmU26P4VKW5zg7DtdUfM2r9awfs
    {
      name: '自己',oLmU26P4VKW5zg7DtdUfM2r9awfs
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

