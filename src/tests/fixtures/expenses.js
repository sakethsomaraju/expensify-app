import moment from 'moment'

export default  [{
    id:'1',
    description:'Gun',
    note:'',
    amount:195,
    createdAt:0
},{
    id:'2',
    description:'rent',
    note:'',
    amount:1935,
    createdAt:moment(0).subtract(4,'days').valueOf()
},{
    id:'3',
    description:'Credit card',
    note:'',
    amount:5,
    createdAt:moment(0).add(4,'days').valueOf()
}]