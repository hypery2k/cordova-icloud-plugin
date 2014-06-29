/*
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Martin Reinhardt
 * Copyright (c) 2012 Alex Drel
 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */


var iCloudKV = function() {

};

iCloudKV.prototype = {
    var onChange = null;

    sync: function(success, fail) {
        return cordova.exec(success /*(dictionary_with_all_sync_keys)*/ , fail, "iCloudKV", "sync", []);
    },

    save: function(key, value, success) {
        return cordova.exec(success, null, "iCloudKV", "save", [key, value]);
    },

    load: function(key, success, fail) {
        return cordova.exec(success /*(value)*/ , fail, "iCloudKV", "load", [key]);
    },

    remove: function(key, success) {
        return cordova.exec(success, null, "iCloudKV", "remove", [key]);
    },

    monitor: function(notification /*(keys)*/ , success) {
        onChange = notification;
        return cordova.exec(success, null, "iCloudKV", "monitor", []);
    },

    onChange: function(keys) {
        if (onChange) {
            onChange(keys);
        }
    }

};

var plugin = new iCloudKV();

module.exports = plugin;