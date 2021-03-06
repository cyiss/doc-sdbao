// 具体接口数据

// 表格展示字段
const columns = (() => {
  const key = { title: '字段', key: 'key', indent: true }
  const name = { title: '名称', key: 'name' }
  const type = { title: '类型', key: 'type' }
  const isReq = { title: '必传', key: 'isReq' }
  const desc = { title: '备注', key: 'desc' }

  return {
    key,
    name,
    type,
    isReq,
    desc,
    interface: [key, name, type, isReq, desc]
  }
})()

const defaults_key = {
  supplierNo: {
    key: 'supplierNo',
    name: '合作商编号',
    type: 'String',
    isReq: 'Y',
    desc: '水滴公司分配给合作商的标识码'
  },
  code: {
    key: 'code',
    name: '本次请求执行的状态',
    type: 'Integer',
    isReq: 'Y',
    desc: '成功：0；失败：1（失败时errorMsg和errorCode必传）'
  },
  errorCode: {
    key: 'errorCode',
    name: '错误编码',
    type: 'String',
    isReq: 'Y',
    desc: '保险公司内部的错误编码，方便排查问题'
  },
  errorMsg: {
    key: 'errorMsg',
    name: '状态的描述',
    type: 'String',
    isReq: 'Y',
    desc: ''
  },
  orderNo: {
    key: 'orderNo',
    name: '水滴订单号',
    type: 'String',
    isReq: 'Y',
    desc: ''
  },
  supplierProductNo: {
    key: 'supplierProductNo',
    name: '附加险编号',
    type: 'String',
    isReq: 'Y',
    desc: ''
  },
  applyNum: {
    key: 'applyNum',
    name: '投保份数',
    type: 'Integer',
    isReq: 'Y',
    desc: ''
  },
  premium: {
    key: 'premium',
    name: '年化保费',
    type: 'Integer',
    isReq: 'Y',
    desc: ''
  },
  proposalNo: {
    key: 'proposalNo',
    name: '投保单号',
    type: 'String',
    isReq: 'Y',
    desc: ''
  },
  proposalTime: {
    key: 'proposalTime',
    name: '核保时间',
    type: 'String',
    isReq: 'Y',
    desc: 'yyyy-MM-dd HH:mm:ss'
  },
  amont: {
    key: 'amount',
    name: '保额',
    type: 'Long',
    isReq: 'Y',
    desc: ''
  },
  totalPremium: {
    key: 'totalPremium',
    name: '年化保费',
    type: 'Long',
    isReq: 'Y',
    desc: ''
  },
  totalAmount: {
    key: 'totalAmount',
    name: '总保额',
    type: 'Long',
    isReq: 'Y',
    desc: ''
  },
  periodType: {
    key: 'periodType',
    name: '续费类型',
    type: 'Integer',
    isReq: 'Y',
    desc: '1.一次付清；2.分次交费'
  },
  totalPeriod: {
    key: 'totalAmount',
    name: '总交费期数',
    type: 'Integer',
    isReq: 'Y',
    desc:
      '总的交费期数（举例，一月交一次，交一年：periodFrequency=1，totalPeriod=12）'
  },
  issueTime: {
    key: 'issueTime',
    name: '投保时间',
    type: 'String',
    isReq: 'Y',
    desc: 'yyyy-MM-dd HH:mm:ss'
  },
  relType: {
    key: 'relType',
    name: '和投保人关系',
    type: 'Integer',
    isReq: 'Y',
    desc: '1：本人 2：配偶 3：父母 4：子女 0：其他'
  },
  hasSocial: {
    key: 'hasSocial',
    name: '是否参加社保',
    type: 'Boolean',
    isReq: 'Y',
    desc: ''
  },
  effectTime: {
    key: 'effectTime',
    name: '保单生效时间',
    type: 'String',
    isReq: 'Y',
    desc: 'yyyy-MM-dd HH:mm:ss'
  },
  invalidTime: {
    key: 'invalidTime',
    name: '保单失效时间',
    type: 'String',
    isReq: 'Y',
    desc: 'yyyy-MM-dd HH:mm:ss'
  },
  protectPeriodType: {
    key: 'protectPeriodType',
    name: '保障期限类型',
    type: 'Integer',
    isReq: 'Y',
    desc: '1按天保2按月保3按年保4保至某确定年龄5保终身'
  },
  protectPeriodValue: {
    key: 'protectPeriodValue',
    name: '保障期限',
    type: 'Integer',
    isReq: 'Y',
    desc: 'protectPeriodType为5时该字段固定为0'
  },
    firstPeriodPremium: {
        key: 'firstPeriodPremium',
        name: '首期保费',
        type: 'Long',
        isReq: 'Y',
        desc: ''
    },
    payPeriodType: {
        key: 'payPeriodType',
        name: '交费期限类型',
        type: 'Integer',
        isReq: 'Y',
        desc: '1：趸交2按年限交3交至某确定年龄'
    },
    payPeriodValue: {
        key: 'payPeriodValue',
        name: '交费年限',
        type: 'Integer',
        isReq: 'Y',
        desc: '趸交时为0'
    },
    payFrequency: {
        key: 'payFrequency',
        name: '交费频率',
        type: 'Integer',
        isReq: 'Y',
        desc: '0：趸交；1：月缴；2：季度缴；3：半年缴；4：年缴；'
    },
    isRenewPolicy: {
        key: 'isRenewPolicy',
        name: '是否是续保订单',
        type: 'Boolean',
        isReq: 'Y',
        desc: ''
    },
    parentPolicyNo: {
        key: 'parentPolicyNo',
        name: '原始保单号',
        type: 'String',
        isReq: 'N',
        desc: '续保订单时使用'
    },
    familyBasePolicy: {
        key: 'familyBasePolicy',
        name: '家庭基础保单号',
        type: 'String',
        isReq: 'N',
        desc: '只有家庭单，非首单才有'
    },
    productChannel: {
        key: 'productChannel',
        name: '销售渠道',
        type: 'Integer',
        isReq: 'N',
        desc: '1：电销共建；5：网电共建'
    },
    saleNo: {
        key: 'saleNo',
        name: '销售人编码',
        type: 'String',
        isReq: 'N',
        desc: ''
    },
    idValidType: {
        key: 'idValidType',
        name: '证件有效期类型',
        type: 'Integer',
        isReq: 'N',
        desc: '1.到期失效；2：永久有效'
    },
    idValidDay: {
        key: 'idValidDay',
        name: '证件有效期截止时间',
        type: 'String',
        isReq: 'N',
        desc: 'idValidType为2时可以为空，格式为: yyyy-MM-dd'
    },
    height: {
        key: 'height',
        name: '身高',
        type: 'String',
        isReq: 'N',
        desc: '单位：厘米（支持一位小数）'
    },
    weight: {
        key: 'weight',
        name: '体重',
        type: 'String',
        isReq: 'N',
        desc: '单位：千克（支持一位小数）'
    },
    occupation: {
        key: 'occupation',
        name: '职业',
        type: 'String',
        isReq: 'N',
        desc: ''
    },
    annualEarnings: {
        key: 'annualEarnings',
        name: '年收入',
        type: 'String',
        isReq: 'N',
        desc: '单位：万元（支持一位小数）'
    },
  payTime: {
    key: 'payTime',
    name: '支付时间',
    type: 'String',
    isReq: 'Y',
    desc: 'yyyy-MM-dd HH:mm:ss'
  },
  refundReqTime: {
    key: 'refundReqTime',
    name: '退保请求时间',
    type: 'String',
    isReq: 'Y',
    desc: '本次退保，水滴公司第一次发起请求的时间'
  },
  refundEffectTime: {
    key: 'refundEffectTime',
    name: '退保生效时间',
    type: 'String',
    isReq: 'Y',
    desc: 'yyyy-MM-dd HH:mm:ss'
  },
  refundTime: {
    key: 'refundTime',
    name: '保险公司操作的退保时间',
    type: 'String',
    isReq: 'Y',
    desc: 'yyyy-MM-dd HH:mm:ss'
  },
  refundType: {
    key: 'refundType',
    name: '操作类型',
    type: 'Integer',
    isReq: 'Y',
    desc: '0：有效期内用户发起退保；1：分期产品，超过宽限期未续费自动退保'
  },
    refundMoneyType: {
        key: 'refundMoneyType',
        name: '退保类型',
        type: 'Integer',
        isReq: 'N',
        desc: 'refundType为0时必传；；；0：正常，按照退款试算接口返回的金额退款；1：全额退款；2：退当期保费'
    },
    refundActPremium: {
        key: 'refundActPremium',
        name: '实际退款金额',
        type: 'Long',
        isReq: 'N',
        desc: 'refundType为0时必传；；；申请退款的实际退款金额，若对本退款金额有异议，保险公司请务必返回失败'
    },
  policyUrl: {
    key: 'policyUrl',
    name: '电子保单Url',
    type: 'String',
    isReq: 'N',
    desc: ''
  },
  policyNo: {
    key: 'policyNo',
    name: '保单号',
    type: 'String',
    isReq: 'Y',
    desc: ''
  },
  policyTime: {
    key: 'policyTime',
    name: '保险公司出单时间',
    type: 'String',
    isReq: 'N',
    desc: 'yyyy-MM-dd HH:mm:ss'
  },
  refundPremium: {
    key: 'refundPremium',
    name: '应退保费',
    type: 'Long',
    isReq: 'N',
    desc: '由水滴保线上操作退款时必传'
  },
  refundMoney: {
    key: 'refundMoney',
    name: '应退金额',
    type: 'Long',
    isReq: 'Y',
    desc: ''
  },
  payPremiun: {
    key: 'payPremiun',
    name: '本次支付保费',
    type: 'Long',
    isReq: 'Y',
    desc: ''
  },
  periodNum: {
    key: 'periodNum',
    name: '本次期数',
    type: 'Integer',
    isReq: 'Y',
    desc: '2、3、4'
  },
  UserInfo: [
    {
      key: 'name',
      name: '姓名',
      type: 'String',
      isReq: 'Y',
      desc: ''
    },
    {
      key: 'idType',
      name: '证件类型',
      type: 'Integer',
      isReq: 'Y',
      desc: '见附录'
    },
    {
      key: 'idCode',
      name: '证件号码',
      type: 'String',
      isReq: 'Y',
      desc: ''
    },
      {
          key: 'idValidType',
          name: '证件有效期类型',
          type: 'Integer',
          isReq: 'N',
          desc: '1.到期失效；2：永久有效'
      },
      {
          key: 'idValidDay',
          name: '证件有效期截止时间',
          type: 'String',
          isReq: 'N',
          desc: 'idValidType为2时可以为空，格式为: yyyy-MM-dd'
      },

    {
      key: 'gender',
      name: '性别',
      type: 'Integer',
      isReq: 'N',
      desc: '1男2女'
    },
    {
      key: 'birthday',
      name: '出生日期',
      type: 'String',
      isReq: 'N',
      desc: 'yyyy-MM-dd'
    },
      {
          key: 'height',
          name: '身高',
          type: 'String',
          isReq: 'N',
          desc: '单位：厘米（支持一位小数）'
      },
      {
        key: 'weight',
        name: '体重',
        type: 'String',
        isReq: 'N',
        desc: '单位：千克（支持一位小数）'
      },
      {
        key: 'occupation',
        name: '职业',
        type: 'String',
        isReq: 'N',
        desc: ''
      },
      {
        key: 'annualEarnings',
        name: '年收入',
        type: 'String',
        isReq: 'N',
        desc: '单位：万元（支持一位小数）'
      },
    {
      key: 'mobile',
      name: '手机号',
      type: 'String',
      isReq: 'N',
      desc: ''
    },
    {
      key: 'mail',
      name: '邮箱',
      type: 'String',
      isReq: 'N',
      desc: ''
    },
    {
      key: 'bankCode',
      name: '银行编码',
      type: 'String',
      isReq: 'N',
      desc: ''
    },
    {
      key: 'bankNo',
      name: '银行卡号',
      type: 'String',
      isReq: 'N',
      desc: ''
    },
    {
      key: 'province',
      name: '省',
      type: 'String',
      isReq: 'N',
      desc: ''
    },
    {
      key: 'city',
      name: '市',
      type: 'String',
      isReq: 'N',
      desc: ''
    },
    {
      key: 'district',
      name: '区',
      type: 'String',
      isReq: 'N',
      desc: ''
    },
    {
      key: 'address',
      name: '详细地址',
      type: 'String',
      isReq: 'N',
      desc: ''
    }
  ],
    periodOrderNo: {
        key: 'periodOrderNo',
        name: '续期订单号',
        type: 'String',
        isReq: 'Y',
        desc: '每期唯一'
    }
}

const interfaces = {
  核保请求: [
    defaults_key.supplierNo,
    {
      key: 'body',
      name: '请求主体',
      type: 'ProposalOrderRequestBody',
      isReq: 'Y',
      desc: '',
      children: [
        {
          key: 'orderInfo',
          name: '订单信息',
          type: 'OrderInfo',
          isReq: 'Y',
          desc: '',
          children: [
            defaults_key.orderNo,
            {
              key: 'productNo',
              name: '水滴产品编码',
              type: 'String',
              isReq: 'Y',
              desc: '水滴保打包后的产品编码，需要保险公司自己记录映射关系'
            },
            {
              key: 'orderMains',
              name: '险种信息',
              type: 'List<OrderMain>',
              isReq: 'N',
              desc: '1、当责任保额都固定时，为空；2当存在可选的险种/责任时，传该信息',
              children: [
                defaults_key.supplierProductNo,
                defaults_key.applyNum,
                {
                  key: 'firstPremium',
                  name: '首期保费',
                  type: 'Long',
                  isReq: 'Y',
                  desc: '非分险种产品时与firstPeriodPremium相同'
                },
                defaults_key.amont
              ]
            },
            defaults_key.issueTime,
            defaults_key.effectTime,
            defaults_key.invalidTime,
            defaults_key.protectPeriodType,
            defaults_key.protectPeriodValue,
            defaults_key.firstPeriodPremium,
            defaults_key.totalAmount,
            defaults_key.payPeriodType,
            defaults_key.payPeriodValue,
            defaults_key.payFrequency,
              defaults_key.isRenewPolicy,
              defaults_key.parentPolicyNo,
              defaults_key.familyBasePolicy,
              defaults_key.productChannel,
              defaults_key.saleNo,
          ]
        },
        {
          key: 'applyUser',
          name: '投保人信息',
          type: 'UserInfo',
          isReq: 'Y',
          desc: '',
          children: defaults_key.UserInfo
        },
        {
          key: 'insuredUsers',
          name: '被保人信息',
          type: 'List<UserInfo>',
          isReq: 'N',
          desc: '',
          children: defaults_key.UserInfo.concat([
            defaults_key.relType,
            defaults_key.hasSocial,
              {
                  key: 'hospitalName',
                  name: '医院名称',
                  type: 'String',
                  isReq: 'N',
                  desc: '手术意外专用'
              },
              {
                  key: 'operationName',
                  name: '手术名称',
                  type: 'String',
                  isReq: 'N',
                  desc: '手术意外专用'
              }
          ])
        },
        {
            key: 'smartProposal',
            name: '智能核保',
            type: 'SmartProposal',
            isReq: 'N',
            desc: '',
            children: [{
                key: 'questionAndAnswer',
                name: '',
                type: 'List<QuestionAndAnswer>',
                isReq: 'N',
                desc: '',
                children: [{
                    key: 'diseaseName',
                    name: '疾病名称',
                    type: 'String',
                    isReq: 'Y',
                    desc: ''
                },
                    {
                        key: 'question',
                        name: '问题',
                        type: 'String',
                        isReq: 'Y',
                        desc: ''
                    },
                    {
                        key: 'answer',
                        name: '答案',
                        type: 'String',
                        isReq: 'Y',
                        desc: ''
                    },
                    {
                        key: 'level',
                        name: '问题层级',
                        type: 'Integer',
                        isReq: 'Y',
                        desc: ''
                    }]
            },
                {key: 'resultType',
                    name: '最终结论类型',
                    type: 'Integer',
                    isReq: 'Y',
                    desc: '1标体投保 2个别疾病除外投保'
                },
                {key: 'resultDesc',
                    name: '除外疾病描述',
                    type: 'String',
                    isReq: 'N',
                    desc: 'resultType为2时，此字段不能为空，为不包括在保险内的疾病名称，以英文逗号分隔'
                }]
        }
      ]
    }
  ],
  核保返回: [
    defaults_key.supplierNo,
    defaults_key.code,
    defaults_key.errorCode,
    defaults_key.errorMsg,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'ProposalOrderResultBody',
      isReq: 'N',
      desc: '成功时必传',
      children: [
        defaults_key.orderNo,
        defaults_key.totalPremium,
        defaults_key.proposalNo,
        defaults_key.proposalTime,
          {
              key: 'needOffline',
              name: '需要线下操作',
              type: 'Boolean',
              isReq: 'N',
              desc: ''
          },
          {
              key: 'offlineMsg',
              name: '进行线下操作时展示的类型',
              type: 'Integer',
              isReq: 'N',
              desc: '1：累计保费超20万；2：被保人成年人，投保人与被保人不是同一人'
          }
      ]
    }
  ],
  承保请求: [
    defaults_key.supplierNo,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'PolicyOrderRequestBody',
      isReq: 'Y',
      desc: '',
      children: [
        {
          key: 'orderNo',
          name: '水滴订单号',
          type: 'String',
          isReq: 'Y',
          desc: ''
        },
        defaults_key.proposalNo,
        defaults_key.payTime,
          {
              key: 'bankCode',
              name: '支付时使用银行卡的银行编码',
              type: 'String',
              isReq: 'N',
              desc: '保险公司需要该信息时需提前与水滴产品经理确认'
          },
          {
              key: 'bankName',
              name: '支付时使用银行卡的银行名称',
              type: 'String',
              isReq: 'N',
              desc: '保险公司需要该信息时需提前与水滴产品经理确认'
          },
          {
              key: 'bankCardNo',
              name: '支付时使用银行卡的卡号',
              type: 'String',
              isReq: 'N',
              desc: '保险公司需要该信息时需提前与水滴产品经理确认'
          },
          {
              key: 'accountName',
              name: '支付时使用银行卡的开户人姓名',
              type: 'String',
              isReq: 'N',
              desc: '保险公司需要该信息时需提前与水滴产品经理确认'
          }
      ]
    }
  ],
  承保返回: [
    defaults_key.supplierNo,
    defaults_key.code,
    defaults_key.errorCode,
    defaults_key.errorMsg,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'PolicyOrderRequestBody',
      isReq: 'Y',
      desc: '',
      children: [
        defaults_key.orderNo,
        defaults_key.policyNo,
        defaults_key.policyTime,
        defaults_key.policyUrl
      ]
    }
  ],
  退保请求: [
    defaults_key.supplierNo,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'RefundOrderRequestBody',
      isReq: 'Y',
      desc: '',
      children: [
        defaults_key.orderNo,
        defaults_key.policyNo,
        defaults_key.refundReqTime,
        defaults_key.refundEffectTime,
        defaults_key.refundType,
        defaults_key.refundMoneyType,
          defaults_key.refundActPremium
      ]
    }
  ],
  退保返回: [
    defaults_key.supplierNo,
    defaults_key.code,
    defaults_key.errorCode,
    defaults_key.errorMsg,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'RefundOrderResultBody',
      isReq: 'Y',
      desc: '',
      children: [
        defaults_key.orderNo,
        defaults_key.policyNo,
        defaults_key.refundTime
      ]
    }
  ],
  续费请求: [
    defaults_key.supplierNo,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'RenewOrderRequestBody',
      isReq: 'Y',
      desc: '',
      children: [
        defaults_key.orderNo,
        defaults_key.policyNo,
        defaults_key.payTime,
        {
          key: 'periods',
          name: '',
          type: 'List<Period>',
          isReq: 'Y',
          desc: '',
          children: [defaults_key.payPremiun, defaults_key.periodNum]
        }
      ]
    }
  ],
  续费返回: [
    defaults_key.supplierNo,
    defaults_key.code,
    defaults_key.errorCode,
    defaults_key.errorMsg,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'RenewOrderResultBody',
      isReq: 'N',
      desc: '成功时必传',
      children: [defaults_key.orderNo, defaults_key.policyNo]
    }
  ],
  退保通知请求: [
    defaults_key.supplierNo,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'RefundNoticeRequestBody',
      isReq: 'Y',
      desc: '',
      children: [
        defaults_key.orderNo,
        defaults_key.policyNo,
        defaults_key.refundMoney,
        defaults_key.refundEffectTime,
        defaults_key.refundTime,
          {
              key: 'needRefund',
              name: '是否需要水滴公司进行退款',
              type: 'Boolean',
              isReq: 'N',
              desc: '默认为false，对接前双方业务约定'
          },
        {
          key: 'reason',
          name: '退款的原因',
          type: 'String',
          isReq: 'Y',
          desc: ''
        }
      ]
    }
  ],
  退保通知返回: [
    defaults_key.supplierNo,
    defaults_key.code,
    defaults_key.errorCode,
    defaults_key.errorMsg,
    {
      key: 'body',
      name: '请求信息的主体',
      type: 'RefundNoticeResultBody',
      isReq: 'N',
      desc: '成功时必传',
      children: [
        defaults_key.orderNo,
        defaults_key.policyNo,
        defaults_key.refundReqTime
      ]
    }
  ],
    长险锁单请求: [
        defaults_key.supplierNo,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'List<RenewLockRequestBody>',
            isReq: 'Y',
            desc: '',
            children: [
                defaults_key.orderNo,
                defaults_key.policyNo,
                defaults_key.periodNum,
                defaults_key.periodOrderNo
            ]
        }
    ],
    长险锁单返回: [
        defaults_key.supplierNo,
        defaults_key.code,
        defaults_key.errorCode,
        defaults_key.errorMsg,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'List<RenewLockResultBody>',
            isReq: 'N',
            desc: '成功时必传',
            children: [
                defaults_key.orderNo,
                defaults_key.policyNo,
                defaults_key.periodNum,
                defaults_key.periodOrderNo,
                defaults_key.payPeriodType,
                defaults_key.payPeriodValue,
                defaults_key.payFrequency,
                {
                    key: 'payFrequencyValue',
                    name: '交费频率数值',
                    type: 'Integer',
                    isReq: 'Y',
                    desc: '默认为1'
                },
                {
                    key: 'discountType',
                    name: '折扣类型',
                    type: 'Integer',
                    isReq: 'Y',
                    desc: '1：无 2：折扣活动（默认为1）'
                },
                {
                    key: 'renewalDuePayPremium',
                    name: '续期应缴保费',
                    type: 'Long',
                    isReq: 'Y',
                    desc: ''
                },
                {
                    key: 'renewalActualPayPremium',
                    name: '续期实缴保费',
                    type: 'Long',
                    isReq: 'Y',
                    desc: ''
                },
                {
                    key: 'discountPremium',
                    name: '折扣金额',
                    type: 'Long',
                    isReq: 'Y',
                    desc: '无折扣时为0'
                },
                {
                    key: 'renewalTime',
                    name: '应交时间',
                    type: 'String',
                    isReq: 'Y',
                    desc: 'yyyy-MM-dd HH:mm:ss'
                },
                {
                    key: 'endOfGraceTime',
                    name: '宽限期截止时间',
                    type: 'String',
                    isReq: 'Y',
                    desc: 'yyyy-MM-dd HH:mm:ss'
                },
                {
                    key: 'status',
                    name: '续期状态',
                    type: 'Integer',
                    isReq: 'Y',
                    desc: '详情见：1.5长险续期状态status'
                },
                {
                    key: 'statusDesc',
                    name: '续期状态信息描述',
                    type: 'String',
                    isReq: 'Y',
                    desc: ''
                }

            ]
        }
    ],
    长险扣费结果同步请求: [
        defaults_key.supplierNo,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'List<RenewPayRequestBody>',
            isReq: 'Y',
            desc: '',
            children: [
                defaults_key.orderNo,
                defaults_key.policyNo,
                defaults_key.periodNum,
                defaults_key.periodOrderNo,
                {
                    key: 'renewalDuePayPremium',
                    name: '续期应缴保费',
                    type: 'Long',
                    isReq: 'Y',
                    desc: ''
                },
                {
                    key: 'renewalActualPayPremium',
                    name: '续期实缴保费',
                    type: 'Long',
                    isReq: 'Y',
                    desc: ''
                },
                {
                    key: 'payMentTime',
                    name: '扣费日期',
                    type: 'String',
                    isReq: 'Y',
                    desc: ''
                },
                {
                    key: 'payMentStatus',
                    name: '扣费状态',
                    type: 'Integer',
                    isReq: 'Y',
                    desc: '0 成功  1失败 保险公司需要根据这个状态进行相关处理，并对保单进行解锁处理'
                }
                // {
                //     key: 'paymentMessage',
                //     name: '扣费失败原因',
                //     type: 'String',
                //     isReq: 'N',
                //     desc: '当PayMentStatus是1 的时候给出具体扣费失败原因，主要包括用户卡余额不足，用户签约信息异常等'
                // }
            ]
        }
    ],
    长险扣费结果同步返回: [
        defaults_key.supplierNo,
        defaults_key.code,
        defaults_key.errorCode,
        defaults_key.errorMsg,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'List<RenewPayResultBody>',
            isReq: 'N',
            desc: '成功时必传',
            children: [
                defaults_key.orderNo,
                defaults_key.policyNo,
                defaults_key.periodNum,
                defaults_key.periodOrderNo,
                {
                    key: 'status',
                    name: '保险公司处理续期记录额',
                    type: 'Integer',
                    isReq: 'Y',
                    desc: '0 成功  1失败 水滴公司根据这个状态进行重试等相关处理'
                }
            ]
        }
    ],
    退保试算请求: [
        defaults_key.supplierNo,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'UpgradeOrderRequestBody',
            isReq: 'Y',
            desc: '',
            children: [
                defaults_key.orderNo,
                defaults_key.policyNo,
                defaults_key.refundReqTime,
                defaults_key.refundEffectTime
            ]
        }
    ],
    退保试算返回: [
        defaults_key.supplierNo,
        defaults_key.code,
        defaults_key.errorCode,
        defaults_key.errorMsg,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'UpgradeOrderResultBody',
            isReq: 'N',
            desc: '成功时必传',
            children: [
                defaults_key.orderNo,
                defaults_key.policyNo,
                {
                    key: 'refundPremium',
                    name: '应退保费',
                    type: 'Long',
                    isReq: 'Y',
                    desc: '正常退款时的退款金额'
                }
            ]
        }
    ],
    保单升级请求: [
        defaults_key.supplierNo,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'UpgradeOrderRequestBody',
            isReq: 'Y',
            desc: '',
            children: [
                defaults_key.orderNo,
                defaults_key.policyNo,
                {
                    key: 'phyExamResult',
                    name: '体检结果',
                    type: 'Integer',
                    isReq: 'Y',
                    desc: '1：标准体 2：优选体'
                }
            ]
        }
    ],
    保单升级返回: [
        defaults_key.supplierNo,
        defaults_key.code,
        defaults_key.errorCode,
        defaults_key.errorMsg,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'UpgradeOrderResultBody',
            isReq: 'N',
            desc: '成功时必传',
            children: [
                {
                    key: 'upgradeStatus',
                    name: '保单升级状态',
                    type: 'Integer',
                    isReq: 'Y',
                    desc: '1：升级完成 2：不进行升级'
                },
                {
                    key: 'policyUrl',
                    name: '新电子保单地址',
                    type: 'String',
                    isReq: 'N',
                    desc: 'upgradeStatus为1时，该字段为必填'
                }
            ]
        }
    ],
    赠险出单请求: [
        defaults_key.supplierNo,
        {
            key: 'body',
            name: '请求主体',
            type: 'PolicyFreeRequestBody',
            isReq: 'Y',
            desc: '',
            children: [
                {
                    key: 'orderInfo',
                    name: '订单信息',
                    type: 'OrderInfo',
                    isReq: 'Y',
                    desc: '',
                    children: [
                        defaults_key.orderNo,
                        {
                            key: 'productNo',
                            name: '水滴产品编码',
                            type: 'String',
                            isReq: 'Y',
                            desc: '水滴保打包后的产品编码，需要保险公司自己记录映射关系'
                        },
                        defaults_key.issueTime,
                        defaults_key.effectTime,
                        defaults_key.invalidTime,
                        defaults_key.protectPeriodType,
                        defaults_key.protectPeriodValue,
                        defaults_key.totalPremium,
                        defaults_key.totalAmount
                    ]
                },
                {
                    key: 'applyUser',
                    name: '投保人信息',
                    type: 'UserInfo',
                    isReq: 'Y',
                    desc: '',
                    children: defaults_key.UserInfo
                },
                {
                    key: 'insuredUsers',
                    name: '被保人信息',
                    type: 'List<UserInfo>',
                    isReq: 'N',
                    desc: '',
                    children: defaults_key.UserInfo.concat([
                        defaults_key.relType,
                        defaults_key.hasSocial
                    ])
                }
            ]
        }
    ],
    赠险出单返回: [
        defaults_key.supplierNo,
        defaults_key.code,
        defaults_key.errorCode,
        defaults_key.errorMsg,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'PolicyFreeResultBody',
            isReq: 'N',
            desc: '成功时必传',
            children: [
                defaults_key.orderNo,
                defaults_key.policyNo,
                defaults_key.policyTime,
                defaults_key.policyUrl
            ]
        }
    ],
    数据同步请求: [
        defaults_key.supplierNo,
        {
            key: 'body',
            name: '请求主体',
            type: 'DataTransferRequestBody',
            isReq: 'Y',
            desc: '',
            children: [
                {
                    key: 'sdSupplierName',
                    name: '水滴合作方名称',
                    type: 'String',
                    isReq: 'Y',
                    desc: '水滴保存的合作方名称'
                },
                defaults_key.orderNo,
                defaults_key.policyNo,
                {
                    key: 'status',
                    name: '订单状态',
                    type: 'Integer',
                    isReq: 'Y',
                    desc: '4:新增单 12：退保订单'
                },
                {
                    key: 'productNo',
                    name: '产品编码',
                    type: 'String',
                    isReq: 'Y',
                    desc: ''
                },
                {
                    key: 'name',
                    name: '姓名',
                    type: 'String',
                    isReq: 'Y',
                    desc: ''
                },
                {
                    key: 'mobile',
                    name: '手机号',
                    type: 'String',
                    isReq: 'N',
                    desc: ''
                },
                {
                    key: 'idType',
                    name: '证件类型',
                    type: 'Integer',
                    isReq: 'Y',
                    desc: '见附录'
                },
                {
                    key: 'idCode',
                    name: '证件号码',
                    type: 'String',
                    isReq: 'Y',
                    desc: ''
                },
                defaults_key.effectTime,
                defaults_key.invalidTime,
                {
                    key: 'surrenderTime',
                    name: '保单退保时间',
                    type: 'String',
                    isReq: 'N',
                    desc: 'status为4时该字段为空。yyyy-MM-dd HH:mm:ss'
                }
            ]
        }
    ],
    数据同步返回: [
        defaults_key.supplierNo,
        defaults_key.code,
        defaults_key.errorCode,
        defaults_key.errorMsg,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'DataTransferResultBody',
            isReq: 'N',
            desc: '成功时必传',
            children: [
                {
                    key: 'sdSupplierName',
                    name: '水滴合作方名称',
                    type: 'String',
                    isReq: 'Y',
                    desc: '水滴保存的合作方名称'
                }
            ]
        }
    ],
    订单状态通知请求: [
        defaults_key.supplierNo,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'StatusNoticeRequestBody',
            isReq: 'Y',
            desc: '',
            children: [
                defaults_key.orderNo,
                defaults_key.policyNo,
                {
                    key: 'orderStatus',
                    name: '订单状态',
                    type: 'Integer',
                    isReq: 'Y',
                    desc: '1.已支付；3：已承保；12：已退保；6：已失效；0：可支付(线下核保专用，非线下核保切勿同步次状态)；'
                },
                {
                    key: 'needSave',
                    name: '是否需要水滴下载保存电子保单',
                    type: 'Boolean',
                    isReq: 'N',
                    desc: '只有orderStatus为3时才会处理该字段；；；为true时水滴会按照policyUrl下载保单地址，并存储在水滴'
                },
                {
                    key: 'policyUrl',
                    name: '电子保单下载地址',
                    type: 'String',
                    isReq: 'N',
                    desc: '只有orderStatus为3时才会处理该字段'
                }
            ]
        }
    ],
    订单状态通知返回: [
        defaults_key.supplierNo,
        defaults_key.code,
        defaults_key.errorCode,
        defaults_key.errorMsg
    ],
    回执确认请求: [
        defaults_key.supplierNo,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'OrderReceiptRequestBody',
            isReq: 'Y',
            desc: '',
            children: [
                defaults_key.orderNo,
                defaults_key.policyNo,
                {
                    key: 'receiptTime',
                    name: '用户签收回执的时间',
                    type: 'String',
                    isReq: 'Y',
                    desc: 'yyyy-MM-dd HH:mm:ss'
                }
            ]
        }
    ],
    回执确认返回: [
        defaults_key.supplierNo,
        defaults_key.code,
        defaults_key.errorCode,
        defaults_key.errorMsg
    ],
    电子保单查询请求: [
        defaults_key.supplierNo,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'QueryPolicyRequestBody',
            isReq: 'Y',
            desc: '',
            children: [
                defaults_key.orderNo,
                defaults_key.policyNo,
            ]
        }
    ],
    电子保单查询返回: [
        defaults_key.supplierNo,
        defaults_key.code,
        defaults_key.errorCode,
        defaults_key.errorMsg,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'QueryPolicyResultBody',
            isReq: 'N',
            desc: '成功时必传',
            children: [
                defaults_key.policyUrl
            ]
        }
    ],
    预核保接口请求: [
        defaults_key.supplierNo,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'PreProposalRequestBody',
            isReq: 'Y',
            desc: '',
            children: [
                defaults_key.orderNo,
                {
                    key: 'insuredUsers',
                    name: '被保人信息',
                    type: 'List<UserInfo>',
                    isReq: 'N',
                    desc: '',
                    children: defaults_key.UserInfo.concat([
                        defaults_key.relType,
                        defaults_key.hasSocial,
                        {
                            key: 'hospitalName',
                            name: '医院名称',
                            type: 'String',
                            isReq: 'N',
                            desc: '手术意外专用'
                        },
                        {
                            key: 'operationName',
                            name: '手术名称',
                            type: 'String',
                            isReq: 'N',
                            desc: '手术意外专用'
                        }
                    ])
                },
            ]
        }
    ],
    预核保接口返回: [
        defaults_key.supplierNo,
        defaults_key.code,
        defaults_key.errorCode,
        defaults_key.errorMsg,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'PreProposalResultBody',
            isReq: 'N',
            desc: '成功时必传',
            children: [
                {
                    key: 'preProposalResult',
                    name: '预核保结果',
                    type: 'Boolean',
                    isReq: 'Y',
                    desc: '预核保的结果'
                },
                {
                    key: 'preProposalResultMsg',
                    name: '预核保结果的描述',
                    type: 'String',
                    isReq: 'Y',
                    desc: '预核保的结果描述'
                }
            ]
        }
    ],
    出单同步接口请求: [
        defaults_key.supplierNo,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'OrderTransferRequestBody',
            isReq: 'Y',
            desc: '',
            children: [
                defaults_key.orderNo
            ]
        }
    ],
    出单同步接口返回: [
        defaults_key.supplierNo,
        defaults_key.code,
        defaults_key.errorCode,
        defaults_key.errorMsg
    ],
    订单查询接口请求: [
        defaults_key.supplierNo,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'QueryOrderRequestBody',
            isReq: 'Y',
            desc: '',
            children: [
                defaults_key.orderNo,
                defaults_key.proposalNo,
            ]
        }
    ],
    订单查询接口返回: [
        defaults_key.supplierNo,
        defaults_key.code,
        defaults_key.errorCode,
        defaults_key.errorMsg,
        {
            key: 'body',
            name: '请求信息的主体',
            type: 'QueryOrderResultBody',
            isReq: 'N',
            desc: '成功时必传',
            children: [
                defaults_key.orderNo,
                defaults_key.proposalNo,
                {
                    key: 'orderStatus',
                    name: '订单状态',
                    type: 'Integer',
                    isReq: 'Y',
                    desc: '1.已支付；3：已承保；12：已退保；6：已失效；0：可支付(线下核保专用，非线下核保切勿同步次状态)；'
                },
                {
                    key: 'policyNo',
                    name: '保单号',
                    type: 'String',
                    isReq: 'N',
                    desc: '已承保状态时必传'
                },
                defaults_key.policyUrl
            ]
        }
    ]
}
