/**
 * Money.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    contractNo: {
      type: "string"
    },//合同号

    busiType: {
      type: "string"
    },//业务类型

    saveAmount: {
      type: "string"
    },//存入金额

    interestRate: {
      type: "string"
    },//利率

    interest: {
      type: "string"
    },//利息

    confirmedDate: {
      type: "string",
      columnType:"date"
    },//确认日期

    startDate: {
      type: "string",
      columnType:"date"
    },//起息日

    maturityDate: {
      type: "string",
      columnType:"date"
    },//到期日
    

  },

};

