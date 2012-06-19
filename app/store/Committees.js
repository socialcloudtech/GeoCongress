/*
 * File: app/store/Committees.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('GeoCon.store.Committees', {
    extend: 'Ext.data.Store',

    requires: [
        'GeoCon.model.Committee'
    ],

    config: {
        groupField: 'chamber',
        model: 'GeoCon.model.Committee',
        storeId: 'Committees',
        proxy: {
            type: 'jsonp',
            extraParams: {
                apikey: '8a341f85c657435989e75c9a83294762'
            },
            url: 'http://services.sunlightlabs.com/api/committees.allForLegislator',
            callbackKey: 'jsonp',
            reader: {
                type: 'json',
                rootProperty: 'response.committees',
                record: 'committee'
            }
        }
    }
});