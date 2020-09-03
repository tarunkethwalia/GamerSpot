const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    AccountType: {type: Schema.Types.String, required: true},
    AccountStatus: {type: Schema.Types.String, default: 'Trial'}
}, {timestamps: true});

const subscription = mongoose.model('Subscription', subscriptionSchema);

const userSchema = new Schema({
    Username : {type: Schema.Types.String, required: true},
    Password : {type: Schema.Types.String, required: true},
    PhoneNo : {type: Schema.Types.Number, required: true},
    WalletMoney : {type: Schema.Types.Number, default: 0},
    MatchesPlayed : {type: [Schema.Types.String]},
    PlayerLevel : {type: Schema.Types.Number},
    Followers : {type: [Schema.Types.String]},
    Following : {type: [Schema.Types.String]},
    Notifications : {type: [Schema.Types.String]},
    EventsTypeOnline : {type: [Object]},
    EventsTypeOffline : {type: [Object]},
    Orders : {type: [Object]},
    Subscription : {type: Schema.Types.ObjectId, ref: subscription}
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);