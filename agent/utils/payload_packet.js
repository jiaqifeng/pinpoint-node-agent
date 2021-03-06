/**
 *
 * payload packet tool
 * 
 * Date: 2016-05-11 18:45
 * Author: psnail
 *
 */

'use strict';

var PayloadPacket = {

    appendPayload : function (header, payload) {
        if (payload === null) {
           header.writeInt(-1);
           return header;
        } else {
            header.writeInt(payload.length);
            return Buffer.concat([header.getBuffer(), payload]);
        }
    },

    readPayload : function (buffer) {
        var len = buffer.readInt();    
        if(len <= 0){
            return new Buffer();
        }
        return buffer.readBytes(len);
    }

};


module.exports = PayloadPacket;
