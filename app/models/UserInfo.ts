import Realm, { BSON, ObjectSchema } from "realm";

export class UserInfo extends Realm.Object<UserInfo>{
    _id!: BSON.ObjectID;
    name!: string;

    static schema: ObjectSchema = {
        name:'UserInfo',
        properties: {
            _id: 'objectId',
            name: {
                type: 'string',
                indexed: 'full-text'
            }
        },
        primaryKey: '_id'
    }
}